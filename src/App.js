import "./App.css";
import {useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';

//Routing
import {Route, Switch, useHistory,useLocation} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import HomeBody from "./HomeBody";
import Contact from "./Contact";
import ProductG from "./ProductG";
import ProductBed from "./ProductBed";
import ProductDesk from "./ProductDesk";
import Receipt from "./Receipt";
import Login from "./Login";
import OrderSend from "./OrderSend";
//main
function App() {  
  
  return (
    <div className="container-fluid ">
     
     <Nav/>
     <Switch>
       <Route exact path="/" component={HomeBody} />
       <Route path="/contact" component={Contact} />
       <Route path="/Product" component={ProductG} />
       <Route path="/ProductDesk" component={ProductDesk} />
       <Route path="/ProductBed" component={ProductBed} />
       <Route path="/Receipt" component={Receipt} />
       <Route path="/Login" component={Login} />    
       <Route path="/OrderSend" component={OrderSend} />     
     </Switch>    
     
    </div>
  );
}

function Nav(props){
  const [product,setProduct]=useState([]);
  const [p,setP]=useState();
  // useEffect(()=>{    
  // let productList=[ {id:"1",name:"Sofa Set"},{id:"2",name:"Bed"},{id:"3",name:"Recliner"},{id:"4",name:"Desk"}];
  //    setProduct(productList);
  // },[]);

  // const checkProduct=(props)=>{
  //   console.log(props.id); 
  //   setP(props.id);
  // }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //set user
  const [user1,setUser1]=useState({
    name:"",
    password:"",
    email:"",
    add:"",
    mobile:"",
  });
  const localuser=localStorage.getItem("user");
  const localuserobj=JSON.parse(localuser);

  const LogOut=()=>{
    setUser1({
      name:"",
      password:"",
      email:"",
      add:"",
      mobile:"", 
     });
     localStorage.setItem("user",JSON.stringify(user1));
  };
  //validate user
  const history=useHistory();
  const [user,setUser]=useState({email:"",password:""});
  const [loginProgress, setLoginProgress] = useState(false);
  
    const proEmail = (e) => setUser({...user,email:e.target.value});
    const proPwd = (e) => setUser({...user,password:e.target.value});
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand" href="#"> <h5><span className="ml-3">House</span><span  style={{color:"darkblue",fontFamily:"cursive",fontSize:"120%"}}>Beautify</span></h5></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
              </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                 
                <li className="nav-item active ml-4">
                <NavLink activeClassName="active_class" to="/"><button type="button" className="btn btn-default">Home</button></NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName="active_class" to="/contact"><button type="button" className="btn btn-default">Contact</button></NavLink>
                </li>   
                <li className="nav-item dropdown">
                <button type="button" className="btn btn-default dropdown-toggle"  id="navbarDropdownMenuLink"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Product
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {/* {product.map((item,index)=>(
                   <NavLink activeClassName="active_class"  className="dropdown-item"  to="/product" key={index}>{item.name}</NavLink>)                                    
                )} */}
                <NavLink activeClassName="active_class"  className="dropdown-item"  to="/product" >Sofa Set</NavLink>
                <NavLink activeClassName="active_class"  className="dropdown-item"  to="/productBed" >Bed</NavLink>
                <NavLink activeClassName="active_class"  className="dropdown-item"  to="/productDesk">Desk</NavLink>
                </div>
              </li>
              </ul>  
              <ul className="navbar-nav navbar-right"> 
                <li>
                <button className="btn btn-info ml-3" type="submit" style={{width:"80px"}} onClick={handleShow}>Login</button>
                </li> 
                <li>
                <NavLink activeClassName="active_class" to="/Receipt"><button className="btn btn-info ml-3"  type="submit">Register</button></NavLink>
                </li>  
                <li>
                <button className="btn btn-info ml-3" type="submit" style={{width:"80px"}} onClick={LogOut}>LogOut</button>
                </li> 
                <li>
                <span style={{color:"royalblue",fontFamily:"cursive",fontSize:"1.3rem",marginLeft:"3px"}}>Hello {localuserobj.name}</span>
                </li>               
             </ul>
            </div>
          </nav>
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
  )
}



export default App;
export {Nav};
