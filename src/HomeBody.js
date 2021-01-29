import "./App.css";
import { Carousel } from "react-bootstrap";
import  web from "../src/img/slide-img.jpg";
import  web1 from "../src/img/slide-img1.jpg";
import  web2 from "../src/img/slide-img2.jpg";
import icon1 from "../src/icons/bed.jpeg";
import icon2 from "../src/icons/dressing.jpeg";
import icon3 from "../src/icons/couch.jpeg";


function HomeBody(){
  
    // const Iconlist=[
    //      {
    //        id:"I1",
    //        icon:icon1,
    //        name:"Bed"
    //      },
    //      {
    //       id:"I2",
    //       icon:icon2,
    //       name:"Dressing Table"
    //     },
    //     {
    //       id:"I3",
    //       icon:icon3,
    //       name:"Sofa Set"
    //     },
    // ];
  //console.log(Iconlist[0].name);
    return(
          <div className="container-fluid bg-light">
          <div className="row mt-3">
              {/* <div className="col-md-2 overflow-hidden">
                  <Pcards imgsrc={Iconlist[0].icon} name={Iconlist[0].name} idm={Iconlist[0].id}/>
                  <Pcards imgsrc={Iconlist[1].icon} name={Iconlist[1].name} idm={Iconlist[1].id}/>
                  <Pcards imgsrc={Iconlist[2].icon} name={Iconlist[2].name} idm={Iconlist[2].id}/>
              </div>
              <div className="col-md-2 overflow-hidden">
                  <Pcards imgsrc={Iconlist[0].icon} name={Iconlist[0].name} idm={Iconlist[0].id}/>
                  <Pcards imgsrc={Iconlist[1].icon} name={Iconlist[1].name} idm={Iconlist[1].id}/>
                  <Pcards imgsrc={Iconlist[2].icon} name={Iconlist[2].name} idm={Iconlist[2].id}/>
                 
              </div> */}
              <div className="col-md-12 overflow-auto">
                  <Slides/>
              </div>
          </div>          
          </div>
    );
  }
  
  
  function Pcards(props)
  {
    return(
      <div className="card mb-1 ml-1" style={{height:"20%"}}>      
      <div className="card-body" style={{textAlign:"center"}}>
      <img id={props.idm} src={props.imgsrc} alt="fur" className="icon"></img>
        <p className="card-text"><h6>{props.name}</h6></p>
      </div>
    </div>
    );
  }
  
  function Slides()
  { 
    const imgarr=[web,web1,web2];
    return (
      <div className="container-fluid" style={{height:"50%"}}>
                <Carousel>
              <Carousel.Item interval={3000}>
                <img
                  className="mySlides"
                  src={imgarr[0]}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="mySlides"
                  src={imgarr[2]}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>           
            </Carousel>
      </div>
    );
  } 
       
export default HomeBody;
