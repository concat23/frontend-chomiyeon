import React, { useState } from 'react'
import '../components/style.css'
import {createCmyEmployee} from '../services/CmyEmployeeService'
import { useNavigate } from 'react-router-dom'

function CmyEmployeeComponent(){

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email, setEmail] = useState('')

    const handleFirstName = (e) => setFirstName(e.target.value)
    const handleLastName =(e) => setLastName(e.target.value)
    const handleEmail = (e) =>setEmail(e.target.value)

    const navigator = useNavigate()

    const saveCmyEmployee = (e) =>{
        e.preventDefault()
        const cmyEmployee = {firstName,lastName,email}
        console.log(cmyEmployee)

        createCmyEmployee(cmyEmployee)
        .then(
            (response) =>{ 
                console.log(response.data)
                navigator('/employees')
            }
        )
    }
  return (
    <div className='container mt-5 mb-5'>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Add New Employee</h2>
              <form className="needs-validation" noValidate>
                <div className="form-group mb-3 custom-input">
                  <label htmlFor="firstName" className="form-label">First Name:</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder='Enter your first name ...' 
                    name='firstName' 
                    value={firstName} 
                    className='form-control'
                    onChange={handleFirstName}
                    required />
                  <div className="invalid-feedback">
                    Please provide your first name.
                  </div>
                </div>

                <div className="form-group mb-3 custom-input">
                  <label htmlFor="lastName" className="form-label">Last Name:</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder='Enter your last name ...' 
                    name='lastName' 
                    value={lastName} 
                    className='form-control'
                    onChange={handleLastName}
                    required />
                  <div className="invalid-feedback">
                    Please provide your last name.
                  </div>
                </div>

                <div className="form-group mb-3 custom-input">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input 
                    type="text" 
                    id="email" 
                    placeholder='Enter your email ...' 
                    name='email' 
                    value={email} 
                    className='form-control'
                    onChange={handleEmail}
                    required />
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>

                <button className='btn btn-success btn-lg btn-block' onClick={saveCmyEmployee}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CmyEmployeeComponent