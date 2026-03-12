import { useEffect, useState } from "react";
import { fetchDevices } from "../services/api";
import DeviceCard from "../components/DeviceCard";

function Dashboard() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDevices().then((data) => {
      setDevices(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading devices...</p>;

  return (
    <div>
      <h1>Device Monitoring Dashboard</h1>

      <div className="device-grid">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;