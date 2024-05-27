import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const Menu = () => { 

  const [menu, setMenu] = useState([]);
  const [menuItem, setMenuItem] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [show, setShow] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);

  useEffect(() => {
        loadMenu();
    }, []);

    const loadMenu = async () => {
        try {
            const result = await axios.get("http://localhost:8080/menu-api/menu/getAll");
            setMenu(result.data);
        } catch (error) {
            alert('Erro ao carregar o Menu. Por favor, tente novamente mais tarde.');
        }
    }

    const deleteMenuItem = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/menu-api/menu/delete/${id}`);
            loadMenu();
            alert('Produto excluído com sucesso.');
        } catch (error) {
            alert('Erro ao excluir produto. Por favor, tente novamente mais tarde.');
        }
    }

    const saveMenuItem = async () => {
        try {
            await axios.post("http://localhost:8080/menu-api/saveMenu", {
                title: menuItem.title,
                description: menuItem.description,
                price: menuItem.price,
                image: menuItem.image,
            });
            setTitle('');
            setDescription('');
            setPrice('');
            setImage('');
            loadMenu();
            alert('Produto adicionado com sucesso.');
        } catch (error) {
            alert('Erro ao adicionar produto. Por favor, verifique os dados e tente novamente.');
        }
    }

    const loadMenuItem = async (title) => {
        try {
            const result = await axios.get(`http://localhost:8080/menu-api/menu/${title}`);
            setMenuItem(result.data);
        } catch (error) {
            alert('Erro ao carregar detalhes do produto. Por favor, tente novamente mais tarde.');
        }
    }

    const editMenuItem = async () => {
        try {
            await axios.put("http://localhost:8080/menu-api/update-menu", {
                title: menuItem.title,
                description: menuItem.description,
                price: menuItem.price,
                image: menuItem.image,
            });
            setTitle('');
            setDescription('');
            setPrice('');
            setImage('');
            loadMenu();
            alert('Produto editado com sucesso.');
        } catch (error) {
            alert('Erro ao editar produto. Por favor, verifique os dados e tente novamente.');
        }

        loadMenu();
    }

    const handleShowModalAddItem = () => {
      setMenuItem('');
      setShowAddItem(true);
    }
    const handleCloseModalAddItem = () => setShowAddItem(false);

    const handleShowModalEditItem = async (title) => {
        setShow(true);
        await loadMenuItem(title);
    }
    const handleCloseModalEditItem = () => setShow(false);

  return (
    <div className='container'>
      <div className='py-4'>

        <h2>Cardápio</h2> 
        <br/>

        <Modal show={showAddItem} onHide={handleCloseModalAddItem}>
          <Modal.Header closeButton>
              <Modal.Title>Adicionar Item ao Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                  <Form.Group className='mb-3'>
                      <Form.Label>Titulo</Form.Label>
                      <Form.Control type='text' placeholder='Titulo do item' value={menuItem.title} onChange={(e) => setMenuItem({ ...menuItem, title: e.target.value })}></Form.Control>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control type='text' placeholder='Descrição do item' value={menuItem.description} onChange={(e) => setMenuItem({ ...menuItem, description: e.target.value })}></Form.Control>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                      <Form.Label>Imagem</Form.Label>
                      <Form.Control type='text' placeholder='Valor do item' value={menuItem.image} onChange={(e) => setMenuItem({ ...menuItem, image: e.target.value })}></Form.Control>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                      <Form.Label>Preço</Form.Label>
                      <Form.Control type='text' placeholder='Valor do item' value={menuItem.price} onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })}></Form.Control>
                  </Form.Group>
              </Form>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModalAddItem}>
              Fechar
              </Button>
              <Button variant="primary" onClick={saveMenuItem}>
              Salvar Alterações
              </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show} onHide={handleCloseModalEditItem}>
          <Modal.Header closeButton>
              <Modal.Title>Editar Item do Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                  <Form.Group className='mb-3'>
                      <Form.Label>Titulo</Form.Label>
                      <Form.Control type='text' placeholder='Titulo do item' value={menuItem.title} onChange={(e) => setMenuItem({ ...menuItem, title: e.target.value })}></Form.Control>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control type='text' placeholder='Descrição do item' value={menuItem.description} onChange={(e) => setMenuItem({ ...menuItem, description: e.target.value })}></Form.Control>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                      <Form.Label>Imagem</Form.Label>
                      <Form.Control type='text' placeholder='Valor do item' value={menuItem.image} onChange={(e) => setMenuItem({ ...menuItem, image: e.target.value })}></Form.Control>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                      <Form.Label>Preço</Form.Label>
                      <Form.Control type='text' placeholder='Valor do item' value={menuItem.price} onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })}></Form.Control>
                  </Form.Group>
              </Form>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModalEditItem}>
              Fechar
              </Button>
              <Button variant="primary" onClick={editMenuItem}>
              Salvar Alterações
              </Button>
          </Modal.Footer>
        </Modal>

        <button type="button" class="btn btn-success btn-sm" 
        onClick={handleShowModalAddItem}>Adicionar Item</button>

        <br/>

        {menu.map((menu) => (
          <>
          <h3>{menu.title}</h3>
          <img src={menu.image} width="500" height="500"/>
          <p>{menu.description}</p>
          <p>Valor: R$ {menu.price}</p>
          <button type="button" class="btn btn-primary" onClick={() => handleShowModalEditItem(menu.title)}>Editar</button>
          <button type="button" class="btn btn-danger" onClick={() => deleteMenuItem(menu.title)}>Excluir</button>
          </>
        ))}
      </div>

    </div>
  );
};

export default Menu;