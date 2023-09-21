import './Hour.css';
import PropTypes from 'prop-types';

import { IoMdCloudyNight } from 'react-icons/io';
import { TbSunset2 } from 'react-icons/tb';
import { WiDaySunny } from 'react-icons/wi';
import { FaArrowDown, FaArrowUpLong } from 'react-icons/fa6';
import { FaEquals } from 'react-icons/fa';

const Hour = ({ hour }) => {
    console.log(hour.hour);
    return (
        <div className="hour">
            <div>
                <div className="hours-icon">
                    <div className="hour-number">{hour.hour}</div>
                    <div>
                        {' '}
                        {Number(hour.hour.split(':')[0]) <= 6 ? (
                            <IoMdCloudyNight />
                        ) : Number(hour.hour.split(':')[0]) <= 10 ? (
                            <TbSunset2 />
                        ) : Number(hour.hour.split(':')[0]) <= 19 ? (
                            <WiDaySunny />
                        ) : Number(hour.hour.split(':')[0]) <= 23 ? (
                            <IoMdCloudyNight />
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="calcium-icons">
                <div className="upDownIcons">
                    {hour.comparison === 'down' ? (
                        <FaArrowDown color="#c01111" />
                    ) : hour.comparison === 'up' ? (
                        <FaArrowUpLong color="green" />
                    ) : hour.comparison === 'same' ? (
                        <FaEquals color="black" />
                    ) : null}
                </div>
                <div>{hour.temp}</div>
            </div>
        </div>
    );
};

Hour.propTypes = {
    hour: PropTypes.shape({
        hour: PropTypes.string.isRequired,
        temp: PropTypes.string.isRequired
    })
};

export default Hour;
