import Row from '../Row/Row';
import './Board.css';

function Board({ grid, currentPiece }) {
  const currentCoords = currentPiece.coords;
  const currentClass = currentPiece.squareClass;
  console.log('Board currentCoords:', currentCoords);
  return (
    <div id="board-container" className="outer">
      <div className="inner">
        <div id="board" className="black">
          {grid.map((row, x) => (
            <Row
              key={x}
              row={row}
              x={x}
              currentCoords={currentCoords}
              currentClass={currentClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
