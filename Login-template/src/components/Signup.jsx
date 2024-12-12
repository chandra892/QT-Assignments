import React from 'react'

const signup = () => {
    return (
        <div style={{marginLeft:"20rem"}} className='w-50'>
            <div className='d-flex flex-column gap-2 border border-secondary mt-5 mb-4 p-5' >
                <h1 className='text-white text-center mb-3'>Signup for free</h1>
                <div className='d-flex flex-row gap-2'>
                    <input type="text" className="form-control" placeholder="first name" aria-label="Username" aria-describedby="basic-addon1" />
                    <input type="text" class="form-control" placeholder="last name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <input type="text" class="form-control" placeholder="email" aria-label="Username" aria-describedby="basic-addon1" />
                <input type="password" class="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1" />
                <input type="password" class="form-control" placeholder="confirm password" aria-label="Username" aria-describedby="basic-addon1" />
                <button type='submit' className='btn btn-primary'>Signup</button>
            </div>
        </div>  
    )
}

export default signup