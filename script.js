const ox = document.querySelector('button[type="button"]');
const apiUrl = "https://api.adviceslip.com/advice";

async function checkWeather() {
  const response = await fetch(apiUrl);
  if (response.status == 404) {
    document.querySelector("#err").style.display = "block";
  } else {
    var data = await response.json();
    document.querySelector("#asdf").innerHTML = `Advice: ${data.slip.advice}`;
    document.querySelector("#adv").innerHTML = `${data.slip.id}`;
    document.querySelector("#err").style.display = "none";
  }
}

ox.addEventListener("click", () => {
  checkWeather();
});
