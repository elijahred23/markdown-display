#!/bin/bash

# Start npm run dev in the background
npm run dev &
P1=$!


# Wait for both background processes to finish
wait $P1 