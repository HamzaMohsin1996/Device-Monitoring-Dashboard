import { useEffect, useState } from "react";
import { fetchDevices } from "../services/api";
import DeviceCard from "../components/DeviceCard";

function Dashboard() {

  const [devices, setDevices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchDevices().then((data) => {
      setDevices(data);
    });
  }, []);

  const filteredDevices = devices.filter((device) => {

    const matchesSearch =
      device.device.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || device.status === statusFilter;

    return matchesSearch && matchesStatus;

  });

  return (
    <div>

      <h1>Device Monitoring Dashboard</h1>

      <div className="controls">

        <input
          type="text"
          placeholder="Search device..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>

      </div>

      <div className="device-grid">
        {filteredDevices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>

    </div>
  );
}

export default Dashboard;