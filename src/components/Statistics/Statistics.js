import PropTypes from 'prop-types';
import getRandomColor from '../GetRandomColor/GetRandomColor';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <div className={styles.title__container}>
      {title && <h2 className={styles.title}>{title}</h2>}
    </div>
    <ul className={styles.stats__list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={styles.stats__item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={styles.stats__label}>{label}</span>
          <span className={styles.stats__percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistics;
