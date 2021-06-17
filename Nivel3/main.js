jokes(); //Primera vez que se carga aplicación muestra primer chiste

document.querySelector("#btnGetJoke").addEventListener("click", jokes);

let joke = document.querySelector("#quote");

function jokes() {
  fetch("http://api.icndb.com/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.value);
      joke.innerHTML = data.value.joke;
    });
}
