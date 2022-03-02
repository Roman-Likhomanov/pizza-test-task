import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

const EditEmployees = ({ editEmployee, employees, setEmployees }) => {
    const navigate = useNavigate();

    const [name, setName] = useState(editEmployee.name);
    const [role, setRole] = useState(editEmployee.role);
    const [phone, setPhone] = useState(editEmployee.phone);
    const [birthday, setBirthday] = useState(editEmployee.birthday);
    const [isArchive, setIsArchive] = useState(editEmployee.isArchive);

    const submitHandler = (e) => {
        e.preventDefault();
        let newEmployee = {
            "id": editEmployee.id,
            "name": name,
            "isArchive": isArchive,
            "role": role,
            "phone": phone,
            "birthday": birthday
        }

        const copyEmployees = employees.concat();
        const index = copyEmployees.indexOf(editEmployee);
        if (index !== -1) {
            copyEmployees[index] = newEmployee;
        }
        setEmployees(copyEmployees);
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="row g-3 mt-3 needs-validation" novalidate>
                <div className="col-md-3">
                    <label htmlFor="validationCustom01" className="form-label">Имя</label>
                    <input value={name} onChange={(event) => { setName(event.target.value) }} type="text" className="form-control" id="validationCustom01" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom02" className="form-label">Должность</label>
                    <select onChange={(event) => { setRole(event.target.value) }} id="validationCustom02" className="form-select">
                        <option defaultValue={role}>{role}</option>
                        <option value="cook">Повар</option>
                        <option value="waiter">Официант</option>
                        <option value="driver">Водитель</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom03" className="form-label" >Телефон</label>
                    <InputMask value={phone} onChange={(event) => { setPhone(event.target.value) }} type="text" className="form-control" 
                    id="validationCustom03" placeholder="+7 (999) 999-9999" mask='+7 (999) 999-9999'/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">Дата рождения</label>
                    <InputMask value={birthday} onChange={(event) => { setBirthday(event.target.value) }} type="text" className="form-control" 
                    id="validationCustom04" placeholder='DD-MM-YYYY' mask='99.99.9999' />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input onChange={() => { setIsArchive(!isArchive) }} className="form-check-input" type="checkbox" id="gridCheck" checked={isArchive} />
                        <label className="form-check-label" htmlFor="gridCheck">
                            в архиве
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Сохранить изменения</button>
                </div>
            </form>
        </div>
    )
}

export default EditEmployees;
