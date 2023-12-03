function displayPoem(response) {
    console.log(response.data.answer);

    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      display: 20,
    });
}


function generatePoem(event){
    event.preventDefault();
    let apiKey = "7eo5ded69c3ffa8b7taebbf0b44b9fb2";
    let context = "Your AI Assistant please provide precise and clear answers";
    let prompt = "Generate nice poems";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "love poem";
}


let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);