import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SalesReport = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const result = await axios.get("http://localhost:8080/order-api/order/getAll");
            setOrders(result.data);
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
                <h2>Relatório de Vendas</h2>
                <button type="button" className="btn btn-primary btn-sm print-button" onClick={printPage}>
                        Imprimir
                </button>
                <table className="table border shadow">
                    <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Produto</th>
                          <th scope="col">Quantidade</th>
                          <th scope="col">Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((orders, index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{orders.menuItem.title}</td>
                                    <td>{orders.quantity}</td>
                                    <td>R$ {orders.total}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesReport;
