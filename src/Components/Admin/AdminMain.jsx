import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch
// } from 'react-router-dom';
import Content from './Content'
import Siderbar from './Siderbar'
import TopBar from './TopBar'


// import '../../Shared/scss/bootstrap/tables.scss'
import './AdminMain.scss'

const AdminMain = () => {
  return (
    <div>
      <div id="main-wrapper" data-theme="dark" data-layout="vertical" data-sidebartype="full"  >
      {/* data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"  data-header-position="fixed" data-boxed-layout="full" */}
        <TopBar/>
        <Siderbar/>
        {/* <Router> */}
        <Content/>
          {/* <Switch>
            <Route path='/empleados' exact>
            </Route>
            <Redirect to="/admin"/>
          </Switch> */}
        {/* </Router> */}
      </div>
    </div>
  )
}

export default AdminMain
