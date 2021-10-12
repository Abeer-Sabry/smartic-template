import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container  section">
        <div className="col-md-8 m-auto" >
          <form>
            <div className="row mb-3">
              <div className="col">
                <input type="email" className="form-control" placeholder="First Name" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="col">
                <input type="password" className="form-control"  placeholder="Last Name" id="exampleInputPassword1" />
              </div>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Password"  id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <textarea className="form-control mb-3" name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
