import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './MakeAdmin.css'


const MakeAdmin = () => {
   const [admin, setAdmin] = useState({ email: '' })
   const [alert,setAlert]=useState(false)
   const handleBlur = (e) => {
      const newAdmin = { ...admin }
      newAdmin[e.target.name] = e.target.value;
      setAdmin(newAdmin)
   }
   const handleAdmin = (e) => {
      e.preventDefault();

      fetch("http://localhost:4000/make-admin", {
         method: 'post',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify({email: admin.email})
      })
         .then(res => res.json())
         .then(data => {
            setAdmin(data)
            setAlert(data)
         })
         e.target.reset()
   }
   return (
      <section className="admin_wrapper">
         <h3 className="pl-3">Make Admin</h3>
         <div className="form_wrapper">
            <form className="add_admin" onSubmit={handleAdmin}>
               <div className="row">
                  <div className="col-7">
                     <label htmlFor="email">Email</label>
                     <input type="email"
                        onBlur={handleBlur}
                        className="form-control"
                        placeholder="Enter Email"
                        name="email"
                     />
                  </div>
                  <div className="col-1">
                     <button className="btn btn-primary" type="submit"> Submit</button>
                  </div>
               </div>
               <br/>
               {alert &&
                  <Alert variant="success" className="text-center">
                     User added successfully
                  </Alert>}
            </form>
         </div>
      </section>
   );
};

export default MakeAdmin;