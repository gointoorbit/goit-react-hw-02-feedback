import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statList}>
      <li key="good-stat">
        <span className={css.statLabel}>Good:</span>
        <span className={css.statCounter}>{good}</span>
      </li>
      <li key="neutral-stat">
        <span className={css.statLabel}>Neutral:</span>
        <span className={css.statCounter}>{neutral}</span>
      </li>
      <li key="bad-stat">
        <span className={css.statLabel}>Bad:</span>
        <span className={css.statCounter}>{bad}</span>
      </li>
      <li key="total-stat">
        <span className={css.statLabel}>Total:</span>
        <span className={css.statCounter}>{total}</span>
      </li>
      <li key="positive-stat">
        <span className={css.statLabel}>Positive feedback:</span>
        <span className={css.statCounter}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
