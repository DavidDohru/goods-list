import PropTypes from 'prop-types';

export const commentsPropTypes = {
  idRemoveComments: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  setIdRemoveComments: PropTypes.func.isRequired,
  badLength: PropTypes.bool.isRequired,
  setComment: PropTypes.func.isRequired,
  setBadLength: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  removeComments: PropTypes.func.isRequired,
  listOfComments: PropTypes.array.isRequired,
  setListOfComments: PropTypes.func.isRequired,
};
