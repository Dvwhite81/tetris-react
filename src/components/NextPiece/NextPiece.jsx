import './NextPiece.css';

function NextPiece({ piece }) {
  const { name, shape, height, width } = piece;
  const piececlass = `${name}-piece`;
  const styles = {
    backgroundSize: 'contain',
    height: `calc(var(--cell-size) * ${piece.height})`,
    width: `calc(var(--cell-size) * ${piece.width})`,
  };

  return (
    <div
      className={`${piececlass} next-piece`}
      piececlass={piececlass}
      name={name}
      shape={shape}
      height={height}
      width={width}
      style={styles}
    />
  );
}

export default NextPiece;
