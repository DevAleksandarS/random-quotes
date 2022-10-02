import { useReducer, useEffect } from "react";
import "./css/style.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        quote: action.quote,
        author: action.author,
        tags: action.tags,
      };
    default:
      return;
  }
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f07331321fmshd5412fa13f915dap11e0aajsn701c098c1ef7",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    quote: "",
    author: "",
    tags: [],
  });

  const fetchFunc = () => {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
      .then((response) => response.json())
      .then((response) =>
        dispatch({
          type: "INPUT",
          quote: response.content,
          author: response.originator.name,
          tags: response.tags,
        })
      )
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchFunc();
  }, []);

  return (
    <div className="main-container">
      <div className="container">
        <p className="quote">"{state.quote}"</p>
        <p className="author">
          Author: <b>{state.author}</b>
        </p>
        <div className="line"></div>
        <div className="tags">
          {state.tags.map((tag) => {
            return <p className="buble-tag">{tag}</p>;
          })}
        </div>
      </div>

      <button onClick={() => fetchFunc()} className="btn-action">
        Generate new qoute
      </button>
    </div>
  );
}

export default App;
