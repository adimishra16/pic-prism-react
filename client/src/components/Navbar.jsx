import {Link,useLocation} from 'react-router-dom';



const Navbar = () => {

  const {pathname}=useLocation();
  return (
  <nav className={`flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 ${pathname==="/seller/profile" || pathname==="/buyer/profile" ? "hidden": "fixed"} top-0 left-0 right-0 shadow-md gap-1 sm:gap-0 z-30 bg-white`}>
    {/*logo and site name*/}
      <div className='flex justify-between items-center'>
        {/*I will add the image here later */}
        <img src='/picprismlogo.png' alt='logo' className='w-[50px]'/>
        <Link to="/" className='font-bold text-3xl'>PicPrism</Link>
      </div>
      <ul className='flex gap-5 text-lg font-semibold text-gray-400 ml-5 sm:ml-0'>
        <Link to="/" className='hover:text-black cursor-pointer sm:pLink '>About</Link>
        <Link to="/" className='hover:text-black cursor-pointer sm:pLink '>Contact</Link>
        <Link to="/login" className='hover:text-black cursor-pointer sm:pLink '>Log In</Link>
        <Link to="/signup" className='hover:text-black cursor-pointer sm:pLink '>Sign Up</Link>
      </ul>
    </nav>
  )
}

export default Navbar