import './App.css'
import All_head from './components/Allhead'
import BannerSlider from './components/banner part/Banner'
import Discount from './components/Discount/Discount'
import FlashHead from './components/Flash Sales/FlashHead'
import SalesCard from './components/Flash Sales/SalesCard'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
    <Discount/>
    <Navbar/>
    <BannerSlider/>
    <FlashHead/>
    <SalesCard Discount={"-40%"} img={"/Flash/joy.png"} h2={"HAVIT HV-G92 Gamepad"} price={"$36.00"} DiscountPrice={"$60.00"} rating={"/star-solid-full.svg"}/>
    <All_head head={"hello"} h1={"flash sales 2"}/>
    </>
  )
}

export default App
