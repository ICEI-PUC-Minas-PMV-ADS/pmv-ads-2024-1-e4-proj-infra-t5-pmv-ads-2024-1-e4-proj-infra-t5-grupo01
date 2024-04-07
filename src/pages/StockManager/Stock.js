import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Stock = () => {

    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(()=>{
        loadProducts();
    }, []);

    const loadProducts = async () =>{
        const result = await axios.get("http://localhost:8080/api/products/getAll");
        setProducts(result.data);
        console.log(result.data);
    }

    const deleteProducts = async(name) => {
        try {
        await axios.delete(`http://localhost:8080/api/products/delete/${name}`);
    } catch (error) {
        console.error('Erro ao excluir produto:', error);
    }
    loadProducts();
    }

    const saveProduct = async () => {
        try {
            await axios.post("http://localhost:8080/api/save-products", {
                name,
                description,
                quantity: parseInt(quantity) 
            });
            setName('');
            setDescription('');
            setQuantity('');
            
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }

        loadProducts();
    }

  return (
    <div className='container'>
        <div className='py-4'>
            <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Quantidade"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button onClick={saveProduct}>Adicionar Produto</button>
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
                                <td><button onClick={() => deleteProducts(products.name)}>Delete</button></td>
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
