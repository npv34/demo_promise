// b1 them thu vien http client axios

let axios = require('axios');

// c1 using Promise
function search() {
    return new Promise(((resolve, reject) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=02e3323f29bc461c2346db2fe3989729`)
            .then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
        });
    }));
}


// c2 using Async/Await
async function searchUsingAsync() {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: 'Hanoi',
                appid: '02e3323f29bc461c2346db2fe3989729'
            }
        });
}

searchUsingAsync().then(result => {
    let temp = result.data.main.temp
    let oC = Math.floor(temp - 273);
    let nameCity = result.data.name;
    console.log(nameCity + ' nhiet do = ' + oC)
})
