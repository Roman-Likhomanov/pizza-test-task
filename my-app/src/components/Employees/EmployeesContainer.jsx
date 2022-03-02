import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { setEmployees, setDirectionSort, setEditEmployee } from '../../redux/employees-reducer';
import employeesJson from './../../data/employees.json'
import Employees from './Employees';

const EmployeesContainer = (props) => {

  useEffect(() => {
    props.setEmployees(employeesJson);
  }, []);

  const sortData = (field) => {
    const copyData = props.employees.concat();
    let sortCopy;

    if (props.directionSort) {
      sortCopy = copyData.sort(
        (a, b) => { return a[field] > b[field] ? 1 : -1 }
      );
    } else {
      sortCopy = copyData.reverse(
        (a, b) => { return a[field] > b[field] ? 1 : -1 }
      );
    }

    props.setEmployees(sortCopy);
    props.setDirectionSort(!props.directionSort);
  };

  const sortDataDate = (field) => {
    const copyData = props.employees.concat();
    let sortCopy;

    if (props.directionSort) {
      sortCopy = copyData.sort(
        (a, b) => {
          let aDate = new Date(a[field].split('.').reverse().join('.'));
          let bDate = new Date(b[field].split('.').reverse().join('.'));
          return aDate > bDate ? 1 : -1
        }
      );
    } else {
      sortCopy = copyData.reverse(
        (a, b) => {
          let aDate = new Date(a[field].split('.').reverse().join('.'));
          let bDate = new Date(b[field].split('.').reverse().join('.'));
          return aDate > bDate ? 1 : -1
        }
      );
    }

    props.setEmployees(sortCopy);
    props.setDirectionSort(!props.directionSort);
  };


  const filterEmployees = (filterValue, checkboxValue) => {
    if (!(filterValue || checkboxValue)) {
      return alert("Заполните данные корректно");
    } else {
      return props.setEmployees(
        props.employees.filter(
          el => {
            return (el.role.includes(filterValue)
              && (el.isArchive === checkboxValue)
            )
          }
        )
      )
    }
  }

  const getAddEmployeeFormData = (name, role, phone, birthday, isArchive) => {

    if (!(name && role && phone && birthday)) {
      return alert("Заполните данные корректно");
    } else {
      const obj = {
        name: name,
        role: role,
        phone: phone,
        birthday: birthday,
        isArchive: isArchive
      }
      const copyEmployees = props.employees.concat();
      copyEmployees.unshift(obj);
      props.setEmployees(copyEmployees);
    }
  }

  return <>
    <Employees
      employees={props.employees}
      setEmployees={props.setEmployees}
      sortData={sortData}
      sortDataDate={sortDataDate}
      directionSort={props.directionSort}
      filterEmployees={filterEmployees}
      getAddEmployeeFormData={getAddEmployeeFormData}
      editEmployee={props.editEmployee}
      setEditEmployee={props.setEditEmployee}
    />
  </>
}

let mapStateToProps = (state) => {
  return {
    employees: state.employeesPage.employees,
    directionSort: state.employeesPage.directionSort,
    editEmployee: state.employeesPage.editEmployee
  }
}

export default compose(
  connect(mapStateToProps,
    { setEmployees, setDirectionSort, setEditEmployee })
)(EmployeesContainer);