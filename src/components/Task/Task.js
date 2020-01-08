import React from 'react';
import PropTypes from 'prop-types';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import Priority from '../../utils/Priority';
import css from './Task.module.css';

const options = Object.values(Priority);

const Task = ({
  id,
  text,
  priority,
  completed,
  onDeleteTask,
  onUpateCompleted,
  onUpdatePriority,
}) => (
  <div className={`${css.task} ${css[`${priority}Priority`]}`}>
    <p className={css.text}>{text}</p>

    <hr />
    <div className={css.actions}>
      <button type="button" onClick={onDeleteTask}>
        Delete
      </button>

      <PrioritySelector
        options={options}
        value={priority}
        onChange={e => onUpdatePriority(id, e.target.value)}
      />

      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={onUpateCompleted}
        />
      </label>
    </div>
  </div>
);

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpateCompleted: PropTypes.func.isRequired,
  onUpdatePriority: PropTypes.func.isRequired,
};

export default Task;
