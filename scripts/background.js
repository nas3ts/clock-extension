function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  updateIcon(hours, minutes);
}

function updateIcon(hours, minutes) {
  const canvas = document.createElement("canvas")
  canvas.width = 32
  canvas.height = 32
  const ctx = canvas.getContext("2d")

  // Transparent background (no fillRect)
  ctx.clearRect(0, 0, 32, 32)

  const textColor = "white"
  ctx.fillStyle = textColor

  ctx.font = "19px sans-serif" // increased from 10px
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"

  ctx.fillText(String(hours).padStart(2, "0"), 10, 8)
  ctx.fillText(String(minutes).padStart(2, "0"), 18, 26)

  const imageData = ctx.getImageData(0, 0, 32, 32)
  browser.browserAction.setIcon({ imageData })
}


// Update the time every second
setInterval(updateTime, 1000);