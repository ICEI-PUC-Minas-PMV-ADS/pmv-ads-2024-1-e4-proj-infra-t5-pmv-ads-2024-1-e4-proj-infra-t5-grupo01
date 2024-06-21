import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns'; 

const SalesReport = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        setLoading(true);
        try {
            const result = await axios.get("https://blucoffee.azurewebsites.net/order-api/order/getAll");
            result.data.sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate));
            setOrders(result.data);
        } catch (error) {
            alert('Erro ao carregar pedidos. Por favor, tente novamente mais tarde.');
        } finally {
            setLoading(false);
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
                            <th scope="col">Data de Criação</th> 
                            <th scope="col">Status</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="text-center">Carregando...</td>
                            </tr>
                        ) : (
                            orders.map((order, index) => (
                                <tr key={order.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{order.menuItem.title}</td>
                                    <td>{order.quantity}</td>
                                    <td>R$ {order.total}</td>
                                    <td>{format(new Date(order.orderDate), 'dd/MM/yyyy HH:mm:ss')}</td> 
                                    <td>{order.status}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesReport;