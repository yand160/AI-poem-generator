

function displayPoem(response) {
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
    let context = "Your a poem expert and love to write short poems. Your mission is to generate a 5 line poems in basic HTML and separate each line with a <br/>.  please follow the user instructions";
    let prompt = `User instructions: Generate nice poems ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating"> ⏳ Generating a poem about ${instructionsInput.value}</div>`;

    axios.get(apiURL).then(displayPoem);
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);