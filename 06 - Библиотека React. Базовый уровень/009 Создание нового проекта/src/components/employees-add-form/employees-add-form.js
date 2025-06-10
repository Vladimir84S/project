import { Component } from 'react';

import './employees-add-form.css';

// import './employees-add-form.scss';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, salary } = this.state;

    if (
      name.trim() === '' ||
      salary.trim() === '' ||
      isNaN(salary) ||
      +salary <= 0
    ) {
      return; // Не отправляем пустые или некорректные данные
    }
    this.props.onAdd(name.trim(), salary.trim());
    this.setState({
      name: '',
      salary: '',
    });
  };

  static onLog = () => {
    console.log('Hey');
  };

  static logged = 'on';

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

EmployeesAddForm.onLog();
console.log(EmployeesAddForm.logged);
export default EmployeesAddForm;
