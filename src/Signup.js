import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './App.css'
const Signup = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSumbit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/auth/signup', values)
            if(response.status === 201) {
                navigate('/login')
            }
        } catch(err) {
            console.log(err.message)
        }
    }
  return (
    <div className='flex justify-center items-center h-screen' >
        <div className='shadow-lg px-8 py-5 border w-72' id='h'>
            <h2 className='text-lg font-bold mb-4'>Register</h2>
            <form onSubmit={handleSumbit}>
                <div className="mb-4">
                    <label htmlFor="username" className='block text-gray-700'>Username:</label><br/>
                    <input type="text" placeholder='Enter Username' className='w-full px-3 py-2 border' required
                    name="username" onChange={handleChanges}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className='block text-gray-700'>Email:</label><br/>
                    <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border' required
                    name="email" onChange={handleChanges}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className='block text-gray-700'>Password:</label><br/>
                    <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border'  required
                    name="password" onChange={handleChanges}/>
                </div>
               <Link to='/Payment'><button className="w-full bg-green-600 text-black py-2 ">Submit</button></Link>
            </form>
            <div className="text-center" id='h3'>
                <span>Already have account?</span>
                <Link to='/Login' className='text-blue-500'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Signup