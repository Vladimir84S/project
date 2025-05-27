import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSalary: props.salary, // локальный state для редактирования
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.salary !== this.props.salary) {
      this.setState({ currentSalary: this.props.salary }); //  синхронизация, если родитель меняет зарплату
    }
  }

  handleSalaryChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // убираем все символы кроме цифр
    const newSalary = Number(value);
    this.setState({ currentSalary: newSalary });
    this.props.onSalaryChange(newSalary); // передаём новое значение родителю
  };

  render() {
    const { name, onDelete, onToggleProp, increase, rise } = this.props;

    const { currentSalary } = this.state;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
      classNames += ' increase';
    }
    if (rise) {
      classNames += ' like';
    }

    return (
      <li className={classNames}>
        <span
          className="list-group-item-label"
          onClick={onToggleProp}
          data-toggle="rise"
        >
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          value={currentSalary + '$'}
          onChange={this.handleSalaryChange}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={onToggleProp}
            data-toggle="increase"
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
