import React, { useState} from 'react'
import Component from '../Component'
import './Form.css'


function Form() {
    const [state, setstate] = useState({})
    const [gen, setgen] = useState(false)
    const [arrayblue, setArrayblue] = useState([]);
    const [arrayred, setArrayred] = useState([]);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setstate({ ...state, [name]: value })
    }
    const handleClick = () => {
        setgen(true);
        for (var i = 1; i <= state.Number_of_blue_token; i++) {
            let data1 = state.Blue_token_prefix + i;
            arrayblue[i - 1] = data1
        }
        for (var j = 1; j <= state.Number_of_red_token; j++) {
            let data2 = state.Red_token_prefix + j;
            arrayred[j - 1] = data2
        }
    }
    const clearForm = () => {
        setgen(false)
        setArrayblue([])
        setArrayred([])
    }


    return (
        <div className='Form'>
            <h1>Token generator application</h1><br /><hr /><br />
            <form className='form_data'>
                <div>
                    <label htmlFor="">Number of blue token: </label><input type="number" onChange={handleChange} name='Number_of_blue_token' />
                </div><br />
                <div>
                    <label htmlFor="">Blue token prefix: </label><input type="text" onChange={handleChange} name='Blue_token_prefix' />
                </div><br />
                <div>
                    <label htmlFor="">Blue token per row: <input type="number" onChange={handleChange} name='Blue_token_per_row' /></label>
                </div><br />
                <div>
                    <label htmlFor="">Number of red token: <input type="number" onChange={handleChange} name='Number_of_red_token' /></label>
                </div><br />
                <div>
                    <label htmlFor="">Red token prefix: <input type="text" onChange={handleChange} name='Red_token_prefix' /></label>
                </div><br />
                <div>
                    <label htmlFor="">Red token per row: <input type="number" onChange={handleChange} name='Red_token_per_row' /></label>
                </div><br />
            </form>
            <div>
                <button onClick={() => { handleClick() }} >Generate</button><br /><br />
                <button onClick={clearForm}>Clear</button>
            </div>
            {gen === true ?
                <>
                    <Component datas={arrayblue} style="true" row={state.Blue_token_per_row} />
                    <br />
                    <Component datas={arrayred} style="false" row={state.Red_token_per_row} />
                </>
                :
                ""
            }

        </div>
    )
}

export default Form