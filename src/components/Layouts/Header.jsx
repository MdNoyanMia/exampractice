import React, { useState } from 'react'
import Contact from '../Pages/Contact'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logu2 from '/src/assets/logu2.png'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  let [showcategory, setshowcategory] = useState(true)
  return (
    <>
      <div className='py-9'>
        <Container>
          <Flex className='flex gap-x-70'>
            <div>
              <Image imgSrc={logu2} />
            </div>
            <div>
              <ul className='flex gap-x-5'>
                <Link to={'/'}>
                  <li className='hover:text-amber-300 duration-700'>HOME</li>
                </Link>
                <Link to={'/'}>
                  <li className='hover:text-amber-300 duration-700'>SHOP</li>
                </Link>
                <Link to={'/'}>
                  <li className='hover:text-amber-300 duration-700'>COLLECTION</li>
                </Link>
                <Link to={'/'}>
                  <li className='hover:text-amber-300 duration-700'>JOURNAL</li>
                </Link>
                  <Link to={'/'}>
                  <li className='hover:text-amber-300 duration-700'>LOOKBOOK</li>
                </Link>
                  <Link to={'/'}>
                  <li className='hover:text-amber-300 duration-700'>PAGES</li>
                </Link>
              </ul>
            </div>

          
            <div className='flex gap-x-4'>

              <div onClick={() => {
                setshowcategory(!showcategory)
              }

              }>
                <FaUser />
              </div>
              {
                showcategory && (
                  <ul>
                    <li>
                    
                    </li>
                  </ul>
                )
              }

              <FaShoppingCart />


            </div>
          </Flex>
        </Container>
      </div>

    </>
  )
}

export default Header