import {useSelector,useDispatch} from "react-redux";
import {add} from './store/Action';
import { sub } from "./store/Action";
import {useState} from 'react';

function Test(){

const Math =useSelector (state => state.count)
const dispatch = useDispatch()


  const [pay, setPay] = useState();

  const handelPayment = (e) => {
    setPay(e.target.value);
  };
return (
  <>
    <div>
      <input type="text" onChange={handelPayment}/>
      <button onClick={() => dispatch(add(+pay))}>Deposite +</button>
      <button onClick={() => dispatch(sub(+pay))}>Withdraw -</button>
      {Math}
    </div>
  </>
);
}export default Test;