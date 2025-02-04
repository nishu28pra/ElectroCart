import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productCategory from '../helpers/productCategory'
import VerticalCardProduct from '../components/VerticalCardProduct'
import VerticalCard from '../components/VerticalCard'

const CategoryProduct = () => {
  const params = useParams()
  const [data,setData] = useState([])
  const [loading , setLoading] = useState(false)
  const [selectCategory , setSelectCategory] = useState([])


  const fetchData = async() => {
    const response = await fetch()

    const dataResponse = await response.json()

    setData(dataResponse?.data || [])
    console.log(dataResponse)
  }

  const handleSelectCategory = (e) => {
    const {name , value , checked} = e.target

    setSelectCategory((preve) => {
      return{ 
        ...preve,
        [value] : checked
      }
    })
  }

  console.log('selectCategory' , selectCategory)

  useEffect(() => {
    const arrayOfCategory = Object.keys(selectCategory).map(categoryName => {
      console.log(categoryName)
    })

  },[selectCategory])

  // {params?.categoryName}
  return (
    <div className='container mx-auto p-4'>

      {/* desktop version */}
      <div className='hidden lg:grid grid-cols-[200px,1fr]'>
        {/* left side */}
        <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>
          {/* sort by */}
          <div className=''>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort By</h3>

            <form className='text-sm flex flex-col gap-2 py-2 '>
              <div className='flex items-center gap-3'>
                <input type='radio' name='sortBy' />
                <label>Price - Low to Hight</label>
              </div>

              <div className='flex items-center gap-3'>
                <input type='radio' name='sortBy' />
                <label>Price - Hight to Low</label>
              </div>
            </form>
          </div>

          {/* filter by */}
          <div className=''>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>

            <form className='text-sm flex flex-col gap-2 py-2 '>
              {
                productCategory.map((categoryName,index) => {
                  return (
                    <div className='flex items-center gap-3'>
                      <input type='checkbox' name={"category"} checked={selectCategory[categoryName?.value]} value={categoryName?.value} id={categoryName?.value} onChange={handleSelectCategory}/>
                      <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                    </div>
                  )
                })
              }
            </form>
          </div>

        </div>

        {/* right side (prducts) */}
        <div>
              {
                data.length !== 0 && !loading && (
                  <VerticalCard data={data} loading={loading}/>
                )
              }

        </div>
      </div>

    </div>
  )
}

export default CategoryProduct
