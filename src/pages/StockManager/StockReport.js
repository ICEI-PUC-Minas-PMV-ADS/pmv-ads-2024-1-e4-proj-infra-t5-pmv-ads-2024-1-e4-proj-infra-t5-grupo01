import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockReport = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const result = await axios.get("https://blucoffee.azurewebsites.net/api/products/getAll");
            setProducts(result.data);
        } catch (error) {
            alert('Erro ao carregar produtos. Por favor, tente novamente mais tarde.');
        }
    }

    const printPage = () => {
        window.print();
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <h2>Relatório de Produtos</h2>
                <button type="button" className="btn btn-primary btn-sm print-button" onClick={printPage}>
                        Imprimir
                </button>
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

export default StockReport;
