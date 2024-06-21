import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Stock = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = async (id) => {
        setShow(true);
        await loadProduct(id);
    }

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

    const deleteProducts = async (id) => {
        try {
            await axios.delete(`https://blucoffee.azurewebsites.net/api/products/delete/${id}`);
            loadProducts();
            alert('Produto excluído com sucesso.');
        } catch (error) {
            alert('Erro ao excluir produto. Por favor, tente novamente mais tarde.');
        }
    }

    const saveProduct = async () => {
        try {
            await axios.post("https://blucoffee.azurewebsites.net/api/save-products", {
                name,
                description,
                quantity: parseInt(quantity)
            });
            setName('');
            setDescription('');
            setQuantity('');
            loadProducts();
            alert('Produto adicionado com sucesso.');
        } catch (error) {
            alert('Erro ao adicionar produto. Por favor, verifique os dados e tente novamente.');
        }
    }

    const loadProduct = async (id) => {
        try {
            const result = await axios.get(`https://blucoffee.azurewebsites.net/api/products/${id}`);
            setProduct(result.data);
        } catch (error) {
            alert('Erro ao carregar detalhes do produto. Por favor, tente novamente mais tarde.');
        }
    }

    const editProduct = async () => {
        try {
            await axios.put("https://blucoffee.azurewebsites.net/api/update-product", {
                id: product.id,
                name: product.name,
                description: product.description,
                quantity: parseInt(product.quantity)
            });
            setName('');
            setDescription('');
            setQuantity('');
            loadProducts();
            alert('Produto editado com sucesso.');
        } catch (error) {
            alert('Erro ao editar produto. Por favor, verifique os dados e tente novamente.');
        }
    }

    const goToStockReport = () => {
        navigate('/stock-report');
    }

    return (
        <div className='container'>
            <div className='py-4'>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Produto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type='text' placeholder='Nome do produto' value={product.name || ''} onChange={(e) => setProduct({ ...product, name: e.target.value })}></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type='text' placeholder='Descrição do produto' value={product.description || ''} onChange={(e) => setProduct({ ...product, description: e.target.value })}></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Quantidade</Form.Label>
                                <Form.Control type='text' placeholder='Quantidade do produto' value={product.quantity || ''} onChange={(e) => setProduct({ ...product, quantity: e.target.value })}></Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={editProduct}>
                            Salvar Alterações
                        </Button>
                    </Modal.Footer>
                </Modal>    

                <h2>Estoque de Produtos</h2>        

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
                <button type="button" className="btn btn-success btn-sm" onClick={saveProduct}>Adicionar Item</button>
                <button type="button" className="btn btn-primary btn-sm" onClick={goToStockReport}>Relatório</button>
                <table className="table border shadow">
                    <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nome</th>
                          <th scope="col">Descrição</th>
                          <th scope="col">Quantidade</th>
                          <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr key={product.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => handleShow(product.id)}>Editar</button>
                                        <button type="button" className="btn btn-danger" onClick={() => deleteProducts(product.id)}>Excluir</button>
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

export default Stock;