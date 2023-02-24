import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
const Home = () => {
     const location = useLocation();
     const navigate = useNavigate();
     console.warn(location);
     return (
          <div>
               <h1>
                    REACT ROUTING
               </h1>
               <button onClick={() => navigate('/order')}>place order</button>
          </div>
     )
}

export default Home