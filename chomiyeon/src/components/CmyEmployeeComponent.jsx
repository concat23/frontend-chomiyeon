import React, { useState, useEffect } from 'react';
import '../components/style.css';
import { createCmyEmployee, getCmyEmployeeById, updateCmyEmployee } from '../services/CmyEmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import { URL_LIST } from '../services/ConstantRoute'
function CmyEmployeeComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const navigator = useNavigate();
  const { id } = useParams();

  // Get detail
  useEffect(() => {
    // If there is an id, fetch the employee data for updating
    if (id) {
      getCmyEmployeeById(id)
        .then((response) => {
          console.log(response);
          const employeeData = response.cmyEmployeeDTO; // Adjust the path based on the actual response structure
          if (employeeData) {
            setFirstName(employeeData.firstName);
            setLastName(employeeData.lastName);
            setEmail(employeeData.email);
          } else {
            console.error('Error fetching employee data: Employee data is undefined');
          }
        })
        .catch((error) => {
          console.error('Error fetching employee data:', error);
        });
    }
  }, [id]);

  // Update saveCmyEmployee function
  const saveCmyEmployee = async (e) => {
    e.preventDefault();
    const cmyEmployee = { firstName, lastName, email };
    console.log(cmyEmployee);

    // Ensure that id is correctly set or passed
    const saveFunction = id ? updateCmyEmployee : createCmyEmployee;

    try {
      if (validateForm()) { // Add the validateForm call here
        const response = await saveFunction(cmyEmployee, id); // Ensure id is correctly passed here
        console.log(response);
        navigator(URL_LIST);
      } else {
        console.error('Validation failed. Please check the form fields.');
      }
    } catch (error) {
      console.error('Error saving employee data:', error);
    }
  };


  // Validate form
  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle() {
    return <h2 className='text-center'>{id ? 'Update employee' : 'Add employee'}</h2>;
  }

  return (
    <div className='container mt-5 mb-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <form onSubmit={saveCmyEmployee} className='needs-validation' noValidate>
                {pageTitle()}
                <div className='form-group mb-3 custom-input'>
                  <label htmlFor='firstName' className='form-label'>
                    First Name:
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    placeholder='Enter your first name ...'
                    name='firstName'
                    value={firstName}
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    onChange={handleFirstName}
                    required
                  />
                  {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                </div>

                <div className='form-group mb-3 custom-input'>
                  <label htmlFor='lastName' className='form-label'>
                    Last Name:
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    placeholder='Enter your last name ...'
                    name='lastName'
                    value={lastName}
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    onChange={handleLastName}
                    required
                  />
                  {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                </div>

                <div className='form-group mb-3 custom-input'>
                  <label htmlFor='email' className='form-label'>
                    Email:
                  </label>
                  <input
                    type='text'
                    id='email'
                    placeholder='Enter your email ...'
                    name='email'
                    value={email}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    onChange={handleEmail}
                    required
                  />
                  {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>

                <button className='btn btn-success btn-lg btn-block' type='submit'>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CmyEmployeeComponent;
