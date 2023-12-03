

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
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "7eo5ded69c3ffa8b7taebbf0b44b9fb2";
    let context = "Your a poem expert please provide precise and clear answers";
    let prompt = `User instructions: Generate nice poems $(instructionsInput.value)`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating"> ⏳ Generating a poem about ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(displayPoem);
}


let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);