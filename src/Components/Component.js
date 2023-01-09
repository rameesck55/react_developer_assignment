import React, { useState } from 'react'
import './Components.css'

function Component({ datas, style, row }) {
    const [mult, setMult] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])
    return (
        <>
            <div className='container' >
                {console.log(row)}
                {datas.map((value, index) => (
                    <>
                        <div className={style === "true" ? "box1" : "box"}>
                            <h1 className='text'>{value}</h1>
                        </div>
                        {mult.map(val => index + 1 === row * val ? <br /> : '')}
                    </>
                ))}

            </div>
        </>

    )
}

export default Component