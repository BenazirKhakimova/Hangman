const word = document.getElementById("word");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const btnStart = document.getElementById("btn-start");
const figureParts = document.querySelectorAll(".figure-part");
const displayDescription = document.querySelector(".display-description");

const words = [
  "дельфин",
  "роза",
  "мороженое",
  "вода",
  "тхэквондо",
  "ягода",
  "путешественник",
];
const description = [
  "Плавает в воде",
  "Цеток символизирующий молчание",
  "То, что любят дети и взрослые",
  "Без него не будет жизни",
  "Один из видов спорта",
  "Сладкое, но полезное",
  "Путник, странник, приезжий",
];
let currentWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

//Show hidden word

btnStart.addEventListener("click", function getStarted() {
  function displayWord() {
    word.innerHTML = `
    ${currentWord
      .split("")
      .map(
        (letter) => `
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ""}
        </span>
        `
      )
      .join("")}
    `;

    if (currentWord === "дельфин") {
      displayDescription.innerText = `${description[0]}`;
    } else if (currentWord === "роза") {
      displayDescription.innerText = `${description[1]}`;
    } else if (currentWord === "мороженное") {
      displayDescription.innerText = `${description[2]}`;
    } else if (currentWord === "вода") {
      displayDescription.innerText = `${description[3]}`;
    } else if (currentWord === "тхэквондо") {
      displayDescription.innerText = `${description[4]}`;
    } else if (currentWord === "ягода") {
      displayDescription.innerText = `${description[5]}`;
    } else if (currentWord === "путешественник") {
      let dd = displayDescription.innerText === `${description[6]}`;
      console.log(dd);
    } else {
      return currentWord;
    }

    const innerWord = word.innerText.replace(/\n/g, "");

    if (innerWord === currentWord) {
      finalMessage.innerText = "Поздравляю! Ты выиграл! 🥳";
      popup.style.display = "flex";
    }
  }

  // Update the wrong letters
  function updateWrongLetter() {
    figureParts.forEach((part, index) => {
      const errors = wrongLetters.length;

      if (index < errors) {
        part.style.display = "block";
      } else {
        part.style.display = "none";
      }
    });

    //Check if lost
    if (wrongLetters.length === figureParts.length) {
      finalMessage.innerText = "К сожалению ты проиграл. 😕";
      popup.style.display = "flex";
    }

    if (currentWord === "дельфин") {
      displayDescription.innerText = `${description[0]}`;
    } else if (currentWord === "роза") {
      displayDescription.innerText = `${description[1]}`;
    } else if (currentWord === "мороженное") {
      displayDescription.innerText = `${description[2]}`;
    } else if (currentWord === "вода") {
      displayDescription.innerText = `${description[3]}`;
    } else if (currentWord === "тхэквондо") {
      displayDescription.innerText = `${description[4]}`;
    } else if (currentWord === "ягода") {
      displayDescription.innerText = `${description[5]}`;
    } else if (currentWord === "путешественник") {
      displayDescription.innerText === `${description[6]}`;
    } else {
      return currentWord === description[index];
    }
  }

  //Show notification
  function showNotification() {
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);
  }

  //Keydown letter press
  window.addEventListener("keydown", (e) => {
    if (e.keyCode >= 8 && e.keyCode <= 222) {
      const letter = e.key;

      if (currentWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLetter();
        } else {
          showNotification();
        }
      }
    }
  });

  //Restart game and play again
  playAgainBtn.addEventListener("click", () => {
    //Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    currentWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLetter();

    popup.style.display = "none";
  });
  displayWord();
  btnStart.style.display = "none";
});

// getStarted();
