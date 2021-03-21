import React, { useState } from 'react';
import {Alert} from 'react-bootstrap'
import './AddService.css';
const AddService = () => {
   const [info, setInfo] = useState({})
   const [file, setFile] = useState(null)
   const [alert,setAlert]=useState(false)
   const handleBlur = (e) => {
      const newInfo = { ...info }
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
   };
   const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile)
   }
   const handleFormSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData();
      formData.append('file', file)
      formData.append('title', info.title)
      formData.append('description', info.description)
      fetch("https://whispering-springs-56641.herokuapp.com/add-service", {
         method: 'post',
         body: formData
      })
         .then(res => res.json())
         .then(data => {
            setAlert(data)
         })
      e.target.reset()
   }
   return (
      <section>
         <h3>Add Service</h3>
         <div className="form_wrapper">
            <form className="form" onSubmit={handleFormSubmit}>
               {alert && <Alert
                  onClose={() => setAlert(false)} dismissible
                  variant="success"
                     className="text-center">
                     Service added successfully
                  </Alert>}
               <div className="form-row">
                  
               <div className="form-group col-md-6">
                     <label for="inputEmail4">Service title
                     </label>
                     <input
                        onBlur={handleBlur}
                        type="text" className="form-control" placeholder="Enter title"
                        name="title"
                     />
                  </div>
               <div className="form-group col-md-3">
                     <label for="inputEmail4">Icon
                     </label>
                     <input
                        onChange={handleFileChange}
                        type="file" className="form-control"
                        name="file"
                     />
                  </div>

               </div>
               <div className="form-group col-md-6 p-0">
                  <label for="exampleFormControlTextarea1">Example textarea</label>
                  
                  <textarea
                     onBlur={handleBlur}
                     className="form-control" name="description" rows="3">
                     
                  </textarea>
                  
               </div>
               <button className="btn btn-success">Submit</button>
            </form>

         </div>
      </section>
   );
};

export default AddService;