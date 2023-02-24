import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
     const params = useParams();
     const userId = params.usersid
     return (
          <div>
               <h1>
                    Detail about user {userId}
               </h1>
          </div>
     )
}
