import React from 'react'

const Login = () => {
  return (
    <div className='text-center d-flex flex-column gap-2 border border-secondary mt-4  me-5 mb-4 p-5 w-50' style={{marginLeft:"20rem"}}>
        <h1 className='text-white mt-3'>Login</h1>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        <input type="password" class="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1" />
        <button type='submit' className='btn btn-primary'>Login</button>
        <a href="">forgot password</a>

    </div>
    );

}

export default Login