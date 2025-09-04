   
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from '../Image'

const Appi = () => {

    let [allData, setAllData] = useState([])
    useEffect(() => {
        async function alldatas() {
            let alldata = await axios.get("https://dummyjson.com/products")
            setAllData(alldata.data.products)
        } alldatas();
    }, []);

    return (
        <>
            {
                allData.slice(2, 5).map(item => (

                    <>
                        <div >
                            <Image imgSrc={item.thumbnail} />
                            <h1>{item.title}</h1>
                            <h1>{item.price}</h1>
                        </div>
                    </>
                ))
            }

        </>
    )
}

export default Appi



