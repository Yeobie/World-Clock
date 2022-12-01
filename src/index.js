function setTime() {
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("H:mm:ss [<small>]A[</small>]");

  let athensElement = document.querySelector("#athens");
  let athensDateElement = athensElement.querySelector(".date");
  let athensTimeElement = athensElement.querySelector(".time");
  let athensTime = moment().tz("Europe/Athens");

  athensDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
  athensTimeElement.innerHTML = athensTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  let honoluluElement = document.querySelector("#honolulu");
  let honoluluDateElement = honoluluElement.querySelector(".date");
  let honoluluTimeElement = honoluluElement.querySelector(".time");
  let honoluluTime = moment().tz("Pacific/Honolulu");

  honoluluDateElement.innerHTML = honoluluTime.format("MMMM Do YYYY");
  honoluluTimeElement.innerHTML = honoluluTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );
}

setInterval(setTime, 1000);

function updateCity(event) {
  setInterval(function () {
    let selectedTimezone = event.target.value;
    let cityName = selectedTimezone.split("/")[1];
    let cityTime = moment().tz(selectedTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class ="city">
  <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "H:mm:ss"
          )} <small>${cityTime.format("A")}</small></div> </div>`;
  }, 1000);
}

let citySelection = document.querySelector("#city");
citySelection.addEventListener("change", updateCity);
