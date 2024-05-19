import useTypewriterEffect from "../components/core/TypewritterEffect";

const LiveData = ({ droneData, handleClosePopup }) => {
  const formattedData = droneData
    .map(
      (data, index) => `
  Drone: ${index + 1}
  Height: ${data.height}
  Altitude: ${data.altitude}
  Battery Health: ${data.battery_health}
  Battery Percentage: ${data.battery_percentage}
  Location: ${data.location}
  GPS Coordinates: Latitude ${data.gps_coordinates.latitude}, Longitude ${data.gps_coordinates.longitude}
  Flight Routes: ${data.flight_routes.join(", ")}
  RPM Propellers: ${data.rpm_propellers}
  Range: ${data.range}
  Packet Loss: ${data.packet_loss}%
  Ping: ${data.ping} ms
  Wi-Fi Connectivity: ${data.wifi_connectivity}
`
    )
    .join("\n");

  const displayedData = useTypewriterEffect(formattedData, 20); 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-95 z-50">
      <div className="bg-black text-green-400 p-4 rounded-md shadow-lg w-3/4 max-w-2xl h-3/4 overflow-y-auto border border-green-500">
        <div className="flex justify-between items-center border-b border-green-600 pb-2 mb-4">
          <h2 className="text-lg font-bold">Live Drone Data</h2>
          <button
            onClick={handleClosePopup}
            className="text-red-400 hover:text-red-600 focus:outline-none"
          >
            X
          </button>
        </div>
        <pre className="whitespace-pre-wrap font-mono">{displayedData}</pre>
      </div>
    </div>
  );
};

export default LiveData;
