import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from '../ArrowsSort/Arrows';
import Employee from './Employee';
import FilterForm from "../Filter/FilterForm";
import AddEmployeeForm from '../AddEmployee/AddEmployeeForm';
import { Route, Routes } from 'react-router-dom';
import EditEmployees from '../EditEmployees/EditEmployees';


let Employees = ({ employees,
    setEmployees,
    sortData,
    sortDataDate,
    directionSort,
    filterEmployees,
    getAddEmployeeFormData,
    editEmployee,
    setEditEmployee }) => {

    const [fieldDate, setFieldDate] = useState('');

    const Arrow = () => {
        return (
            directionSort ? <ArrowUp /> : <ArrowDown />
        )
    }

    const fieldSortData = (field) => {
        sortData(field);
        setFieldDate(field);
    }

    const fieldSortDataDate = (field) => {
        sortDataDate(field);
        setFieldDate(field);
    }

    return <div className="container">

        <Routes>
            <Route path="/edit" element={<EditEmployees editEmployee={editEmployee} 
            employees={employees} 
            setEmployees={setEmployees}/>} />
            <Route path="/" element={
                <div>
                    <AddEmployeeForm getAddEmployeeFormData={getAddEmployeeFormData} />
                    <FilterForm filterEmployees={filterEmployees} />
                    <table className="table">
                        <thead>
                            <tr>
                                <th onClick={() => { fieldSortData('name') }}>Name {fieldDate === 'name' ? <Arrow /> : null}</th>
                                <th>Role</th>
                                <th>Phone</th>
                                <th onClick={() => { fieldSortDataDate('birthday') }}>Birthday {fieldDate === 'birthday' ? <Arrow /> : null}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(e => <Employee employee={e}
                                    key={e.name}
                                    setEditEmployee={setEditEmployee}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            } />
        </Routes>
    </div >
}

export default Employees;