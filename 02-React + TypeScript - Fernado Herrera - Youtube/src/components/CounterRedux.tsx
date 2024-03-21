import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store'
import { decrement, increment, incrementByAmount } from '../store/slices/counter';

export function CounterRedux() {

  const {counter} = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <span>Valor : {counter}</span>
        
        <br/>

        <button 
            className="btn btn-outline-primary mt-2"
            onClick={() => dispatch(increment())}
        >
            +1
        </button>

        <button 
            className="btn btn-outline-primary mt-2 ms-2"
            onClick={() => dispatch(incrementByAmount(2))}
        >
            +2
        </button>

        <button 
            className="btn btn-outline-danger mt-2 ms-2"
            onClick={() => dispatch(decrement())}
        >
            -1
        </button>
    </div>
  )
}