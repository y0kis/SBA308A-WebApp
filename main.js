const API_KEY = 'live_lerCSEIZ0YD5L4XzzaEDq0DvnFImzX4o4mcELQ6Qd7TBCjkbWOm1q1iaY9sEYN8J';
const BASE_API_URL ='https://api.thecatapi.com/v1/images/search';

const catButton1 = document.getElementById('cat-button-1');
const catButton2 = document.getElementById('cat-Button-2');

function getRandomCat() {
    const API_KEY = 'ive_lerCSEIZ0YD5L4XzzaEDq0DvnFImzX4o4mcELQ6Qd7TBCjkbWOm1q1iaY9sEYN8J';
    const url = 'ttps://api.thecatapi.com/v1/images/search';
    return fetct (url)
    .then(response => response.jason())
    .then (data => data.text); 
}

async function getTwoCats() {
    const[cat1, cat2] = await Promise.all ([getRandomCat(), getRandomCat()]);
    catButton1.textContent = cat1;
    catButton2.textContent = cat2;
}

getTwoCats();

