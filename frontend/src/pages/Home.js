import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />

      <HorizontalCardProduct category={"earphones"} heading={"Top's Earphones"} />

      <VerticalCardProduct category={"mobiles"} heading={"Top's Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Top's Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"Top's Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Top's Camera"}/>
      <VerticalCardProduct category={"earphones"} heading={"Top's Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Top's Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Top's Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Top's Trimmers"}/>



    </div>
  )
}

export default Home
