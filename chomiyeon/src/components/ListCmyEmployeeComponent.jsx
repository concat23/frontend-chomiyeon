import React, {useEffect, useState} from 'react'
import { listCmyEmployees } from '../services/CmyEmployeeService'

function  ListCmyEmployeeComponent() {
  
    const [cmyEmployees, setCmyEmployees] = useState([])

    useEffect(() =>{
        listCmyEmployees().then((response) => {
            setCmyEmployees(response.data)
        }).catch(error =>{
            console.error(error)
        })
    },[])

    // const dummyData = [
    //     {
    //         "id":1,
    //         "firstName":"Test First",
    //         "lastName":"Nguyen Van",
    //         "email":"testfirst@gmail.com"
    //     },
    //     {
    //         "id":2,
    //         "firstName":"Test Second",
    //         "lastName":"Nguyen Van",
    //         "email":"testsecond@gmail.com"
    //     },
    //     {
    //         "id":3,
    //         "firstName":"Test Third",
    //         "lastName":"Nguyen Van",
    //         "email":"testthird@gmail.com"
    //     }
    // ]


    
  return (
    <div className='container'>
        <div className='text-center font-weight-bold fs-1 fs-md-2 fs-lg-3 fs-xl-4'>List of employees</div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    cmyEmployees.map(cmyEmployee => 
                        <tr key={cmyEmployee.id}>
                            <td>{cmyEmployee.id}</td>
                            <td>{cmyEmployee.firstName}</td>
                            <td>{cmyEmployee.lastName}</td>
                            <td>{cmyEmployee.email}</td>
                        </tr>    
                    )
                }
                <tr></tr>
            </tbody>
        </table>
    </div>
    
  )
}

export default ListCmyEmployeeComponent
