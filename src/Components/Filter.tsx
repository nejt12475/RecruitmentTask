import React from 'react';
import '../Styles/Filter.css';


const Filter = function ({title, options, f, cursel}: {title: string, options: string[], f: Function, cursel: string}) {
function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {

    cursel= e.currentTarget.value.toString();
    f(e.currentTarget.value.toString());
    console.log(cursel);

}
  return (

      <div className="filter"><h3>{title}</h3>
      <select onChange={handleChange}>
          {options.map((option) => (
                  <option key={option} value={option} >{option}</option>
              ))}

      </select>
      </div>
  );
};
export default Filter;
