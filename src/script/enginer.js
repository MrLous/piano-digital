const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".key-check input");

let mapedKey = [];
let audio = new Audio("src/tunes/a.wav");


// função que toca o som
const playTune = (key) => {
    // recebe o audio dea cordo com o key
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    //altera o stylo para silular a tecla precionada
    const clickKey = document.querySelector(`[data-key="${key}"]`);
    clickKey.classList.add("active");
    setTimeout(() => {
        clickKey.classList.remove("active");
    }, 150)
};

// evento para qnd for clicado na tecla
pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    //add as key para verificação posterior
    mapedKey.push(key.dataset.key);
});

// evento para leiturar do teclado
document.addEventListener("keydown", (e) => { 
    //verifica o que foi digitado é valido para som.
    if(mapedKey.includes(e.key)){
        playTune(e.key);
    }
});


// controle de volume
const handleVolume = (e) => {
    audio.volume = e.target.value;
}

volumeSlider.addEventListener("input", handleVolume);


//controle de lengenda
const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
}

keysCheck.addEventListener("click", showHideKeys);
