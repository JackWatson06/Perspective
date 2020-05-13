// We will use `strict mode`, which helps us by having the browser catch many common JS mistakes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
"use strict";
const app = new PIXI.Application(2560, 1440);
document.body.appendChild(app.view);

// Constants
const sceneWidth = app.view.width;
const sceneHeight = app.view.height;

// Stage
let stage;


function setup() {
    stage = app.stage;

    // Load textures

    app.ticker.add(gameLoop);

}

let timeStep = 1 / 60;
let elapsedTime = 0;

function gameLoop() {

    if(paused) return;

    let dt = 1 / app.ticker.FPS;
    if (dt > 1 / 12) dt = 1 / 12;

    elapsedTime += 1 / 60;

    


}

window.onload = setup;