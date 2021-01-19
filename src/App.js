import "./App.css";
import  web from "../src/img/slide-img.jpg";
import  web1 from "../src/img/slide-img1.jpg";
import  web2 from "../src/img/slide-img2.jpg";


import icon1 from "../src/icons/bed.jpeg";
import icon2 from "../src/icons/dressing.jpeg";

function App() {
  return (
    <div className="container-fluid ">
      <Nav/>
      <HomeBody/>
    </div>
  );
}

function Nav(){
  return (
         <div className="container-fluid">       
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand" href="#"> <h5><span className="ml-3">House</span><span  style={{color:"darkblue",fontFamily:"cursive"}}>Beautify</span></h5></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
              </button>

             <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                 <li>
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>    
                </li>
                <li>
                <button className="btn btn-outline-success ml-3" type="submit">Search</button>
                </li>
                <li className="nav-item active ml-4">
                <button type="button" className="btn btn-link">Home</button>
                </li>
                <li className="nav-item">
                <button type="button" className="btn btn-link">Contact</button>
                </li>   
                <li className="nav-item">
                <button type="button" className="btn btn-link">Product</button>
                </li>               
                <li>
                <button className="btn btn-success ml-3" type="submit">Cart</button>
                </li>               
             </ul>
            </div>
          </nav>
       </div>
  )
}

function HomeBody(){
  return(
        <div className="container-fluid bg-light">
        <div className="row mt-3">
            <div className="col-2">
                <Pcards name={icon1}/>
                <Pcards name={icon2}/>
                <Pcards/>
             
            </div>
            <div className="col-2">
                <Pcards/>
                <Pcards/>
                <Pcards/>
               
            </div>
            <div className="col-8">
                <Slides/>
            </div>
        </div>          
        </div>
  );
}


function Pcards(props)
{
  return(
    <div className="card mb-1 ml-1" style={{height:"28%"}}>      
    <div className="card-body" style={{textAlign:"center"}}>
    <img src={props.name} alt="fur" className="icon"></img>
      <p className="card-text">Sofa Set</p>
    </div>
  </div>
  );
}

function Slides()
{ 
  return (
    <div className="container-fluid" style={{height:"300px"}}>
       <img src={web} alt="fur"  className="mySlides"></img>
       {/* <img src={web1} alt="fur" className="mySlides"></img>
       <img src={web2} alt="fur" className="mySlides"></img>        */}
    </div>
  );
}



export default App;
