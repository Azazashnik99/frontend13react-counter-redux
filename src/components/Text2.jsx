import { useDispatch, useSelector } from "react-redux";

function Text2() {

const counter = useSelector(state => state)

const dispatch = useDispatch()


  const plus = () => {
    dispatch({
      type:'PLUS', 
    })
  }
  const minus = () => {
    dispatch({
      type:'MINUS', 
    })
  }
  const reset = () =>{
    dispatch({
      type:'RESET', 
    })
  }

    return (
      <div className="container">
        <div>
          {counter}
        </div>
        <div>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    );
  }
  
  export default Text2;