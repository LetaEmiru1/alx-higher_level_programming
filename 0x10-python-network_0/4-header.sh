#!/bin/bash
# takes in a URL as an argument, sends a GET request to the URL, and display the body of the response
curl -sX GET $1 -H "X-School-User-Id: 98" -L
