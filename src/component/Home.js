import { Button } from '@mui/material';
import React , {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter, decreaseCount } from '../redux/actions/counterActions';
import { setProduct } from '../redux/actions/productAction';


const Home = () => {
   const dispatch = useDispatch();
  //  const state = useSelector((state) => state.counter.count); 
   const products  = useSelector((state) => state.products.products);
   console.log(products);
  // initial value in reducer
 
    const fetchProducts = async() => {
      const response = await axios.get('https://fakestoreapi.com/products').catch((err) =>  console.log(err));
      dispatch(setProduct(response.data))
    }

    useEffect(() => {
      fetchProducts();
    }, [])

    // ternary operator
  return (
    <div style={{ width: '50%', margin: 'auto'}}>
      {products?.map((d) => (
        <div>
           {d?.title}
          </div>
      ))}

      <p>Value cannot be less than zero </p>
    </div>
  )
}

export default Home
