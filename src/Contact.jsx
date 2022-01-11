import React,{useState} from "react";

const Contact = () => {

    // const[data,setData]=useState({
    //     fullname:"",
    //     phone:"",
    //     email:"",
    //     msg:"",
    // });

//     const InputEvent=(event)=>{
//         const {name,value}=event.target;
// // error
//         setData((preVal)={
//             return ... preVal
//                 [name]:value,     
    //     });
    // };

    const success=()=>{
alert('your response has been recorded');
    }

  return (
    <div>
      <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
          <div className="container contact_div">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <form >
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Full Name
                    </label>
                    <input
                      type="name"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="enter your name"
                      required
                      
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Mobile Number"
                      required
                     
                    />
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="junaid@gmail.com"
                      required
                
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="write your message here..."
                      required
            
                    ></textarea>
                  </div>
                  <button onClick={success} type="submit" className="btn btn-outline-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Contact;
