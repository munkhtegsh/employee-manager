import React, { Component } from 'react';

import Employee from './models/Employee';

// components
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor';


class App extends Component {
  // constructor
  constructor() {
    super();
    this.state = {
      employees: [
        new Employee(0, 'Munkhtegsh Munkhbat', 4155332973, 'Fullstack engineer'),
        new Employee(1, 'Tegshsaikhan Shirbazar',4151232355, 'Construction engineer'),
        new Employee(2, 'Susana Bayona Mercado', 4156405151, 'Auditor')
      ],
      selectedEmployee: null
    };
  }

  // selectEmployee
  selectEmployee(selected) {
    this.setState({
      selectedEmployee: selected
    });
  }
  

  // refresh
  refresh() {
    this.setState(this.state);
  }
  

  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-container">
          <EmployeeList employees={this.state.employees} selectEmployee={this.selectEmployee.bind(this)} />
          <EmployeeEditor refreshList={this.refresh.bind(this)} selected={this.state.selectedEmployee} />
        </div>
      </div>
    )
  }
}

export default App;
