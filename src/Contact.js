import "./Contact.css";
const Contact=()=>{
    return (
        <div className="container-fluid" id="contact">  
       <div className="col-md-6 offset-md-3">
       <div class="card">
        <div class="card-header" >
           Contact
        </div>
        <div class="card-body">
            <input type="text" className="form-control" placeholder="Name" /><br/>
            <input type="text" className="form-control" placeholder="Email" /><br/>
            <textarea className="form-control" placeholder="Message"></textarea><br/>
            <button  className="btn btn-info">Send</button>
        </div>
        </div>
       </div>
       
        
      </div>
    );
}

export default Contact;