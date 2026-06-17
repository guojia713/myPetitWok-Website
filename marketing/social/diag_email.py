#!/usr/bin/env python3
"""Diagnose Zoho SMTP auth: try common host/port/security combos with your
email_config.json credentials and report which one logs in successfully.

This only tests LOGIN (no email is sent). Once it prints a WORKING combo,
update smtp_host / smtp_port in email_config.json to match.

Usage:
    python3 marketing/social/diag_email.py
"""
import json
import smtplib
import ssl
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG_PATH = HERE / "email_config.json"

COMBOS = [
    # (host, port, mode)  mode: "starttls" or "ssl"
    ("smtp.zoho.eu", 587, "starttls"),
    ("smtppro.zoho.eu", 587, "starttls"),
    ("smtp.zoho.eu", 465, "ssl"),
    ("smtppro.zoho.eu", 465, "ssl"),
    ("smtp.zoho.com", 587, "starttls"),
    ("smtppro.zoho.com", 587, "starttls"),
]


def try_login(host, port, mode, user, pw):
    context = ssl.create_default_context()
    try:
        if mode == "ssl":
            server = smtplib.SMTP_SSL(host, port, timeout=20, context=context)
        else:
            server = smtplib.SMTP(host, port, timeout=20)
            server.starttls(context=context)
        with server:
            server.login(user, pw)
        return True, "OK"
    except Exception as exc:  # noqa: BLE001
        return False, str(exc)


def main():
    if not CONFIG_PATH.exists():
        print(f"No config at {CONFIG_PATH} — create it from email_config.example.json first.")
        sys.exit(2)
    cfg = json.loads(CONFIG_PATH.read_text())
    user = cfg["username"]
    pw = cfg["app_password"]
    print(f"Testing login for {user} (password length: {len(pw)} chars)\n")

    working = []
    for host, port, mode in COMBOS:
        ok, detail = try_login(host, port, mode, user, pw)
        mark = "✅ WORKS" if ok else "❌ fail"
        print(f"  {mark}  {host}:{port} ({mode})" + ("" if ok else f"  → {detail}"))
        if ok:
            working.append((host, port, mode))

    print()
    if working:
        host, port, mode = working[0]
        print(f"➡️  Use smtp_host={host}, smtp_port={port} in email_config.json")
        if mode == "ssl":
            print("    (port 465 = SSL; send_email.py uses STARTTLS, so prefer a 587 combo if one works.)")
    else:
        print("None worked. The credentials/settings are the issue, not the host. Check:")
        print("  • SMTP/IMAP access ENABLED in Zoho (Settings → Mail Accounts → IMAP → Enable)")
        print("  • Using an APP PASSWORD (Settings → Security → App Passwords), not your login password")
        print("  • App password pasted with NO spaces")
        print("  • Account has a verified phone number (Security)")


if __name__ == "__main__":
    main()
