import websocket
import json
import sqlite3

# Connect to the Raspberry Pi's websocket
ws = websocket.create_connection("ws://<RASPBERRY_PI_IP>:<PORT>")

# Collect data from the websocket
data = ws.recv()
data = json.loads(data)

# Send the data to the frontend of the website
# ...

# Store the data in the database
conn = sqlite3.connect("drone_data.db")
cursor = conn.cursor()
cursor.execute("INSERT INTO data (timestamp, data) VALUES (?, ?)", (time.time(), json.dumps(data)))
conn.commit()
conn.close()