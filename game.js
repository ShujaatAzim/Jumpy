kaboom()
loadSprite("ghost", "ghost.png");

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
  ]);

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
    go("lose");
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

scene("lose", () => {
  add([
    text("Game Over"),
    pos(center()),
    origin("center"),
  ]);
});
