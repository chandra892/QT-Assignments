import React from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <div className='bg-primary text-white m-3 rounded-'>
      <div className='d-flex'>
        <div className=' w-50 ms-4 me-2 mt-5 mb-4 '>
          <h1 className='mt-5'>BOOTSTRAP</h1>
          <h4>BAIN</h4>

          <h2 className='mt-3'>We make digital products that drive you to stand out.</h2>

          <p className='mt-5 fontsize-200'>
            We write words , take potos, make videos,interact with airtificial intelligence.
          </p>
        </div>
        <div className='d-flex flex-column gap-2 w-50 bg-light text-black p-4 rounded mt-5 mb-5 me-3 '>
          <h1>Sign in</h1>
          <p>Don't have an account? <a href="">Sign up</a></p>
          <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" />
          <input type="password" className="form-control" placeholder="password" aria-label="password" aria-describedby="addon-wrapping" />
          <span>
            <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label ms-2" for="flexCheckDefault">
              Default checkbox
            </label>
          </span>

          <button type='submit' className="btn btn-primary">Login Now</button>
          <a href="" className='px-5'>Forgot password</a>

          <p>Or continue with</p>
          <div className='d-flex gap-3 '>
            <button className='btn btn-outline-danger rounded-circle'><i class="bi bi-google"></i></button>
            <button className='btn btn-outline-primary rounded-circle text-center'><i class="bi bi-meta"></i></button>
            <button className='btn btn-outline-dark rounded-circle '><i class="bi bi-twitter"></i></button>
            <button className='btn btn-outline-dark rounded-circle '><i className="bi bi-apple"></i></button>
            {/* <i className="bi bi-apple">a</i> */}

          </div>
        </div>
      </div>
    </div>

  )
}

export default App
