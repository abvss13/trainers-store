import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {ShoeContext} from '../context/shoeContext'

const Slippers =()=>{
    let {data}=useContext(ShoeContext)

    return(
        <div className="Home-container">
            <h1 style={{textAlign:'center'}}><u>Slippers</u></h1>
        <div className="prooo">
    {data.map((proo, ind)=>proo.Category === 'Slippers'?(
        
        <div key={ind}  className="pro-con">
                <Link key={ind} className='lnk' to={`/shoe${proo.id}`}>
            <img src={proo.image} alt=""  title={proo.Name}/>
                </Link>
                <p>{proo.Name} < br /><strong>Rs.{proo.Price}</strong></p>
    </div>
    ): null)}
    </div>
    </div>
    )
}
export default Slippers