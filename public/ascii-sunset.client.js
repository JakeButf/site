// public/ascii-sunset.client.js

// Read the frames from the data attribute on this script tag.
const frames = JSON.parse(document.currentScript.getAttribute("data-frames"));
let frameIndex = 0;
const asciiPre = document.getElementById("asciiSunset");

function updateFrame() {
  asciiPre.textContent = frames[frameIndex];
  frameIndex = (frameIndex + 1) % frames.length;
}

updateFrame();
setInterval(updateFrame, 500); // Change frame every 500ms
