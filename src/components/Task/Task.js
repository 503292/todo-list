import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
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
    <div>
      <label className={css.wrapText}>
        <input
          className={css.completedCheckbox}
          type="checkbox"
          checked={completed}
          onChange={onUpateCompleted}
        />
        <p
          className={
            completed === true ? `${css.lineThrough} ${css.text}` : css.text
          }
        >
          {text}
        </p>
      </label>
    </div>

    <div className={css.actions}>
      {!completed ? (
        <PrioritySelector
          options={options}
          value={priority}
          onChange={e => onUpdatePriority(id, e.target.value)}
        />
      ) : (
        <FontAwesomeIcon
          className={css.deleteBtn}
          onClick={onDeleteTask}
          icon={faTrashAlt}
        />
      )}
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
