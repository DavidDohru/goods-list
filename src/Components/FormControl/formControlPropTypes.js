import PropTypes from 'prop-types';

export const formControlPropTypes = {
  listOfUsers: PropTypes.array.isRequired,
  setNameForDelete: PropTypes.func.isRequired,
  nameForDelete: PropTypes.number.isRequired,
};
