import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <>
        {/* Header */}
        <Header />
            {/* Main Contents */}
            <Outlet />
          {/* Footer */}
        <Footer />
    </>
  )
}

export default UserLayout