var myHeaders = new Headers();
var yeni_key ="euDc6pu99L4Mduwf4XgL4QRO1B8nvftu"
myHeaders.append("apikey", "I4TMvgGVSiSKtkks0X4ydqVGG5DdJvx1");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to=TRY&from=USD&amount=1", requestOptions)
.then(response => response.json())
.then(json => json.result)
.then(result=>document.getElementById("Dolar").innerHTML=result )
.catch(error => console.log('error', error));
  fetch("https://api.apilayer.com/exchangerates_data/convert?to=TRY&from=EUR&amount=1", requestOptions)
  .then(response => response.json())
  .then(json => json.result)
  .then(result=>document.getElementById("Euro").innerHTML=result )
  .catch(error => console.log('error', error));
  fetch("https://api.apilayer.com/exchangerates_data/convert?to=TRY&from=JPY&amount=1", requestOptions)
  .then(response => response.json())
  .then(json => json.result)
  .then(result=>document.getElementById("Yen").innerHTML=result )
  .catch(error => console.log('error', error));
  fetch("https://api.apilayer.com/exchangerates_data/convert?to=TRY&from=GBP&amount=1", requestOptions)
  .then(response => response.json())
  .then(json => json.result)
  .then(result=>document.getElementById("Sterlin").innerHTML=result )
  .catch(error => console.log('error', error));
