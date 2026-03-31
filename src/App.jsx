import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import CardHeading from './components/CardHeading'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Models from './components/Models'
import Navbar from './components/Navbar'


const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()

}

const modelPromise = getModels()



function App() {

  const [activeTab,setActiveTab]=useState("product");

  const [carts,setCarts]=useState([])
  console.log(carts);
  


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <CardHeading></CardHeading>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-30 font-semibold" aria-label="Products" onClick={()=> setActiveTab("product")} defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-30 font-semibold" aria-label="Cart" onClick={()=> setActiveTab("cart")} />
        
      </div>

    {activeTab === "product" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}

      

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}

      <Footer></Footer>
    </>
  )
}

export default App
