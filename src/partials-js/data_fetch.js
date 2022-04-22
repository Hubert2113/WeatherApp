'use strict';
import axios from 'axios';

const $citySearchField = document.querySelector('form input');
const $citySearchBtn = document.querySelector('form button');

export let cityData = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
    {
    "dt": 1650574800,
    "main": {
    "temp": 9.17,
    "feels_like": 9.17,
    "temp_min": 7.25,
    "temp_max": 9.17,
    "pressure": 1010,
    "sea_level": 1010,
    "grnd_level": 998,
    "humidity": 81,
    "temp_kf": 1.92
    },
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
    }
    ],
    "clouds": {
    "all": 20
    },
    "wind": {
    "speed": 1.32,
    "deg": 48,
    "gust": 3.06
    },
    "visibility": 10000,
    "pop": 0.75,
    "rain": {
    "3h": 0.62
    },
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-21 21:00:00"
    },
    {
    "dt": 1650585600,
    "main": {
    "temp": 8.39,
    "feels_like": 6.79,
    "temp_min": 6.83,
    "temp_max": 8.39,
    "pressure": 1011,
    "sea_level": 1011,
    "grnd_level": 998,
    "humidity": 86,
    "temp_kf": 1.56
    },
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
    }
    ],
    "clouds": {
    "all": 47
    },
    "wind": {
    "speed": 2.68,
    "deg": 61,
    "gust": 5.96
    },
    "visibility": 10000,
    "pop": 0.83,
    "rain": {
    "3h": 0.38
    },
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-22 00:00:00"
    },
    {
    "dt": 1650596400,
    "main": {
    "temp": 7.42,
    "feels_like": 4.54,
    "temp_min": 6.54,
    "temp_max": 7.42,
    "pressure": 1011,
    "sea_level": 1011,
    "grnd_level": 997,
    "humidity": 90,
    "temp_kf": 0.88
    },
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
    }
    ],
    "clouds": {
    "all": 73
    },
    "wind": {
    "speed": 4.61,
    "deg": 82,
    "gust": 7.5
    },
    "visibility": 10000,
    "pop": 1,
    "rain": {
    "3h": 1.44
    },
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-22 03:00:00"
    },
    {
    "dt": 1650607200,
    "main": {
    "temp": 7.01,
    "feels_like": 3.89,
    "temp_min": 7.01,
    "temp_max": 7.01,
    "pressure": 1013,
    "sea_level": 1013,
    "grnd_level": 999,
    "humidity": 81,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "clouds": {
    "all": 92
    },
    "wind": {
    "speed": 4.9,
    "deg": 80,
    "gust": 8.22
    },
    "visibility": 10000,
    "pop": 1,
    "rain": {
    "3h": 0.28
    },
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-22 06:00:00"
    },
    {
    "dt": 1650618000,
    "main": {
    "temp": 8.69,
    "feels_like": 5.96,
    "temp_min": 8.69,
    "temp_max": 8.69,
    "pressure": 1013,
    "sea_level": 1013,
    "grnd_level": 999,
    "humidity": 65,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "clouds": {
    "all": 54
    },
    "wind": {
    "speed": 4.98,
    "deg": 71,
    "gust": 6.04
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-22 09:00:00"
    },
    {
    "dt": 1650628800,
    "main": {
    "temp": 8.34,
    "feels_like": 5.89,
    "temp_min": 8.34,
    "temp_max": 8.34,
    "pressure": 1013,
    "sea_level": 1013,
    "grnd_level": 999,
    "humidity": 59,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "clouds": {
    "all": 77
    },
    "wind": {
    "speed": 4.14,
    "deg": 59,
    "gust": 6.2
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-22 12:00:00"
    },
    {
    "dt": 1650639600,
    "main": {
    "temp": 9.72,
    "feels_like": 7.47,
    "temp_min": 9.72,
    "temp_max": 9.72,
    "pressure": 1012,
    "sea_level": 1012,
    "grnd_level": 998,
    "humidity": 60,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "clouds": {
    "all": 83
    },
    "wind": {
    "speed": 4.42,
    "deg": 65,
    "gust": 6.04
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-22 15:00:00"
    },
    {
    "dt": 1650650400,
    "main": {
    "temp": 8.13,
    "feels_like": 8.13,
    "temp_min": 8.13,
    "temp_max": 8.13,
    "pressure": 1011,
    "sea_level": 1011,
    "grnd_level": 997,
    "humidity": 68,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04n"
    }
    ],
    "clouds": {
    "all": 81
    },
    "wind": {
    "speed": 1.02,
    "deg": 31,
    "gust": 2.49
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-22 18:00:00"
    },
    {
    "dt": 1650661200,
    "main": {
    "temp": 6.51,
    "feels_like": 4.49,
    "temp_min": 6.51,
    "temp_max": 6.51,
    "pressure": 1010,
    "sea_level": 1010,
    "grnd_level": 996,
    "humidity": 82,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "clouds": {
    "all": 96
    },
    "wind": {
    "speed": 2.76,
    "deg": 39,
    "gust": 4.85
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-22 21:00:00"
    },
    {
    "dt": 1650672000,
    "main": {
    "temp": 6.15,
    "feels_like": 5.14,
    "temp_min": 6.15,
    "temp_max": 6.15,
    "pressure": 1010,
    "sea_level": 1010,
    "grnd_level": 996,
    "humidity": 85,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "clouds": {
    "all": 98
    },
    "wind": {
    "speed": 1.6,
    "deg": 37,
    "gust": 2.73
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-23 00:00:00"
    },
    {
    "dt": 1650682800,
    "main": {
    "temp": 4.71,
    "feels_like": 2.74,
    "temp_min": 4.71,
    "temp_max": 4.71,
    "pressure": 1009,
    "sea_level": 1009,
    "grnd_level": 995,
    "humidity": 90,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04n"
    }
    ],
    "clouds": {
    "all": 73
    },
    "wind": {
    "speed": 2.3,
    "deg": 358,
    "gust": 4.59
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-23 03:00:00"
    },
    {
    "dt": 1650693600,
    "main": {
    "temp": 6.26,
    "feels_like": 5.06,
    "temp_min": 6.26,
    "temp_max": 6.26,
    "pressure": 1009,
    "sea_level": 1009,
    "grnd_level": 995,
    "humidity": 75,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 802,
    "main": "Clouds",
    "description": "scattered clouds",
    "icon": "03d"
    }
    ],
    "clouds": {
    "all": 45
    },
    "wind": {
    "speed": 1.78,
    "deg": 318,
    "gust": 2.58
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-23 06:00:00"
    },
    {
    "dt": 1650704400,
    "main": {
    "temp": 6.81,
    "feels_like": 4.96,
    "temp_min": 6.81,
    "temp_max": 6.81,
    "pressure": 1008,
    "sea_level": 1008,
    "grnd_level": 994,
    "humidity": 77,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "clouds": {
    "all": 98
    },
    "wind": {
    "speed": 2.61,
    "deg": 265,
    "gust": 4.44
    },
    "visibility": 10000,
    "pop": 0.11,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-23 09:00:00"
    },
    {
    "dt": 1650715200,
    "main": {
    "temp": 8.85,
    "feels_like": 6.83,
    "temp_min": 8.85,
    "temp_max": 8.85,
    "pressure": 1007,
    "sea_level": 1007,
    "grnd_level": 993,
    "humidity": 74,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "clouds": {
    "all": 99
    },
    "wind": {
    "speed": 3.52,
    "deg": 324,
    "gust": 6.4
    },
    "visibility": 10000,
    "pop": 0.2,
    "rain": {
    "3h": 0.12
    },
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-23 12:00:00"
    },
    {
    "dt": 1650726000,
    "main": {
    "temp": 10.84,
    "feels_like": 9.68,
    "temp_min": 10.84,
    "temp_max": 10.84,
    "pressure": 1006,
    "sea_level": 1006,
    "grnd_level": 992,
    "humidity": 65,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "clouds": {
    "all": 85
    },
    "wind": {
    "speed": 3.81,
    "deg": 313,
    "gust": 6.02
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-23 15:00:00"
    },
    {
    "dt": 1650736800,
    "main": {
    "temp": 8.9,
    "feels_like": 7.79,
    "temp_min": 8.9,
    "temp_max": 8.9,
    "pressure": 1006,
    "sea_level": 1006,
    "grnd_level": 992,
    "humidity": 77,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04n"
    }
    ],
    "clouds": {
    "all": 63
    },
    "wind": {
    "speed": 2.15,
    "deg": 285,
    "gust": 4.81
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-23 18:00:00"
    },
    {
    "dt": 1650747600,
    "main": {
    "temp": 6.54,
    "feels_like": 4.58,
    "temp_min": 6.54,
    "temp_max": 6.54,
    "pressure": 1007,
    "sea_level": 1007,
    "grnd_level": 993,
    "humidity": 85,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 801,
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02n"
    }
    ],
    "clouds": {
    "all": 11
    },
    "wind": {
    "speed": 2.69,
    "deg": 282,
    "gust": 7.75
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-23 21:00:00"
    },
    {
    "dt": 1650758400,
    "main": {
    "temp": 5.2,
    "feels_like": 3.21,
    "temp_min": 5.2,
    "temp_max": 5.2,
    "pressure": 1007,
    "sea_level": 1007,
    "grnd_level": 993,
    "humidity": 89,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01n"
    }
    ],
    "clouds": {
    "all": 7
    },
    "wind": {
    "speed": 2.41,
    "deg": 247,
    "gust": 5.11
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-24 00:00:00"
    },
    {
    "dt": 1650769200,
    "main": {
    "temp": 4.49,
    "feels_like": 2.46,
    "temp_min": 4.49,
    "temp_max": 4.49,
    "pressure": 1007,
    "sea_level": 1007,
    "grnd_level": 993,
    "humidity": 90,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01n"
    }
    ],
    "clouds": {
    "all": 9
    },
    "wind": {
    "speed": 2.32,
    "deg": 243,
    "gust": 5.91
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-24 03:00:00"
    },
    {
    "dt": 1650780000,
    "main": {
    "temp": 7.63,
    "feels_like": 6.32,
    "temp_min": 7.63,
    "temp_max": 7.63,
    "pressure": 1007,
    "sea_level": 1007,
    "grnd_level": 993,
    "humidity": 73,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
    }
    ],
    "clouds": {
    "all": 9
    },
    "wind": {
    "speed": 2.12,
    "deg": 241,
    "gust": 3.66
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-24 06:00:00"
    },
    {
    "dt": 1650790800,
    "main": {
    "temp": 12.57,
    "feels_like": 11.24,
    "temp_min": 12.57,
    "temp_max": 12.57,
    "pressure": 1007,
    "sea_level": 1007,
    "grnd_level": 993,
    "humidity": 52,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
    }
    ],
    "clouds": {
    "all": 9
    },
    "wind": {
    "speed": 2.16,
    "deg": 237,
    "gust": 3.61
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-24 09:00:00"
    },
    {
    "dt": 1650801600,
    "main": {
    "temp": 15.81,
    "feels_like": 14.49,
    "temp_min": 15.81,
    "temp_max": 15.81,
    "pressure": 1006,
    "sea_level": 1006,
    "grnd_level": 992,
    "humidity": 40,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 801,
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02d"
    }
    ],
    "clouds": {
    "all": 12
    },
    "wind": {
    "speed": 1.78,
    "deg": 208,
    "gust": 2.83
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-24 12:00:00"
    },
    {
    "dt": 1650812400,
    "main": {
    "temp": 16.5,
    "feels_like": 15.25,
    "temp_min": 16.5,
    "temp_max": 16.5,
    "pressure": 1004,
    "sea_level": 1004,
    "grnd_level": 991,
    "humidity": 40,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 801,
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02d"
    }
    ],
    "clouds": {
    "all": 23
    },
    "wind": {
    "speed": 1.56,
    "deg": 149,
    "gust": 2.43
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-24 15:00:00"
    },
    {
    "dt": 1650823200,
    "main": {
    "temp": 12.52,
    "feels_like": 11.79,
    "temp_min": 12.52,
    "temp_max": 12.52,
    "pressure": 1004,
    "sea_level": 1004,
    "grnd_level": 990,
    "humidity": 75,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
    }
    ],
    "clouds": {
    "all": 48
    },
    "wind": {
    "speed": 2.71,
    "deg": 71,
    "gust": 4.85
    },
    "visibility": 10000,
    "pop": 0.2,
    "rain": {
    "3h": 0.12
    },
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-24 18:00:00"
    },
    {
    "dt": 1650834000,
    "main": {
    "temp": 10.53,
    "feels_like": 9.88,
    "temp_min": 10.53,
    "temp_max": 10.53,
    "pressure": 1002,
    "sea_level": 1002,
    "grnd_level": 988,
    "humidity": 86,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
    }
    ],
    "clouds": {
    "all": 100
    },
    "wind": {
    "speed": 2,
    "deg": 71,
    "gust": 4.83
    },
    "visibility": 10000,
    "pop": 0.53,
    "rain": {
    "3h": 0.23
    },
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-24 21:00:00"
    },
    {
    "dt": 1650844800,
    "main": {
    "temp": 10.06,
    "feels_like": 9.63,
    "temp_min": 10.06,
    "temp_max": 10.06,
    "pressure": 1001,
    "sea_level": 1001,
    "grnd_level": 987,
    "humidity": 96,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10n"
    }
    ],
    "clouds": {
    "all": 99
    },
    "wind": {
    "speed": 0.48,
    "deg": 81,
    "gust": 1.36
    },
    "visibility": 10000,
    "pop": 1,
    "rain": {
    "3h": 6.56
    },
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-25 00:00:00"
    },
    {
    "dt": 1650855600,
    "main": {
    "temp": 8.88,
    "feels_like": 7.13,
    "temp_min": 8.88,
    "temp_max": 8.88,
    "pressure": 1002,
    "sea_level": 1002,
    "grnd_level": 988,
    "humidity": 90,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 802,
    "main": "Clouds",
    "description": "scattered clouds",
    "icon": "03n"
    }
    ],
    "clouds": {
    "all": 36
    },
    "wind": {
    "speed": 3.06,
    "deg": 222,
    "gust": 8.82
    },
    "visibility": 10000,
    "pop": 0.04,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-25 03:00:00"
    },
    {
    "dt": 1650866400,
    "main": {
    "temp": 10.6,
    "feels_like": 9.8,
    "temp_min": 10.6,
    "temp_max": 10.6,
    "pressure": 1002,
    "sea_level": 1002,
    "grnd_level": 989,
    "humidity": 80,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 801,
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02d"
    }
    ],
    "clouds": {
    "all": 19
    },
    "wind": {
    "speed": 4.28,
    "deg": 206,
    "gust": 8.65
    },
    "visibility": 10000,
    "pop": 0.04,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-25 06:00:00"
    },
    {
    "dt": 1650877200,
    "main": {
    "temp": 10.51,
    "feels_like": 9.42,
    "temp_min": 10.51,
    "temp_max": 10.51,
    "pressure": 1003,
    "sea_level": 1003,
    "grnd_level": 989,
    "humidity": 69,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "clouds": {
    "all": 71
    },
    "wind": {
    "speed": 7.47,
    "deg": 211,
    "gust": 14.07
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-25 09:00:00"
    },
    {
    "dt": 1650888000,
    "main": {
    "temp": 6.8,
    "feels_like": 2.75,
    "temp_min": 6.8,
    "temp_max": 6.8,
    "pressure": 1005,
    "sea_level": 1005,
    "grnd_level": 991,
    "humidity": 85,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "clouds": {
    "all": 84
    },
    "wind": {
    "speed": 7.24,
    "deg": 226,
    "gust": 10.85
    },
    "visibility": 10000,
    "pop": 0.04,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-25 12:00:00"
    },
    {
    "dt": 1650898800,
    "main": {
    "temp": 6.37,
    "feels_like": 2.48,
    "temp_min": 6.37,
    "temp_max": 6.37,
    "pressure": 1008,
    "sea_level": 1008,
    "grnd_level": 994,
    "humidity": 87,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "clouds": {
    "all": 100
    },
    "wind": {
    "speed": 6.42,
    "deg": 272,
    "gust": 10.04
    },
    "visibility": 10000,
    "pop": 0.23,
    "rain": {
    "3h": 0.11
    },
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-25 15:00:00"
    },
    {
    "dt": 1650909600,
    "main": {
    "temp": 7.01,
    "feels_like": 4.29,
    "temp_min": 7.01,
    "temp_max": 7.01,
    "pressure": 1011,
    "sea_level": 1011,
    "grnd_level": 997,
    "humidity": 83,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "clouds": {
    "all": 100
    },
    "wind": {
    "speed": 4.08,
    "deg": 264,
    "gust": 8.63
    },
    "visibility": 10000,
    "pop": 0.11,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-25 18:00:00"
    },
    {
    "dt": 1650920400,
    "main": {
    "temp": 6.75,
    "feels_like": 4.1,
    "temp_min": 6.75,
    "temp_max": 6.75,
    "pressure": 1012,
    "sea_level": 1012,
    "grnd_level": 998,
    "humidity": 82,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "clouds": {
    "all": 100
    },
    "wind": {
    "speed": 3.83,
    "deg": 272,
    "gust": 8.57
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-25 21:00:00"
    },
    {
    "dt": 1650931200,
    "main": {
    "temp": 6.71,
    "feels_like": 4.43,
    "temp_min": 6.71,
    "temp_max": 6.71,
    "pressure": 1013,
    "sea_level": 1013,
    "grnd_level": 999,
    "humidity": 73,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "clouds": {
    "all": 100
    },
    "wind": {
    "speed": 3.19,
    "deg": 253,
    "gust": 7.15
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-26 00:00:00"
    },
    {
    "dt": 1650942000,
    "main": {
    "temp": 6.4,
    "feels_like": 4.05,
    "temp_min": 6.4,
    "temp_max": 6.4,
    "pressure": 1014,
    "sea_level": 1014,
    "grnd_level": 1000,
    "humidity": 74,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04n"
    }
    ],
    "clouds": {
    "all": 100
    },
    "wind": {
    "speed": 3.2,
    "deg": 254,
    "gust": 7.35
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-26 03:00:00"
    },
    {
    "dt": 1650952800,
    "main": {
    "temp": 6.68,
    "feels_like": 4.34,
    "temp_min": 6.68,
    "temp_max": 6.68,
    "pressure": 1015,
    "sea_level": 1015,
    "grnd_level": 1001,
    "humidity": 74,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "clouds": {
    "all": 100
    },
    "wind": {
    "speed": 3.28,
    "deg": 262,
    "gust": 7.19
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-26 06:00:00"
    },
    {
    "dt": 1650963600,
    "main": {
    "temp": 9.21,
    "feels_like": 7.08,
    "temp_min": 9.21,
    "temp_max": 9.21,
    "pressure": 1017,
    "sea_level": 1017,
    "grnd_level": 1003,
    "humidity": 60,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "clouds": {
    "all": 100
    },
    "wind": {
    "speed": 3.89,
    "deg": 273,
    "gust": 5.13
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-26 09:00:00"
    },
    {
    "dt": 1650974400,
    "main": {
    "temp": 11.18,
    "feels_like": 9.71,
    "temp_min": 11.18,
    "temp_max": 11.18,
    "pressure": 1017,
    "sea_level": 1017,
    "grnd_level": 1003,
    "humidity": 52,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "clouds": {
    "all": 100
    },
    "wind": {
    "speed": 3.74,
    "deg": 263,
    "gust": 3.96
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-26 12:00:00"
    },
    {
    "dt": 1650985200,
    "main": {
    "temp": 11.83,
    "feels_like": 10.43,
    "temp_min": 11.83,
    "temp_max": 11.83,
    "pressure": 1017,
    "sea_level": 1017,
    "grnd_level": 1003,
    "humidity": 52,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 804,
    "main": "Clouds",
    "description": "overcast clouds",
    "icon": "04d"
    }
    ],
    "clouds": {
    "all": 96
    },
    "wind": {
    "speed": 2.95,
    "deg": 259,
    "gust": 3.35
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
    "pod": "d"
    },
    "dt_txt": "2022-04-26 15:00:00"
    },
    {
    "dt": 1650996000,
    "main": {
    "temp": 9.9,
    "feels_like": 9.37,
    "temp_min": 9.9,
    "temp_max": 9.9,
    "pressure": 1018,
    "sea_level": 1018,
    "grnd_level": 1004,
    "humidity": 68,
    "temp_kf": 0
    },
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10n"
    }
    ],
    "clouds": {
    "all": 98
    },
    "wind": {
    "speed": 1.67,
    "deg": 247,
    "gust": 3.31
    },
    "visibility": 10000,
    "pop": 0.2,
    "rain": {
    "3h": 0.12
    },
    "sys": {
    "pod": "n"
    },
    "dt_txt": "2022-04-26 18:00:00"
    }
    ],
    "city": {
    "id": 756135,
    "name": "Warsaw",
    "coord": {
    "lat": 52.232,
    "lon": 21.0067
    },
    "country": "PL",
    "population": 1000000,
    "timezone": 7200,
    "sunrise": 1650511563,
    "sunset": 1650562980
    }
    };
export let inputValue = null;
export let coordinates = {
    lat: 52.2319581,
    lon: 21.0067249,
}

export function getCityWeather(inputValue) {
  getCoordinates(inputValue)
    .then(response => {
      for (const city of response.data) {
        coordinates.lat = city.lat;
        coordinates.lon = city.lon;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=86882c431a5c1fa03f48939e3b313043`,
          )
          .then(weatherData => {
            cityData = weatherData.data;
            return cityData;
          });
      }
    })
    .catch(error => {
      return error;
    });
}

function getCoordinates(inputValue) {
  return axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=86882c431a5c1fa03f48939e3b313043`,
  );
}

export async function getDefaultCityData() {
  await axios
    .get(
      'https://api.openweathermap.org/data/2.5/forecast?lat=52.2319581&lon=21.0067249&units=metric&appid=86882c431a5c1fa03f48939e3b313043',
    )
    .then(response => {
      cityData = response.data;
      return cityData;
    })
    .catch(error => {
      return error;
    });
}