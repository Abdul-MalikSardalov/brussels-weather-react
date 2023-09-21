import './Day.css';
import PropTypes from 'prop-types';
import Hour from './Hour';

const Day = ({ day, info }) => {
    return (
        <div className="day">
            <div className="day-container">
                <div className="day">Day: {day}</div>
                <div className="calcium">°C</div>
            </div>
            {info.map((hour, index) => (
                <Hour key={index} hour={hour} />
            ))}
        </div>
    );
};

Day.propTypes = {
    day: PropTypes.string.isRequired,
    info: PropTypes.array.isRequired
};

export default Day;
