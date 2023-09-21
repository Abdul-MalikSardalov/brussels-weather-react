import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return <header>{title}</header>;
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
