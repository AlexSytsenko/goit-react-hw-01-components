import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline}) => (
    <>
        <span className={isOnline.toString()}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </>
)

FriendListItem.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;