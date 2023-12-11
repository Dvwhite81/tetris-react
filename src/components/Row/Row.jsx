import Cell from '../Cell/Cell';
import './Row.css';

function Row({ row, x, currentCoords, currentClass }) {
  console.log('Row x:', x);
  return (
    <div id={`${x}-row`} className="row">
      {row.map((cell, y) => {
        const coords = [x, y];
        return (
          <Cell
            key={coords}
            cell={cell}
            id={`cell-${coords}`}
            coords={coords}
            currentCoords={currentCoords}
            currentClass={currentClass}
          />
        );
      })}
    </div>
  );
}

export default Row;
