import './App.css'
import BannerSlider from './components/banner part/Banner'
import BSDetails from './components/BestSellingProducts/BSDetails'
import CategoryDetails from './components/Category/CategoryDetails'
import OurProductsDetails from './components/ExploreOurProducts/OurProductsDetails'
import CardDetails from './components/Flash Sales/CardDetails'
import FlashHead from './components/Flash Sales/FlashHead'
import NewArrivalDetails from './components/NewArrival/NewArrivalDetails'
import MusicExperience from './components/OfferBanner'
import SupportDetails from './components/support/SupportDetails'

function App() {

  return (
    <>
    <BannerSlider/>
    <FlashHead/>
    <CardDetails/>
    <CategoryDetails/>
    <BSDetails/>
    <MusicExperience/>
    <OurProductsDetails/>
    <NewArrivalDetails/>
    <SupportDetails/>
    </>
  )
}

export default App
