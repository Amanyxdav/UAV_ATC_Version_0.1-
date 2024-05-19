import json
from flask_cors import CORS
from flask import Flask, jsonify
from DroneData import drone_data

# Define the Flask app
app = Flask(__name__)

# Enable CORS
CORS(app, origins="*", methods=["GET", "POST", "DELETE"])


@app.route("/data")
def get_drone_data():
    return jsonify(drone_data)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
