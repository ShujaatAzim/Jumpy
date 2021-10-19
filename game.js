kaboom({
  global: true
});

loadSprite("ghost", "ghost.png")

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

add([
  rect(48, 64),
  area(),
  outline(4),
  pos(width(), height() - 48),
  origin("botleft"),
  color(255, 180, 255),
  move(LEFT, 240),
  "tree"
]);

keyPress("space", () => {
  if (ghost.grounded()) ghost.jump();
});

ghost.collides("tree", () => {
  addKaboom(ghost.pos);
  shake();
});
