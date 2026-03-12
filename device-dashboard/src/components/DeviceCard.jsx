function DeviceCard({ device }) {
    return (
      <div className="device-card">
        <h3>{device.device}</h3>
        <p>Status: {device.status}</p>
        <p>Measurement: {device.value}</p>
      </div>
    );
  }
  
  export default DeviceCard;