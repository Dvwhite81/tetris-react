const ROWS = 20;
const COLS = 10;

const getInitialGrid = () =>
  Array.from(Array(ROWS), () => Array(COLS).fill(''));

const getFirstCoords = (piece) => {
  console.log('getFirstCoords piece:', piece);
  const { shape } = piece;
  const coords = [];
  const startX = 0;
  const startY = 4;

  shape.forEach((coord) => {
    const x = coord.x + startX;
    const y = coord.y + startY;
    coords.push([x, y]);
  });
  return coords;
};

export { getFirstCoords, getInitialGrid };
