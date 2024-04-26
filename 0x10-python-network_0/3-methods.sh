#!/bin/bash
# take in a URL and display all HTTP method the server will accept
curl -sI ALLOW $1 -L | grep "Allow" | cut -d " " -f2-
