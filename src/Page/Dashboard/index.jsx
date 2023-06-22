import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../Components/DashboardComp/Sidebar';
import DashboardComp from '../../../Components/DashboardComp/Dashboard';
import MobileNavbar from '../../../Components/DashboardComp/MobileNavbar';
import Footer from '../../../Components/DashboardComp/Footer';

const Dashboard = () => {
  const [data, setData] = useState({
    loading: true,
    token: ''
  })

  useEffect(() => {

    const asyncCallback = async () => {
      const token = localStorage.getItem("token");
      setData({
        ...data,
        loading: false,
        token
      })
    }
    asyncCallback()

  }, []);

  if (!data.token) {
    return (
      <>
        <p>Anda Belum Login, Silahkan login <Link to={'/login'}>disini</Link> </p>
      </>
    )
  } else {
    return (
      <>
        <MobileNavbar />
        <div className="container-fluid mt-3" style={{ marginBottom: 120 }}>
          <div className="row content">
            <Sidebar />
            <br />
            <DashboardComp />
          </div>
        </div>
        <Footer />
      </>
    );
  };
}

export default Dashboard;
