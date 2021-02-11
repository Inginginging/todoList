const weather = document.querySelector(".js-weather");

const API_key ="845cc270acaa973c468d09c17fb347c9";
const COORDS = "coords"

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`)//string화 된 lat값과 loㅜ값은 받을 수 없음
    .then(function (response) {
        return response.json();
    })
    .then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp}˚C @${place}`;
        
    })
} //자바스크립트 강의를 더 보고 와야 이해될듯

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));    
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;  //geolocation.getCurrentPosition에서 반환하는 객체,
    const longitude = position.coords.longitude; //GeolocationPosition의 속성에 coords등이 있음.
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    alert('cant access');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords ===null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);// local스토리지에 저장된 string화된 coords를 다시 객체화.
        getWeather(parsedCoords.latitude, parsedCoords.longitude);//API에선 string화된 lat값과 lon값을 받을수 없으므로.
    }
}

function init(){
    loadCoords();
}

init();