import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({});
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = async (document) => {
        await loadOrder(document);
        setShow(true);
    }

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const result = await axios.get("http://localhost:8080/order-api/order/getAll");
            setOrders(result.data);
        } catch (error) {
            alert('Erro ao carregar pedidos. Por favor, tente novamente mais tarde.');
        }
    }

    const deleteOrder = async (document) => {
        try {
            await axios.delete(`http://localhost:8080/order-api/order/delete/${document}`);
            loadOrders();
            alert('Pedido excluído com sucesso.');
        } catch (error) {
            alert('Erro ao excluir pedido. Por favor, tente novamente mais tarde.');
        }
    }

    const loadOrder = async (document) => {
        try {
            const result = await axios.get(`http://localhost:8080/order-api/order/${document}`);
            setOrder(result.data);
        } catch (error) {
            alert('Erro ao carregar detalhes do pedido. Por favor, tente novamente mais tarde.');
        }
    }

    const editOrder = async () => {
        try {
            await axios.put(`http://localhost:8080/order-api/update-order/${order.id}`, {
                ...order,
                quantity: parseInt(order.quantity),
            });
            setShow(false);
            loadOrders();
            alert('Pedido editado com sucesso.');
        } catch (error) {
            alert('Erro ao editar pedido. Por favor, verifique os dados e tente novamente.');
        }
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Pedido</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Label>Item</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Item'
                                    value={order.menuItem ? order.menuItem.title : ''}
                                    onChange={(e) => setOrder({ ...order, menuItem: { ...order.menuItem, title: e.target.value } })}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Quantidade</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Quantidade'
                                    value={order.quantity || ''}
                                    onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    value={order.status || ''}
                                    onChange={(e) => setOrder({ ...order, status: e.target.value })}
                                >
                                    <option value="Pendente">Pendente</option>
                                    <option value="Em preparo">Em preparo</option>
                                    <option value="Pronto para Retirada">Pronto para Retirada</option>
                                    <option value="Cancelado">Cancelado</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={editOrder}>
                            Salvar Alterações
                        </Button>
                    </Modal.Footer>
                </Modal>

                <h2>Pedidos</h2>

                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Status</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{order.menuItem.title}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.status}</td>
                                    <td>{order.total}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={() => deleteOrder(order.id)}>Excluir</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => handleShow(order.id)}>Editar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders;
