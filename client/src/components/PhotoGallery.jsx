import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import ImageCard from './ImageCard';

const PhotoGallery = () => {
  return (
    <div className='my-20 bg-white flex flex-col justify-center items-center'>
    <h3 className='text-3xl font-semibold my-14'>Photos</h3>

    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20'>
        <ImageCard 
        title="The House"
        author="aditya"
        img="https://images.pexels.com/photos/3238764/pexels-photo-3238764.jpeg"
        price={10}
        icon1={<FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>}
        />
        <ImageCard 
        title="View"
        author="aditya"
        img="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        price={12}
        icon1={<FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>}
        />
        <ImageCard 
        title="River"
        author="aditya"
        img="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        price={10}
        icon1={<FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>}
        /> 
        <ImageCard 
        title="River"
        author="aditya"
        img="https://images.pexels.com/photos/128234/pexels-photo-128234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        price={10}
        icon1={<FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>}
        /> 
        <ImageCard 
        title="Mountain"
        author="aditya"
        img="https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        price={10}
        icon1={<FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>}
        /> 
        <ImageCard 
        title="Moon"
        author="aditya"
        img="https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        price={10}
        icon1={<FaShoppingCart className='text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300' />}
        icon2={<IoIosHeart className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300'/>}
        /> 
    </div>
    </div>
  )
}

export default PhotoGallery