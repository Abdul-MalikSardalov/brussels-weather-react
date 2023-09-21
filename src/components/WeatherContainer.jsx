import { useEffect, useState } from 'react';
import './WeatherContainer.css';
import axios from 'axios';
import Weather from './Weather';

const WeatherContainer = () => {
    const [error, setError] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                const res = await axios.get(
                    `https://api.open-meteo.com/v1/forecast?latitude=50.8503&longitude=4.3517&hourly=temperature_2m`
                );

                if (res.status === 200) {
                    setWeatherData(res.data);
                    setError('');
                } else {
                    throw new Error(
                        `Failed to fetch user with status : ${res.status}`
                    );
                }
            } catch (err) {
                setError(err.message);
            }
        };
        getWeatherData();
    }, []);

    return (
        <div className="weather-container">
            {weatherData && <Weather weather={weatherData} />}
        </div>
    );
};

WeatherContainer.propTypes = {};

export default WeatherContainer;
