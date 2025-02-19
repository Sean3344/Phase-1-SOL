// GLOBAL
const baseUrl = "https://api.sunrisesunset.io/json?"
const endUrl = "&date=today"
const sunriseList = document.querySelector('#sunrise-list')
const parksUrl = 'http://localhost:3000/parks'


// FETCH FUNCTIONS
function getAllSunrises(lat, lng, tmz) {
    return fetch(baseUrl + `lat=${lat}&lng=${lng}&timezone=${tmz}` + endUrl)
        .then(response => response.json())
        // .then(renderNationalParks)
}

function getLocationData(url) {
    return fetch('url')
    .then(response => response.json())

}

function getNationalParks(url) {
    return fetch(url)
        .then(response => response.json())
}


// RENDER FUNCTIONS
function renderNationalParks(parksObj) {
    const li = document.createElement('li')
    li.className = "list-li"
    const image = document.createElement('img')
    image.src = parksObj.image
    const nationalPark = document.createElement('h3')
    nationalPark.textContent = parksObj.nationalPark
    const location = document.createElement('h4')
    location.textContent = parksObj.location
    const sunrise = document.createElement('p')
    sunrise.textContent = parksObj.sunrise
    const sunset = document.createElement('p')
    sunset.textContent = parksObj.sunset
    const goldenHour = document.createElement('p')
    goldenHour.textContent = parksObj["golden-hour"]
    const dayLength = document.createElement('p')
    dayLength.textContent = parksObj["day-length"]
    const like = document.createElement('button')
    like.textContent = "Like"
    sunriseList.append(li)
    li.append(image, nationalPark, location, sunrise, sunset, goldenHour, dayLength, like)
}

function iterateParks(parksArray) {
    parksArray.forEach(renderNationalParks)
}

// INITIALIZERS
getNationalParks(parksUrl).then(parksArray => {iterateParks(parksArray)})
// getAllSunrises(37.865101, -119.538330, "PST").then(console.log)

//DOM selecotrs
let formSubmition = document.querySelector('#book-form');
let formTitle = document.querySelector('#form-title');
let formLocation = document.querySelector('#form-location');
let formImage = document.querySelector('#form-imageUrl');
let formBtn = document.querySelector('#submit-form');

formSubmition.addEventListener('submit', (e)=> {
    e.preventDefault()
    let newForm = {
        title : formTitle.value,
        location : formLocation.value,
        image : formImage.value,
    }
    fetch('http://localhost:3000/parks', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        body : JSON.stringify(newForm)
    })
    .then(re => re.json())
    .then(renderNationalParks)
})