import PropTypes from 'prop-types';
import css from './FriendList.module.css';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  const elements = friends.map(({ id, ...props }) => (
    <FriendListItem key={id} {...props} />
  ));
  return <ul className={css.friendlist}>{elements}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
