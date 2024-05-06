import websocket

# Connect to the websocket
ws = websocket.create_connection("ws://<WEBSOCKET_IP>:<PORT>")

# Send a command to the drone
ws.send(json.dumps({"command": "takeoff"}))