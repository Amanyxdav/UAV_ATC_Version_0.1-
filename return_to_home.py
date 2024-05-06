import mavutil

# Connect to the drone's autopilot
mav = mavutil.mavlink_connection("udp:<DRONE_IP>:<PORT>")

# Send a return-to-home command at the end of the mission
mav.mav.command_long_send(
    mav.target_system,
    mavutil.mavlink.MAV_CMD_NAV_RETURN_TO_LAUNCH,
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