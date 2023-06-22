const DashboardComp = () => {
  return (
    <div className="col-sm-9">
      <div className="card mb-3 dashboard-admin">
        <div className="card-body">
          <h4 className="card-title">Dashboard</h4>
          <p className="card-text">Hallo, Yudi</p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 ">
          <div className="card mb-3 dashboard-admin">
            <div className="card-body">
              <h4 className="card-title">Users</h4>
              <p className="card-text">1 Million</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card mb-3 dashboard-admin">
            <div className="card-body">
              <h4 className="card-title">Pages</h4>
              <p className="card-text">100 Million</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card mb-3 dashboard-admin">
            <div className="card-body">
              <h4 className="card-title">Sessions</h4>
              <p className="card-text">10 Million</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card mb-3 dashboard-admin">
            <div className="card-body">
              <h4 className="card-title">Bounce</h4>
              <p className="card-text">30%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card mb-3 dashboard-admin">
            <div className="card-body">
              <p className="card-text"><b>Notifikasi Admin</b></p>
              <p className="card-text">Update Role Admin!</p>
              <p className="card-text">Admin Approve!</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-3 dashboard-admin">
            <div className="card-body">
              <p className="card-text"><b>Notifikasi User</b></p>
              <p className="card-text">User Payment!</p>
              <p className="card-text">User Call!</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card mb-3 dashboard-admin">
            <div className="card-body">
              <p className="card-text"><b>Payment</b></p>
              <p className="card-text">12K Success</p>
              <p className="card-text">10 Failed</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default DashboardComp;
