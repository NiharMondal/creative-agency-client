import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import AdminPanel from '../AdminPanel/AdminPanel'
import Users from '../Users/Users/Users';

const Dashboard = () => {
   const [user] = useContext(UserContext);
   const [admin, setAdmin] = useState(false);
   useEffect(() => {
      fetch("https://whispering-springs-56641.herokuapp.com/is-admin", {
         method: 'post',
         headers: { "content-type": "application/json" },
         body: JSON.stringify({email: user.email})
      })
         .then(res => res.json())
         .then(data => {
            setAdmin(data)
         })
   },[user.email])
   return (
      <>
         {
            admin? <AdminPanel/> : <Users/>
         }
      </>
   );
};

export default Dashboard;