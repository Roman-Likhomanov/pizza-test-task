import React, { useState } from "react";
import InputMask from 'react-input-mask';

const AddEmployeeForm = ({getAddEmployeeFormData}) => {

  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [isArchive, setIsArchive] = useState(false);

  const submitHandler = (e) => {
      e.preventDefault();
      getAddEmployeeFormData(name, role, phone, birthday, isArchive)
  }
 
  return (
    <div>
      {!formOpen ?
        <div className="col-12">
          <button type="submit" className="btn btn-primary mt-3" onClick={() => { setFormOpen(true) }} >Добавить сотрудника</button>
        </div>
        :
        <form onSubmit={submitHandler} className="row g-3 mt-3" >
          <div className="col-md-3">
            <label htmlFor="inputEmail4" className="form-label">Имя</label>
            <input value={name} onChange={(event)=>{setName(event.target.value)}} type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputState" className="form-label">Должность</label>
            <select onChange={(event) => {setRole(event.target.value)}} id="inputState" className="form-select">
              <option defaultValue>Должность...</option>
              <option value="cook">Повар</option>
              <option value="waiter">Официант</option>
              <option value="driver">Водитель</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="inputPassword4" className="form-label" >Телефон</label>
            <InputMask value={phone} onChange={(event)=>{setPhone(event.target.value)}} type="text" className="form-control" 
            id="inputPassword4" placeholder="+7 (999) 999-9999" mask='+7 (999) 999-9999' />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputZip" className="form-label">Дата рождения</label>
            <InputMask value={birthday} onChange={(event)=>{setBirthday(event.target.value)}} type="text" className="form-control" 
            id="inputZip" placeholder='DD-MM-YYYY' mask='99.99.9999' />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input onChange={() => {setIsArchive(!isArchive)}} className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                в архиве
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Добавить</button>
          </div>
        </form>
      }
    </div>
  )

}

export default AddEmployeeForm;

