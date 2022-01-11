import React ,{Component} from "react";
import { NavLink } from "react-router-dom";
import img from "../src/img/cardimg.jpg";
import img1 from "../src/img/img1.jpg";
import img2 from "../src/img/img2.png";
import img3 from "../src/img/img3.jpg";
import img4 from "../src/img/img4.jpg";
import img5 from "../src/img/img5.jpg";
import img6 from "../src/img/img6.jpg";

const Service = () => {
  return (
   
      
        <>
        <div className="my-5">
        <h1 className="text-center"> Our BOOKS</h1>
      </div>
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-3">
            
            <div className="col-md-4 col-10 mx-auto">
           <div className="card">
   <img src={img1} className="card-img-top cardHeight" alt={img} />
   <div className="card-body">
     <h5 className="card-title font-weight-bold">THE GIRL IN ROOM 105</h5>
   <p className="card-text">$69</p>
      <NavLink to="/contact" className="btn  btn-primary">BUY</NavLink>  
  </div>  
</div> 
</div>  
<div className="col-md-4 col-10 mx-auto">
           <div className="card">
   <img src={img2} className="card-img-top cardHeight" alt={img} />
   <div className="card-body">
     <h5 className="card-title font-weight-bold">Better Than Best Friends</h5>
   <p className="card-text">$75</p>
      <NavLink to="/contact" className="btn  btn-primary">BUY</NavLink>  
  </div>  
</div> 
</div>
<div className="col-md-4 col-10 mx-auto">
           <div className="card">
   <img src={img3} className="card-img-top cardHeight" alt={img} />
   <div className="card-body">
     <h5 className="card-title font-weight-bold">Stories We Never Tell</h5>
   <p className="card-text">$119</p>
      <NavLink to="/contact" className="btn  btn-primary">BUY</NavLink>  
  </div>  
</div> 
</div>
<div className="col-md-4 col-10 mx-auto">
           <div className="card">
   <img src={img4} className="card-img-top cardHeight" alt={img} />
   <div className="card-body">
     <h5 className="card-title font-weight-bold">WISHPERING IN THE DARK</h5>
   <p className="card-text">$87</p>
      <NavLink to="/contact" className="btn  btn-primary">BUY</NavLink>  
  </div>  
</div> 
</div>
<div className="col-md-4 col-10 mx-auto">
           <div className="card">
   <img src={img5} className="card-img-top cardHeight" alt={img} />
   <div className="card-body">
     <h5 className="card-title font-weight-bold">THE BLUE UMBRELLA</h5>
   <p className="card-text">$49</p>
      <NavLink to="/contact" className="btn  btn-primary">BUY</NavLink>  
  </div>  
</div> 
</div>
<div className="col-md-4 col-10 mx-auto">
           <div className="card">
   <img src={img6} className="card-img-top cardHeight" alt={img} />
   <div className="card-body">
     <h5 className="card-title font-weight-bold">Dark Matter New</h5>
   <p className="card-text">$139</p>
      <NavLink to="/contact" className="btn  btn-primary">BUY</NavLink>  
  </div>  
</div> 
</div>    

           

            
            </div>
          </div>
        </div>
      </div>
    </> 
   
  );
};

export default Service;
