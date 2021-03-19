import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendsList = ({friends}) => (

    <ul className="friend-list">
        {friends.map(({avatar, name, isOnline, id}) => (
            <li className="item" key={id}>
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            </li>
        )
        )}
    </ul>
)

FriendsList.propTypes = {
    id: PropTypes.number.isRequired, 
}


FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }
    )),
}

export default FriendsList;