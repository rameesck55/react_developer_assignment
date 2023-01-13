import React, { useState } from 'react'
import './Components.css'

function Component({ datas, style, row }) {
    const array1=[]
    for (var k=0;k<datas.length/row;k++){
     array1.push(k+1)     
    }

    const [mult, setMult] = useState(array1)
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