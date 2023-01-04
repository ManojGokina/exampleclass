import { Button } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter, decreaseCount } from '../redux/actions/counterActions';


const Home = () => {
   const dispatch = useDispatch();
   const state = useSelector((state) => state.counter.count);  // initial value in reducer
   console.log(state);  

  return (
    <div style={{ width: '50%', margin: 'auto'}}>
      <h1>{state}</h1>
      <Button variant="contained" onClick={() => dispatch(increaseCounter())}>Increse</Button>
      <Button variant="contained" onClick={() => dispatch(decreaseCount())} style={{ marginLeft: '30px'}}>Decrease</Button>
    </div>
  )
}

export default Home
