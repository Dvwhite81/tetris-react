import './Score.css';

function Score({ score, level, lines }) {
  return (
    <div id="score-container" className="outer">
      <div id="score-inner" className="inner">
        <div className="content-container">
          <div id="score-label" className="label">
            SCORE
          </div>
          <div id="score" className="content black">
            {score}
          </div>
        </div>
        <div className="content-container">
          <div id="level-label" className="label">
            LEVEL
          </div>
          <div id="level" className="content black">
            {level}
          </div>
        </div>
        <div className="content-container">
          <div id="lines-label" className="label">
            LINES
          </div>
          <div id="lines" className="content black">
            {lines}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Score;
