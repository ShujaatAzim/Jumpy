// need to figure out how to properly make this reusable in multiple scenes

export const floor = [
  rect(width(), 48),
  pos(0, height() - 48),
  outline(4),
  area(),
  solid(),
  color(127, 200, 255),
]