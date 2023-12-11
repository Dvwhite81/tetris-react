import NextPiece from '../NextPiece/NextPiece';
import './Next.css';

function Next({ nextPieces }) {
  const pieces = [];
  nextPieces.forEach((piece, index) => {
    const pieceComponent = <NextPiece key={index} piece={piece} />;
    pieces.push(pieceComponent);
  });

  return (
    <div id="next-container" className="outer">
      <div id="next-inner" className="inner">
        <div className="content-container">
          <div id="next-label" className="label">
            NEXT
          </div>
          <div id="next" className="content black">
            {pieces}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Next;
