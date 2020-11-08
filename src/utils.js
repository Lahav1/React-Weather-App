export const key = "fp59bI7vMUXC8BmeByT1R0xBiHiOdcDM";

export const handleDate = (dateString) => {
    let date = dateString.split('T')[0];
    let splittedDate = date.split('-');
    return splittedDate[2] + '/' + splittedDate[1];
}

export const toCelsius = (f) => Math.round((5/9) * (f - 32) * 10) / 10;

export const getCityDetails = async (searchString) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${searchString}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

export const getCurrentWeather = async (locationKey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationKey}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

export const getForecast = async (locationKey) => {
    const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query = `${locationKey}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data;
}

export const fetchCurrent = async (searchString) => {
    const cityDetails = await getCityDetails(searchString);
    const currentWeather = await getCurrentWeather(cityDetails.Key);
    return {
        cityDetails: cityDetails,
        currentWeather: currentWeather,
    };
}

export const fetchCurrentAndForecast = async (searchString) => {
    const cityDetails = await getCityDetails(searchString);
    const currentWeather = await getCurrentWeather(cityDetails.Key);
    const weatherForecast = await getForecast(cityDetails.Key);
    return {
        cityDetails: cityDetails,
        currentWeather: currentWeather,
        weatherForecast: weatherForecast
    };
}

