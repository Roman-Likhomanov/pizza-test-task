import React from "react";

const SET_EMPLOYEES = 'SET_EMPLOYEES';
const DIRECTION_SORT = 'DIRECTION_SORT';
const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';

let initialState = {
    employees: [],
    directionSort: false,
    editEmployee: []
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES:
            return { ...state, employees: action.employees }
        case DIRECTION_SORT:
            return { ...state, directionSort: action.directionSort }
        case EDIT_EMPLOYEE:
            return { ...state, editEmployee: action.editEmployee }
        default:
            return state;
    }
}

export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });
export const setDirectionSort = (directionSort) => ({ type: DIRECTION_SORT, directionSort });
export const setEditEmployee = (editEmployee) => ({ type: EDIT_EMPLOYEE, editEmployee });

export default employeesReducer; 