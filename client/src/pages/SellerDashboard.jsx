import React from 'react'
import DashBoardSideBar from '../components/DashBoardSideBar'
import PhotoManagement from '../components/selller/PhotoManagement'

const SellerDashboard = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      <DashBoardSideBar/>
      <div>
        {/* switch Case */}
      </div>
      <PhotoManagement/>
    </div>
  )
}

export default SellerDashboard