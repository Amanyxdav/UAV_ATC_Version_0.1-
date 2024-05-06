import mavutil

# Connect to the drone's autopilot
mav = mavutil.mavlink_connection("udp:<DRONE_IP>:<PORT>")

# Set the drone's mission using the MAVLink Mission Protocol
mission_items = [
    {
        'frame': mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT,
        'command': mavutil.mavlink.MAV_CMD_WAYPOINT,
        'current': 0,
        'autocontinue': 1,
        'params': [0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        'frame': mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT,
        'command': mavutil.mavlink.MAV_CMD_WAYPOINT,
        'current': 0,
        'autocontinue': 1,
        'params': [<LATITUDE_1>, <LONGITUDE_1>, <ALTITUDE_1>, 0, 0, 0, 0, 0]
    },
    {
        'frame': mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT,
        'command': mavutil.mavlink.MAV_CMD_WAYPOINT,
        'current': 0,
        'autocontinue': 1,
        'params': [<LATITUDE_2>, <LONGITUDE_2>, <ALTITUDE_2>, 0, 0, 0, 0, 0]
    }
]

mav.mav.command_long_send(
    mav.target_system,
    mavutil.mavlink.MAV_CMD_MISSION_SET_CURRENT,
    0,
    0,
    0,
    0,
    0,
    mavutil.mavlink.MAV_MISSION_TYPE_MISSION,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    len(mission_items),
    mission_items
)

# Wait for the mission to be uploaded
while True:
    msg = mav.recv_match(type='MISSION_COUNT', blocking=True)
    if msg.count == len(mission_items):
        break

# Start the mission
mav.mav.command_long_send(
    mav.target_system,
    mavutil.mavlink.MAV_CMD_MISSION_START,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
)

# Wait for the mission to complete
while True:
    msg = mav.recv_match(type='MISSION_ITEM', blocking=True)
    if msg.seq >= len(mission_items):
        break