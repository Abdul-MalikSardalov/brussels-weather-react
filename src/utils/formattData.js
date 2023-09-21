const formatData = (weather) => {
    const { hourly } = weather;
    const { time, temperature_2m } = hourly;
    const days = [];
    let oldTemp;
    time.forEach((hour, index) => {
        const now = new Date(hour);
        const day = now.getDate();

        const formattedHour = `${
            now.getHours() < 10 ? '0' : ''
        }${now.getHours()}:${
            now.getMinutes() < 10 ? '0' : ''
        }${now.getMinutes()}:${
            now.getSeconds() < 10 ? '0' : ''
        }${now.getSeconds()}`;

        const formattedTemp = temperature_2m[index].toFixed(1);

        let comparison;

        if (oldTemp) {
            if (oldTemp > temperature_2m[index]) {
                comparison = 'down';
            } else if (oldTemp < temperature_2m[index]) {
                comparison = 'up';
            } else if (oldTemp === temperature_2m[index]) {
                comparison = 'same';
            }
        } else {
            comparison = 'nothing';
        }

        const hourAndTemp = {
            hour: formattedHour,
            temp: formattedTemp,
            comparison: comparison
        };

        console.log(hourAndTemp);

        if (!days[day]) {
            days[day] = [];
        }
        days[day].push(hourAndTemp);
        oldTemp = temperature_2m[index];
    });

    return days;
};

export default formatData;
