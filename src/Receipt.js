
import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';


 function Receipt(){
    return (
      <div className="container-fluid">
          <OrderInfo/>
      </div>
    );
  }



  function OrderInfo()
  {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    //Login management
    //set --get
    const history=useHistory();
    const [user,setUser]=useState({
      name:"",
      password:"",
      email:"",
      add:"",
      mobile:"",
    });
    const proName = (e) => setUser({...user,name:e.target.value});
    const proEmail = (e) => setUser({...user,email:e.target.value});
    const proPwd = (e) => setUser({...user,password:e.target.value});
    const proAdd = (e) => setUser({...user,add:e.target.value});
    const proContact = (e) => setUser({...user,mobile:e.target.value});
    
    //Set Values on change
  
    /////////End   
    const addUser=async ()=>{
      if(user.email==="" || user.password==="")
      {
        return;
      }
     localStorage.setItem("user",JSON.stringify(user));
     setUser({
      name:"",
      password:"",
      email:"",
      add:"",
      mobile:"", 
     });
     handleShow();
    };
    

      return (
        <div className="container-fluid mt-3 bg-light"> 
        <div className="row">       
            <div className="col-md-8 offset-md-2">
                <div className="card">
                  <div className="card-header bg-info">Registration</div>
                  <div className="card-body">
                     <div className="row">
                     <div className="col">
                          <label>Name :</label> <br/>
                          <input type="text" value={user.name} onChange={proName} className="form-control" /> 
                          </div>      
                          <div className="col">
                          <label>Email/Mobile No :</label> <br/>
                          <input type="text" value={user.email} onChange={proEmail} className="form-control" /> 
                          </div>                     
                     </div>
                     <div className="row">
                        <div className="col">
                        <label>Password :</label><input type="text" value={user.password} onChange={proPwd} className="form-control" />   
                        </div>
                        <div className="col">
                        <label>Confirm Password :</label><input type="text" className="form-control" />     
                        </div> 
                     </div>                      
                     <div className="row">
                <div className="col card mt-3">
                     <div className="card-header">1. Delivery Address</div>
                      <textarea className="form-control" value={user.add} onChange={proAdd} placeholder="Address"></textarea>
                  </div>
                </div>
                <div className="row">
                <div className="col card">
                     <div className="card-header">2. Contact Number</div>
                     <input type="number" value={user.mobile} onChange={proContact} className="form-control"/>
                  </div> 
                  </div> 
                  <div className="row">
                     <div className="col mt-3">
                     <button className="btn btn-success" onClick={addUser} style={{float:"right"}}>Register</button>     
                        </div>                    
                     </div>                           
                </div>                                
                </div>                  
            </div>           
       </div>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>    
        <div className="card card-signin">
          <div className="card-body">
            <h3 style={{color:"green",fontFamily:"cursive"}}>Register Succesfully</h3>
          </div>
        </div>     
        </Modal.Body>  
      </Modal>
        </div>
      );
  }
 

export default Receipt;