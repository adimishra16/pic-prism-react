import React from 'react'
import DashboardHeader from '../DashboardHeader'
import ImageAdd from '../ImageAdd'

const PhotoManagement = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
    {/* DashBoard header */}
    <DashboardHeader/>
    {/* Image add component will be here*/}
    <ImageAdd/>
    </div>
  )
}

export default PhotoManagement