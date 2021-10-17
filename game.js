kaboom({
  global: true
});

loadSprite("ghost", "ghost.png")

const ghost = add([
    sprite("ghost"),
    pos(80, 40),
    area(),
    body(),
])

keyPress("space", () => {
  ghost.jump()
})

add([
    rect(width(), 48),
    pos(0, height() - 48),
    outline(4),
    area(),
    solid(),
    color(127, 200, 255),
])