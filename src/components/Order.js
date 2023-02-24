import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
     const navigate = useNavigate()
     return (
          <div>
               <h1>Order Placed</h1>
               <button onClick={() => navigate(-1)}> go back</button>
          </div>
     )
}

export default Order