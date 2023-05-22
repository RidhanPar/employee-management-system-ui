import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';

export const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",

    });

    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]:value});
    };

    const saveEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };


  return (
    <div className='flex max-w-2xl mx-auto shadow bottom-b'>
        <div className='px-8 py-8'>
            <div className='font-thin tet-2xl tracking-wider'>
                <h1>Add New Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 tet-sm font-normal'>First Name</label>
                <input onChange={(e) => handleChange(e)} name='firstName' value={employee.firstName} type="text" className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 tet-sm font-normal'>Last Name</label>
                <input onChange={(e) => handleChange(e)} name='lastName' value={employee.lastName} type="text" className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 tet-sm font-normal'>Email</label>
                <input onChange={(e) => handleChange(e)} name='emailId' value={employee.emailId} type="email" className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-8 space-x-4'>
                <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>Save</button>
                <button className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>Clear</button>
            </div>
        </div>
    </div> );
}

export default AddEmployee;