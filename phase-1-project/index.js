// GLOBAL
const baseUrl = "https://api.sunrisesunset.io/json?"
const sunriseList = document.querySelector('#sunrise-list')
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// FETCH FUNCTIONS
function getAllSunrises(lat, lng) {
    return fetch(baseUrl + `lat=${lat}&lng=${lng}`)
        .then(response => response.json())
        .then(console.log)
}

// RENDER FUNCTIONS
function addLikeBtn() {
    const btn = sunriseList.createElement('btn')
    btn.textContent = 'Like'
}