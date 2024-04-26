#!/bin/bash

# Make a request to the server and redirect the response to /dev/null
curl -s -X PUT 0.0.0.0:5000/catch_me -d "user_id=98" -H "Origin: HolbertonSchool" -L -o /dev/null

# Check if the request was successful (HTTP status code 200)
if [ $? -eq 0 ]; then
    # If successful, display the message
    echo "You got me!"
fi

