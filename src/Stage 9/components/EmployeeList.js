import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          { 
            // Map over this.props.employees
            this.props.employees.map((employee) => {
             return  <li key={employee.id} className="listText" 
             onClick={() => this.props.selectEmployee(employee)}> {employee.name} </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;