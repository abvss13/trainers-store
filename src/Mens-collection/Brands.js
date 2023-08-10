import React from 'react'
import {useHistory} from 'react-router-dom'

const Brands = ()=>{
    let history =useHistory();

    function handleChange(value) {
        history.push(`/${value}`);
      }
    

    return(
        <div>
            <strong>Collection:</strong><select onChange={event => handleChange(event.target.value)} className='select'>
                            <option>Brands</option>
                            <option value='Addidas'>Addidas</option>
                            <option value='Nike'>Nike</option>
                            <option value='Air Jordan'>Air Jordan</option>
                            <option value='Vans'>Vans</option>
                            <option value='New Balance'>New Balance</option>
                            <option value='Gucci'>Gucci</option>
                            <option value='Casual'>Casual</option>
                            <option value='Super Max'>Super Max</option>
                            <option value='Sky'>Sky</option>
                            <option value='Balenciaga'>Balenciaga</option>
                        </select>
        </div>
    )
}

export default Brands