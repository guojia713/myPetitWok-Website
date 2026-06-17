#!/usr/bin/env python3
"""Send a text/markdown file as an email via SMTP.

Used by the weekly-social-post-draft scheduled task to deliver the draft to the
founder's inbox. Config (incl. the app password) lives in email_config.json next
to this script — that file is git-ignored and must be created from
email_config.example.json.

Usage:
    python3 send_email.py path/to/draft.md
    python3 send_email.py path/to/draft.md --subject "Custom subject"

Exit codes:
    0  email sent
    2  config missing / not filled in   (task should warn, not hard-fail)
    3  send failed (auth/network)
"""
import json
import smtplib
import ssl
import sys
from email.message import EmailMessage
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG_PATH = HERE / "email_config.json"
PLACEHOLDER = "PASTE_YOUR_ZOHO_APP_PASSWORD_HERE"


def load_config():
    if not CONFIG_PATH.exists():
        print(
            f"[send_email] No config at {CONFIG_PATH}.\n"
            f"  Copy email_config.example.json -> email_config.json and add your app password.",
            file=sys.stderr,
        )
        sys.exit(2)
    cfg = json.loads(CONFIG_PATH.read_text())
    if not cfg.get("app_password") or cfg["app_password"] == PLACEHOLDER:
        print(
            "[send_email] app_password is not set in email_config.json. "
            "Generate a Zoho app password and paste it in.",
            file=sys.stderr,
        )
        sys.exit(2)
    return cfg


def main(argv):
    if len(argv) < 2:
        print("Usage: python3 send_email.py <body_file> [--subject \"...\"]", file=sys.stderr)
        sys.exit(1)

    body_path = Path(argv[1])
    if not body_path.exists():
        print(f"[send_email] Body file not found: {body_path}", file=sys.stderr)
        sys.exit(1)

    subject_override = None
    if "--subject" in argv:
        i = argv.index("--subject")
        if i + 1 < len(argv):
            subject_override = argv[i + 1]

    cfg = load_config()
    body = body_path.read_text()

    msg = EmailMessage()
    msg["From"] = cfg["from_addr"]
    msg["To"] = cfg["to_addr"]
    msg["Subject"] = subject_override or cfg.get("subject", "MyPetitWok — social post")
    msg.set_content(body)

    context = ssl.create_default_context()
    try:
        with smtplib.SMTP(cfg["smtp_host"], int(cfg["smtp_port"]), timeout=30) as server:
            server.starttls(context=context)
            server.login(cfg["username"], cfg["app_password"])
            server.send_message(msg)
    except Exception as exc:  # noqa: BLE001 - report any send failure clearly
        print(f"[send_email] Failed to send: {exc}", file=sys.stderr)
        sys.exit(3)

    print(f"[send_email] Sent '{msg['Subject']}' to {cfg['to_addr']}.")


if __name__ == "__main__":
    main(sys.argv)
