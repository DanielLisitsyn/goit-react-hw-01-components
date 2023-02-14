import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils/makeRandomColor';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && (
        <div className={css.wrapper}>
          <h2 className={css.title}>Upload stats</h2>
        </div>
      )}
      <ul className={css.statlist}>
        {stats.map(stat => (
          <li
            className={css.item}
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number,
      label: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
