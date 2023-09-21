import './App.css';

import WeatherContainer from './components/WeatherContainer';
import Header from './components/Header';

function App() {
    return (
        <div className="container">
            <div className="header">
                <Header title="Brussels Weather" />
            </div>
            <WeatherContainer />
        </div>
    );
}

export default App;
