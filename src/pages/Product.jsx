import { useState, useEffect, useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

function Product () {
    // const [ count, setCount ] = useState(0);
    // const [ minus, setMinus ] = useState(100);
    // const value = useRef(1);

    // useEffect(() => {
    //     document.title = `ini diklik sebanyak ${value.current}`
    //     console.log('kepanggil', value);
    // }, [count])
    
//     return (
//         <div class="my-5">
//             <div class="text-center">
//             <Spinner animation="border" role="status">
//             <span className="visually-hidden">Loading...</span>
//             </Spinner>
//             <h1>On Progress</h1>
//             </div>
//         </div>
//     )
// }
const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('https://shoppingapiacme.herokuapp.com/shopping')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    <div>
      <h1>Featured Products</h1>
      <div className='item-container'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt='' />
            <h3>{product.brand}</h3>
            <p>{product.item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;