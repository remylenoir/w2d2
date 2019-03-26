class Game {
  constructor() {
    this.dots = [];
    this.time = 0;

    // 1. add Event Listener that calls addDot
    this.timeInterval = setInterval(
      function() {
        this.time++;
        document.querySelector("#time").innerHTML = this.time;
      }.bind(this),
      1000
    );

    this.dotInterval = setInterval(
      function() {
        this.addDot(Math.floor(Math.random() * 590), Math.floor(Math.random() * 590));
      }.bind(this),
      1500
    );
  }

  addDot(x, y) {
    // 2. add a new dot to this.dots
    const newDot = new Dot(x, y);
    this.dots.push(newDot);
    this.displayDotCount();
  }

  displayDotCount() {
    document.querySelector("#dots").innerHTML = this.dots.length;
    if (this.dots.length > 10) this.gameOver();
  }

  gameOver() {
    clearInterval(this.dotInterval);
    clearInterval(this.timeInterval);

    document.querySelector("#game").innerHTML = "<h1>You lost!</h1>";
  }
}
const game = new Game();

class Dot {
  constructor(x, y, size = 20, color = "#942942") {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;

    const domEl = document.createElement("div");
    this.reference = domEl;

    domEl.style.position = "absolute";
    domEl.style.width = `${size}px`;
    domEl.style.height = `${size}px`;
    domEl.style.backgroundColor = `${color}`;
    domEl.style.borderRadius = `${size / 2}px`;
    domEl.style.left = `${x - size / 2}px`;
    domEl.style.top = `${y - size / 2}px`;

    // add a click listener for the domEl
    // remove that dot from the page
    domEl.addEventListener("click", evt => {
      this.reference.remove();
      game.dots = game.dots.filter(!(el.x === this.x && el.y === this.y)); // filter out the removed dot

      game.displayDotCount();
    });

    document.querySelector("#game").appendChild(domEl);
  }
}
