import React, { useState } from 'react'
import Contact from '../Pages/Contact'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logu from '/src/assets/logu.png'
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
              <Image imgSrc={logu} />
            </div>
            <div>
              <ul className='flex gap-x-5'>
                <Link to={'/'}>
                  <li className='hover:text-amber-300 duration-700'>Home</li>
                </Link>
                <Link to={'/'}>
                  <li className='hover:text-amber-300 duration-700'>About</li>
                </Link>
                <Link to={'/'}>
                  <li className='hover:text-amber-300 duration-700'>Shop</li>
                </Link>
                <Link to={'/'}>
                  <li className='hover:text-amber-300 duration-700'>Contact</li>
                </Link>
                <Link to={'/'}>
                  <li className='hover:text-amber-300 duration-700'>Journal</li>
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
                      hkjhj;kgh;ghkjhfg
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