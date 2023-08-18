
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.general}>
        Good: <span>{good}</span>
      </li>
      <li className={css.general}>
        Neutral: <span>{neutral}</span>
      </li>
      <li className={css.general}>
        Bad: <span>{bad}</span>
      </li>

      <li className={css.general}>
        Total: <span>{total}</span>
      </li>
      <li className={css.positive}>
        Positive feedback: <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.prototype = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};