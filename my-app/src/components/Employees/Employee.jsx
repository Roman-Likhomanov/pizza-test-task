import React from "react";
import { useNavigate } from 'react-router-dom';


let Employee = ({ employee, setEditEmployee }) => {

    const navigate = useNavigate();

    const clickRowHandler = (e) => {
        e.preventDefault();
        navigate('/edit');
        setEditEmployee(employee);
    }

    return (
        <tr onClick={clickRowHandler}>
            <td>{employee.name}</td>
            <td>{employee.role}</td>
            <td>{employee.phone}</td>
            <td>{employee.birthday}</td>
        </tr>

    )
}

export default Employee;