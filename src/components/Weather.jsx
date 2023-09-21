import './Weather.css';
import PropTypes from 'prop-types';

import formatData from '../utils/formattData';
import Day from './Day';

const Weather = ({ weather }) => {
    const formattedData = formatData(weather);

    return (
        <div>
            <div className="day-hours">Day | Hours</div>
            {formattedData &&
                Object.entries(formattedData).map(([key, value]) => (
                    <Day key={key} day={key} info={value} />
                ))}
        </div>
    );
};

Weather.propTypes = {
    weather: PropTypes.object.isRequired
};

export default Weather;
