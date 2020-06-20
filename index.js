function draw() {
  var img = new Image();

  for (x = 0; x < 400; x += 20) {
    for (y = 0; y < 200; y += 20) {
      ctx.strokeRect(x, y, 15, 15);
    }
  }

  img.src = "/image/grill.png";

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };
}
