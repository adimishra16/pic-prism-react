import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GsapTransition from './components/GsapTransition'
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <GsapTransition/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}