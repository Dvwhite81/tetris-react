import './Cell.css';

function Cell({ id, coords, currentCoords, currentClass }) {
  const cellClass = isIn(coords, currentCoords)
    ? `cell ${currentClass}`
    : 'cell';
  return <div id={id} className={cellClass} />;
}

const isIn = (sub, arr) => {
  return JSON.stringify(arr).includes(JSON.stringify(sub));
};

export default Cell;
