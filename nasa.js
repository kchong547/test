//reference: https://stackoverflow.com/questions/62776866/how-to-show-image-from-api-in-javascript
//reference: https://stackoverflow.com/questions/65451282/how-to-set-an-h1-value-from-an-api-response
//https://stackoverflow.com/questions/68224223/fetch-api-with-x-api-key-header
/*
function loadDoc()
{
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      var data = JSON.parse(this.responseText);
      document.getElementById("nasa_date").innerHTML = data.date;
      document.getElementById("nasa_image").src = data.hdurl;
      document.getElementById("nasa_desc").innerHTML = data.explanation;
    }
  };

  xhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", true);
  xhttp.send();
}

var request = new XMLHttpRequest();
request.open("GET", "https://api.nasa.gov/planetary/apod", true);
request.setRequestHeader("api_key", DEMO_KEY);
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      document.getElementById("nasa_date").innerHTML = data.date;
      document.getElementById("nasa_image").src = data.hdurl;
      document.getElementById("nasa_desc").innerHTML = data.explanation;
    }
};
request.send();
*/

var myHeaders = new Headers();
myHeaders.append("x-api-key", "DEMO_KEY");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.nasa.gov/planetary/apod", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


/*const url = 'https://api.nasa.gov/planetary/apod';
var myHeaders = new Headers();
    myHeaders.append("X-API-KEY", "DEMO_KEY");

var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

fetch(url)
      .then(response => {
      return response.json();
      })
      .then(nasa => {
        //document.getElementById('nasa_date').innerHTML = nasa.name;
        document.getElementById("nasa_date").innerHTML = data.date;
        document.getElementById("nasa_image").src = data.hdurl;
        document.getElementById("nasa_desc").innerHTML = data.explanation;
      }).catch(e => console.log(e))*/
/*
var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
*/
