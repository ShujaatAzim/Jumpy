kaboom()
loadSprite("ghost", "./Sprites/ghost.png");

scene("game", () => {
  const ghost = add([
    sprite("ghost"),
    pos(80, 40),
    area(),
    body(),
  ]);

  add([
    rect(width(), 48),
    pos(0, height() - 48),
    outline(4),
    area(),
    solid(),
    color(127, 200, 255),
  ])

  loop(1, () => {
    add([
      rect(48, rand(24, 64)),
      area(),
      outline(4),
      pos(width(), height() - 48),
      origin("botleft"),
      color(255, 180, 255),
      move(LEFT, 240),
      "tree"
    ]);

  });

  keyPress("space", () => {
    if (ghost.grounded()) ghost.jump();
  });

  ghost.collides("tree", () => {
    addKaboom(ghost.pos);
    shake();
    go("lose", score);
  });

  let score = 0;
  const scoreLabel = add([
    text(score),
    pos(24, 24)
  ]);

  action(() => {
    score++;
    scoreLabel.text = score;
  });

});
go("game")

scene("lose", (score) => {
  add([
    text("Game Over"),
    pos(width() / 2, height() / 2 - 80),
    origin("center"),
  ]);

  add([
    text(`Score: ${score}`),
    pos(width() /2, height() / 2 + 40),
    origin("center")
  ]);

  add([
    text("Press Space Bar to Play Again!"),
    pos(width() /2, height() / 2  + 150),
    origin("center"),
    scale(0.5)
  ])

  keyPress("space", () => {
    go("game")
  });
});
