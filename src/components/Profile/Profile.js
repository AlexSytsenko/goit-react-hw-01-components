import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, avatar, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.stats__item}>
        <span className={styles.stats__label}>Followers</span>
        <span className={styles.stats__quantity}>{stats.followers}</span>
      </li>
      <li className={styles.stats__item}>
        <span className={styles.stats__label}>Views</span>
        <span className={styles.stats__quantity}>{stats.views}</span>
      </li>
      <li className={styles.stats__item}>
        <span className={styles.stats__label}>Likes</span>
        <span className={styles.stats__quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
  location: '',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Profile;
