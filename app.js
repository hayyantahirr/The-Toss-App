const img = document.querySelector(`img`);
const h1 = document.querySelector(`.change-head`);

function toss(user) {
  let random = Math.floor(Math.random() * 2);

  if (random === 1) {
    img.src = `./heads.png`;
  } else {
    img.src = `./Tails.png`;
  }

  if ((user === "head" && random === 1) || (user === "tail" && random === 0)) {
    h1.innerHTML = `Yay !! You have won this Toss`;
  } else {
    h1.innerHTML = `Oops !! Better luck next time `;
  }
}
