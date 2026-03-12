function DeviceCard({ device }) {
    return (
      <div className="device-card">
        <h3>{device.title}</h3>
        <p>{device.body}</p>
      </div>
    );
  }
  
  export default DeviceCard;