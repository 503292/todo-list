import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import Priority from '../../utils/Priority';
import css from './TaskEditor.module.css';

const options = Object.values(Priority);

export default class TaskEditor extends Component {
  static propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };

  state = {
    text: '',
    priority: Priority.NORMAL,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddTask({ ...this.state });

    this.setState({
      text: '',
      priority: Priority.NORMAL,
    });
  };

  render() {
    const { text, priority } = this.state;

    return (
      <div className={css.wrapTaskEdit}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
            placeholder="Enter task content..."
            required
          />
          <label className={css.label}>
            <PrioritySelector
              options={options}
              value={priority}
              onChange={this.handleChange}
            />
          </label>

          <button className={css.addBtn} type="submit">
            +
          </button>
        </form>
      </div>
    );
  }
}
