import './App.css'
import BannerSlider from './components/banner part/Banner'
import BSDetails from './components/BestSellingProducts/BSDetails'
import CategoryDetails from './components/Category/CategoryDetails'
import Discount from './components/Discount/Discount'
import OurProductsDetails from './components/ExploreOurProducts/OurProductsDetails'
import CardDetails from './components/Flash Sales/CardDetails'
import FlashHead from './components/Flash Sales/FlashHead'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Navbar'
import NewArrivalDetails from './components/NewArrival/NewArrivalDetails'
import MusicExperience from './components/OfferBanner'
import SupportDetails from './components/support/SupportDetails'

function App() {

  return (
    <>
    <Discount/>
    <Navbar/>
    <BannerSlider/>
    <FlashHead/>
    <CardDetails/>
    <CategoryDetails/>
    <BSDetails/>
    <MusicExperience/>
    <OurProductsDetails/>
    <NewArrivalDetails/>
    <SupportDetails/>
    <Footer/>

    </>
  )
}

export default App
