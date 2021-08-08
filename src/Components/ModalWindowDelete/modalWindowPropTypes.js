import PropTypes from 'prop-types';

export const modalWondowPropTypes = {
    smShow : PropTypes.bool.isRequired ,
    setSmShow: PropTypes.func.isRequired,
    removeComments: PropTypes.func.isRequired,
    removeElement: PropTypes.func.isRequired,
    idForRemove: PropTypes.number.isRequired,
    setIdForRemove: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
};