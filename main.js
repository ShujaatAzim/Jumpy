kaboom()
loadSprite("ghost", "./Sprites/ghost.png");

scene("title", () => {
  add([
    text("Jumpy!"),
    pos(width() / 2, height() / 4),
    origin("center")
  ])

  add([
    text("By Shujaat Azim"),
    pos(width() / 2, height() / 3),
    origin("center"),
    scale(0.5)
  ])
  
  add([
    sprite("ghost"),
    pos(width() / 2, height() / 2 - 50),
    origin("center"),
    scale(2)
  ])

  add([
    text("Press Space to Start!"),
    pos(width() / 2, height() / 2 + 50),
    origin("center"),
    scale(0.5)
  ])


  keyPress("space", () => {
    go("game")
  })
})

go("title")

scene("game", () => {
  const ghost = add([
    sprite("ghost"),
    pos(80, 500),
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

  add([
    text("Jumpy!"),
    pos(width() / 2, height() / 4),
    origin("center")
  ])

  add([
    text("By Shujaat Azim"),
    pos(width() / 2, height() / 3),
    origin("center"),
    scale(0.5)
  ])

  add([
    text("Press Esc to End"),
    pos(width() / 2, height() / 2 - 50),
    origin("center"),
    scale(0.5)
  ])

  const spawnTree = () => {
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
    wait(rand(1.1, 1.7), () => {
      spawnTree();
    });
  }
  spawnTree();

  keyPress("space", () => {
    if (ghost.grounded()) ghost.jump();
  });

  keyPress("escape", () => {
    go("lose", score)
  })

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
    text("Press Space Bar to Play Again or Esc to Quit"),
    pos(width() /2, height() / 2  + 150),
    origin("center"),
    scale(0.5)
  ])

  keyPress("space", () => {
    go("game")
  });

  keyPress("escape", () => {
    go("title")
  });
});
