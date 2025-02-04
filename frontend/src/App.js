import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import SummaryApi from './common';
import Footer from './components/Footer';
import Header from './components/Header';
import Context from './context';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch()
  const [cartProductCount, setCardProductCount] = useState(0)

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include"
    })
    
    const dataApi = await dataResponse.json()

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data))
    }
  }

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: "include"
    })
    

    const dataApi = await dataResponse.json()

    setCardProductCount(dataApi?.data?.count)

  }

  useEffect(() => {
    // user details
    fetchUserDetails()
    //user cart product details
    fetchUserAddToCart()

  }, [])

  return (
    <>

      <Context.Provider value={{
        fetchUserDetails, //user details
        cartProductCount, // current user cart product
        fetchUserAddToCart
      }}>

        <ToastContainer
          position='top-center'
        />
        <Header />
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
