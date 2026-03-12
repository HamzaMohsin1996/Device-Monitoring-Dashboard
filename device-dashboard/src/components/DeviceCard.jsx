function DeviceCard({ device }) {
    return (
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{device.device}</h5>
            <p className="card-text">
              Status: 
              <span className={device.status === "Online" ? "text-success" : "text-danger"}>
                {device.status}
              </span>
            </p>
            <p className="card-text">
              Measurement: {device.value}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default DeviceCard;