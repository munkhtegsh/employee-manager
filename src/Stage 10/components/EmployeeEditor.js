import React from 'react';

export default class EmployeeEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            employee: null,
            originalEmployee: null,
            notModified: true
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            employee: Object.assign({}, props.selected),
            originalEmployee: props.selected,
            notModified: true
        });
    }

    updateSelector(prop, val) {
        if(this.state.notModified) {
            this.setState({notModified: false});
        }
        let employeeCopy = Object.assign({}, this.state.employee);
        employeeCopy[prop] = val;
        this.setState({employee: employeeCopy});
    }

    save() {
        this.state.originalEmployee.updateName(this.state.employee.name);
        this.state.originalEmployee.updatePhone(this.state.employee.phone);
        this.state.originalEmployee.updateTitle(this.state.employee.title);
        this.setState({notModified: true});
        this.props.refreshList();
    }

    cancel() {
        let originalEmployeeCopy = Object.assign({}, this.state.originalEmployee);
        this.setState({employee: originalEmployeeCopy, notModified: true});
    }

    render() {
        return (
            <div className='infoCard'>
            {
            this.state.employee
            ?
                <div>
                <span id='employeeID'>ID: {this.state.employee.id}</span>
                <p id='employeeTitle'>{this.state.originalEmployee.name}</p>
                <br/>
                <button id='saveBtn' className='confirmationButton' disabled={this.state.notModified} onClick={this.save.bind(this)}>Save</button>
                <button className='neutralButton' disabled={this.state.notModified} onClick={this.cancel.bind(this)}>Cancel</button>
                <br/>
                <span className='placeholderText'>Name</span>
                <input className='materialInput' value={this.state.employee.name} onChange={(e)=> this.updateSelector('name', e.target.value )}></input>
                <span className='placeholderText'>Phone Number</span>    
                <input className='materialInput' value={this.state.employee.phone} onChange={(e)=> this.updateSelector('phone', e.target.value )}></input>
                <span className='placeholderText'>Title</span>
                <input className='materialInput' value={this.state.employee.title} onChange={(e)=> this.updateSelector('title', e.target.value )}></input>
                </div>
            :
                <p id='noEmployee'>No employee selected</p>
            }
            </div>
        )
    }
}

