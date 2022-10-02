import "./css/style.css";

function App() {
  return (
    <div className="main-container">
      <div className="container">
        <p className="quote">
          "Efforts will lie, but they will not be in vain. Common variation:
          Effort may lie, but will never be in vain."
        </p>
        <p className="author">
          Author: <b>Yuzuru Hanyu</b>
        </p>
        <div className="line"></div>
        <div className="tags">
          <p className="buble-tag">Lie</p>
          <p className="buble-tag">Effort</p>
          <p className="buble-tag">common</p>
          <p className="buble-tag">variation</p>
        </div>
      </div>

      <button className="btn-action">Generate new qoute</button>
    </div>
  );
}

export default App;
