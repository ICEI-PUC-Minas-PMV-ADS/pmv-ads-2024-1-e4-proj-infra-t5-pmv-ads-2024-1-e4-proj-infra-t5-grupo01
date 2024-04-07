import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Stock = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        loadProducts();
    }, []);

    const loadProducts = async () =>{
        const result = await axios.get("http://localhost:8080/api/products/getAll");
        setProducts(result.data);
        console.log(result.data);
    }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Descrição</th>
                      <th scope="col">Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((products, index)=>(
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{products.name}</td>
                                <td>{products.description}</td>
                                <td>{products.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}


export default Stock;
