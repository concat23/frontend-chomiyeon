import React, { useEffect, useState } from 'react';
import { listCmyEmployees, deleteCmyEmployee as deleteEmployee } from '../services/CmyEmployeeService';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { URL_CREATE, URL_UPDATE } from '../services/ConstantAdminRoute'

function ListCmyEmployeeComponent() {
 
  const [cmyEmployees, setCmyEmployees] = useState([]);
  
  const navigator = useNavigate();

  // Get list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listCmyEmployees();
        setCmyEmployees(response);
      } catch (error) {
        console.error('Error fetching employee list:', error);
      }
    };

    fetchData();
  }, []);

  // Create
  function addNewCmyEmployee() {
    navigator(URL_CREATE);
  }

  // Update
  function updateCmyEmployee(id) {
    navigator(`${URL_UPDATE}${id}`);
  }

  // Delete
  const deleteCmyEmployee = async (id) => {
    try {
      // Perform the delete action
      await deleteEmployee(id);

      // After successful deletion, fetch the updated list
      const updatedList = await listCmyEmployees();
      setCmyEmployees(updatedList);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  
  return (
    <div className='container'>
      <div className='text-center font-weight-bold fs-1 fs-md-2 fs-lg-3 fs-xl-4'>List of employees</div>
      <button className="btn btn-light mb-2 border" onClick={addNewCmyEmployee}><span className="bi bi-plus"></span></button>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th className="d-flex justify-content-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {cmyEmployees.map((cmyEmployee) => (
            <tr key={cmyEmployee.id}>
              <td>{cmyEmployee.id}</td>
              <td>{cmyEmployee.firstName}</td>
              <td>{cmyEmployee.lastName}</td>
              <td>{cmyEmployee.email}</td>
              <td className="d-flex justify-content-end">
                    <button className='btn btn-info mr-2' onClick={() => updateCmyEmployee(cmyEmployee.id)} style={{ marginRight: '10px' }}>
                        <span className="bi bi-pencil-square"></span>
                    </button>
                    <button className='btn btn-danger' onClick={() => deleteCmyEmployee(cmyEmployee.id)}>
                        <span className="bi bi-trash"></span>
                    </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListCmyEmployeeComponent;
