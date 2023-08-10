import React,{useContext} from 'react'
import { useParams } from "react-router-dom";
import {ShoeContext} from '../context/shoeContext'

const Details =()=>{
    let {data} = useContext(ShoeContext)
    let {id} = useParams()
    const shoe = data[id -1]
    // console.log(shoe)
    return(
        <div className='details-main'>
            <div className='detail-sub'>
                <h1><u>{shoe.Name}</u></h1>
                
                <p><strong>Description:</strong> <br />{shoe.Description}</p>
                <table>
                    <thead></thead>
                    <tbody>

                    <tr>
                        <td colSpan='2'><strong>Details:</strong></td>
                    </tr>
                    <tr>
                        <td><strong>Price:</strong></td>
                        <td>Rs.{shoe.Price}/-</td>
                    </tr>
                    <tr>
                        <td><strong>Size:</strong></td>
                        <td>[{shoe.Size}]</td>
                    </tr>
                    <tr>
                        <td><strong>Avalibility:</strong></td>
                        <td>{shoe.Available === true ? 'Item Available' : 'Out of Stock'}</td>
                    </tr>
                    <tr>
                        <td><strong>Available Items:</strong></td>
                         <td>{shoe.items_Left}</td>
                    </tr>
                    </tbody>
                    <tfoot></tfoot>
                    
                </table>
            </div>
            <div className='detail-sub'>
                <img src={shoe.image} alt='' width='300px' height='300px'  />
            </div>
        </div>
    )
}

export default Details