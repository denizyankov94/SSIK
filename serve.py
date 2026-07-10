#!/usr/bin/env python3
"""Minimal static file server for the MONOLIT site.
Avoids `python -m http.server` (which calls os.getcwd() at import and is
blocked in this sandbox) by binding the handler to an explicit directory."""
import functools
import http.server
import socketserver

DIRECTORY = "/Users/denizyankov/Desktop/Claude-Websıte"
PORT = 4173

Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIRECTORY)

with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"Serving {DIRECTORY} at http://127.0.0.1:{PORT}")
    httpd.serve_forever()
