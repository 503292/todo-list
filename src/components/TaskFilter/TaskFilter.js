import React from 'react';
import PropTypes from 'prop-types';
import css from './TaskFilter.module.css';

const TaskFilter = ({ value, onChangeFilter }) => (
  <div className={css.wrapFilter}>
    <input
      type="text"
      className={css.input}
      value={value}
      onChange={onChangeFilter}
      placeholder="Type to filter tasks..."
    />
  </div>
);

TaskFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default TaskFilter;
