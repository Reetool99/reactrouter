import { Outlet, useSearchParams } from "react-router-dom"
import React from 'react'

export const User = () => {
     const [searchParams, setSearchParams] = useSearchParams();
     const showingActiveUsers = searchParams.get('filter') === 'active';
     console.warn(searchParams);
     return (<>
          <div>
               <h1>User 1</h1>
               <h1>User 2</h1>
               <h1>User 3</h1>
          </div>
          <Outlet />
          <div>
               <button onClick={() => setSearchParams({ filter: 'active' })}>Active Filter</button>
               <button onClick={() => setSearchParams({})}>Reset Filter</button>
          </div>
          {showingActiveUsers ? <h2>Show Active Users</h2> : <h2>Show All Users</h2>}
     </>
     )
}
