export const key = "jdyE9tam2JJwtRJQZOi3rWUSqfFS3pTq";

// convert the date to DD/MM format.
export const handleDate = (dateString) => {
    let date = dateString.split('T')[0];
    let splittedDate = date.split('-');
    return splittedDate[2] + '/' + splittedDate[1];
}

// create a string of '{city}, {country}'.
export const handleSuggestions = (suggestions) => {
    let s = [];
    var suggestion;
    for (suggestion of suggestions) {
        s.push(suggestion.LocalizedName + ", " + suggestion.Country.LocalizedName)
    }
    return s;
}

export const toCelsius = (f) => Math.round((5/9) * (f - 32));

export const getCityDetails = async (searchString) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${searchString}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

export const getCurrentWeather = async (locationKey) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationKey}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

export const getForecast = async (locationKey) => {
    const base = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query = `${locationKey}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data;
}

export const getAutocomplete = async (str) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    const query = `?apikey=${key}&q=${str}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data;
}

// fetch current weather.
export const fetchCurrent = async (searchString) => {
    const cityDetails = await getCityDetails(searchString);
    const currentWeather = await getCurrentWeather(cityDetails.Key);
    return {
        cityDetails: cityDetails,
        currentWeather: currentWeather,
    };
}

// fetch current weather and 5-day forecast.
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

// get the icon from the accuweather api website.
export const getIcon = (number) => {
    if (number === '') {
        return;
    }
    if (number < 10) {
        return `https://developer.accuweather.com/sites/default/files/0${number}-s.png`;
    } 
    return `https://developer.accuweather.com/sites/default/files/${number}-s.png`;
}

// check if a search string is valid (english letters + basic chars) using regex.
export const isValidSearch = (str) => {
    var regex = /^[A-Za-z ,-]+$/;
    return regex.test(str);
}