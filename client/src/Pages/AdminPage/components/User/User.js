import React from 'react';
import PropTypes from 'prop-types';

const User = ({ deleteUser, switchRoles, user }) => {
  const adminButtonText = user.role === 'Admin'
    ? 'Demote to user'
    : 'Promote to admin';

  return (
    <article className="col-md-12 user-list">
      <h4 className="admin-title">{`${user.firstName} ${user.lastName}`}
        <a href="#" onClick={() => deleteUser(user._id)} className="pull-right card-buttons">
          <span className="glyphicon glyphicon-trash"></span>
        </a>
        <a href="#" onClick={() => switchRoles(user._id)} className="pull-right card-buttons">
          {adminButtonText}
        </a>
      </h4>
    </article>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  deleteUser: PropTypes.func.isRequired,
  switchRoles: PropTypes.func.isRequired
};

export default User;
