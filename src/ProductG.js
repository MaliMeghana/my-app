
// import sofa1 from  "../public/images/Sofa2.jpg";
import "./ProductG.css";
import Modal from 'react-bootstrap/Modal';
import {useState,useEffect} from 'react';
import {Route, Switch, useHistory,useLocation,Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Receipt from "./Receipt";
import Sofa from "./SofaData.json";
import OrderSend from "./OrderSend";

const ProductG=()=>{
  <Switch>
     <Route exact  path="/OrderSend" component={OrderSend} />
  </Switch>
    //Modal Hide Show
    const location = useLocation();
    console.log(location);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   // validate user
    const history=useHistory();
    const [user,setUser]=useState({email:"",password:""});
    const [loginProgress, setLoginProgress] = useState(false);
    
      const proEmail = (e) => setUser({...user,email:e.target.value});
      const proPwd = (e) => setUser({...user,password:e.target.value});
//Set Product
      const [product,setProduct]=useState({productname:"",price:""});
      const ProductSave=(desc,pri)=>{
          setProduct({
            productname:desc,
            price:pri,
          });
          console.log(product);
          handleShow();
      };
  
   const processLogin=()=>{
    if (user.email === "" || user.pwd === "") {
      alert("Fail");
      return;
    }
    setLoginProgress(true);
    setTimeout(()=>{
      const localuser=localStorage.getItem("user");
      const localuserobj=JSON.parse(localuser);
     // console.log(localuserobj);
     if (
      user.email === localuserobj.email &&
      user.password === localuserobj.password
    ) {
      console.log(user, localuserobj);
      localStorage.setItem("product",JSON.stringify(product));
      history.push("/OrderSend");
      
    } else {
      alert("*****Incorrect Credentials******");
    }  
 
    },2000);
   };
    return (         
      
       <div className="container-fluid">
        <Switch>       
       <Route path="/Receipt" component={Receipt} />
     </Switch>  
    <div className="row" style={{height:"80vh"}}>
        {Sofa.map((item,index)=>(
            <div className="col-sm-4">
            <div className="card card-flip h-100">
                <div className="card-fron bg-white">
                    <div className="card-body">
                        <img src={item.src} style={{height:"90%",width:"90%"}} />
                    </div>
                </div>
                <div className="card-back bg-white">
                    <div className="card-body">
                        <h3 className="card-title">{item.desc}</h3>
                        <p className="card-text">Prices : ₹{item.price}</p>
                        <a href="#" className="btn btn-outline-info"  onClick={ProductSave.bind(this,item.desc,item.price)}  key={index}>Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
        ))}
      
       
    </div>
    {/* Modal */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>    
        <div className="card card-signin">
          <div className="card-body">
            <form className="form-signin">
              <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" value={user.email} onChange={proEmail}  placeholder="Email address" required autofocus/>
                <label for="inputEmail"  >Email address</label>
              </div>

              <div className="form-label-group">
                <input type="password" id="inputpassword" className="form-control" value={user.pwd} onChange={proPwd} placeholder="Password" required/>
                <label for="inputpassword">Password</label>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button className="btn btn-lg btn-success btn-block text-uppercase" onClick={processLogin} type="submit">Login</button><br></br>
              <NavLink activeClassName="active_class" to="/Receipt"><button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign In</button></NavLink>
             
            </form>
          </div>
        </div>
     
        </Modal.Body>  
      </Modal>
</div>    
       
    );
}


export default ProductG;