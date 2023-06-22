import { Card } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="col-sm-3 d-none d-sm-block">
      <h2>Yudi Gunawan</h2>
      <Card className='dashboard-admin'>
        <Card.Body>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#section1">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section2">Age</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section3">Gender</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section4">Geo</a>
              </li>
            </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sidebar;
