import PropTypes from 'prop-types';

export const listOfGoodsPropTypes = {
    listOfUseres: PropTypes.array.isRequired,
    removeElement: PropTypes.func.isRequired,
    removeComments: PropTypes.func.isRequired,
    setListOfUsers: PropTypes.func.isRequired,
    setListOfComments: PropTypes.func.isRequired,
    listOfComments: PropTypes.array.isRequired,
};
