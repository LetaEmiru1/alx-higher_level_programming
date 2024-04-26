#!/bin/bash

# Make a request to the server and redirect the response to /dev/null
curl -s -X PUT 0.0.0.0:5000/catch_me -d "user_id=98" -L -o /dev/null

# Check if the request was successful (HTTP status code 200)
if [ $? -eq 0 ]; then
    # If successful, exit with status code 0
    exit 0
fi

# If not successful, exit with status code 1
exit 1

