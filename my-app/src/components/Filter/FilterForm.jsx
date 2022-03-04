import React from "react";
import { useState } from "react";

const FilterForm = ({ filterEmployees}) => {

    const [filterValue, setFilterValue] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(false);
    
    const clickHandler = (e) => {
        e.preventDefault();
        filterEmployees(filterValue, checkboxValue);
    }

    return (
        <form className="row row-cols-lg-auto g-3 align-items-center mb-3 mt-3 ">
            <div className="col-12">
                <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                <select onChange={(event) => {setFilterValue(event.target.value)}} className="form-select" id="inlineFormSelectPref">
                    <option defaultValue>Должность...</option>
                    <option value="cook">Повар</option>
                    <option value="waiter">Официант</option>
                    <option value="driver">Водитель</option>
                </select>
            </div>

            <div className="col-12">
                <div className="form-check">
                    <input onChange={(event) => {setCheckboxValue(!checkboxValue)}} className="form-check-input" type="checkbox" id="inlineFormCheck" />
                    <label className="form-check-label" htmlFor="inlineFormCheck">
                        в архиве
                    </label>
                </div>
            </div>

            <div className="col-12">
                <button type="submit" onClick={clickHandler} className="btn btn-primary">Поиск</button>
            </div>
        </form>


        // <form className={styles.form}>
        //     <input placeholder="Искать здесь..." 
        //     type="search"
        //     value={filterValue} 
        //     onChange={(event) => {setFilterValue(event.target.value)}}
        //     />
        //     <button type="submit"
        //     onClick={clickHandler}
        //     >Поиск</button>
        // </form>
    )
    
}

export default FilterForm;