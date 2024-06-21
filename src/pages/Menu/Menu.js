import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [menuItem, setMenuItem] = useState({});
  const [show, setShow] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    try {
      const result = await axios.get("https://blucoffee.azurewebsites.net/menu-api/menu/getAll");
      setMenu(result.data);
    } catch (error) {
      alert('Erro ao carregar o Menu. Por favor, tente novamente mais tarde.');
    }
  }

  const deleteMenuItem = async (id) => {
    try {
      await axios.delete(`https://blucoffee.azurewebsites.net/menu-api/menu/delete/${id}`);
      loadMenu();
      alert('Produto excluído com sucesso.');
    } catch (error) {
      alert('Erro ao excluir produto. Por favor, tente novamente mais tarde.');
    }
  }

  const saveMenuItem = async () => {
    try {
      await axios.post("https://blucoffee.azurewebsites.net/menu-api/saveMenu", menuItem);
      setMenuItem({});
      setShowAddItem(false);
      loadMenu();
      alert('Produto adicionado com sucesso.');
    } catch (error) {
      alert('Erro ao adicionar produto. Por favor, verifique os dados e tente novamente.');
    }
  }

  const loadMenuItem = async (id) => {
    try {
      const result = await axios.get(`https://blucoffee.azurewebsites.net/menu-api/menu/${id}`);
      setMenuItem(result.data);
    } catch (error) {
      alert('Erro ao carregar detalhes do produto. Por favor, tente novamente mais tarde.');
    }
  }

  const editMenuItem = async () => {
    try {
      await axios.put("https://blucoffee.azurewebsites.net/menu-api/update-menu", menuItem);
      setMenuItem({});
      setShow(false);
      loadMenu();
      alert('Produto editado com sucesso.');
    } catch (error) {
      alert('Erro ao editar produto. Por favor, verifique os dados e tente novamente.');
    }
  }

  const handleShowModalAddItem = () => {
    setMenuItem({});
    setShowAddItem(true);
  }
  const handleCloseModalAddItem = () => setShowAddItem(false);

  const handleShowModalEditItem = async (id) => {
    setShow(true);
    await loadMenuItem(id);
  }
  const handleCloseModalEditItem = () => setShow(false);

  return (
    <div className='container'>
      <div className='py-4 text-center'>
        <h2>Cardápio</h2>
        <br />
        <Modal show={showAddItem} onHide={handleCloseModalAddItem} centered>
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Item ao Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Titulo do item'
                  value={menuItem.title || ''}
                  onChange={(e) => setMenuItem({ ...menuItem, title: e.target.value })}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Descrição do item'
                  value={menuItem.description || ''}
                  onChange={(e) => setMenuItem({ ...menuItem, description: e.target.value })}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Imagem</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='URL da imagem do item'
                  value={menuItem.image || ''}
                  onChange={(e) => setMenuItem({ ...menuItem, image: e.target.value })}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Preço</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Preço do item'
                  value={menuItem.price || ''}
                  onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })}
                ></Form.Control>
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

        <Modal show={show} onHide={handleCloseModalEditItem} centered>
          <Modal.Header closeButton>
            <Modal.Title>Editar Item do Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Titulo do item'
                  value={menuItem.title || ''}
                  onChange={(e) => setMenuItem({ ...menuItem, title: e.target.value })}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Descrição do item'
                  value={menuItem.description || ''}
                  onChange={(e) => setMenuItem({ ...menuItem, description: e.target.value })}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Imagem</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='URL da imagem do item'
                  value={menuItem.image || ''}
                  onChange={(e) => setMenuItem({ ...menuItem, image: e.target.value })}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Preço</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Preço do item'
                  value={menuItem.price || ''}
                  onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })}
                ></Form.Control>
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

        <button type="button" className="btn btn-success btn-sm mb-4" onClick={handleShowModalAddItem}> 
          Adicionar Item
        </button>

        <br />

        {menu.map((menuItem) => (
          <div key={menuItem.id} className="mb-3"> 
            <h3>{menuItem.title}</h3>
            <img src={menuItem.image} width="500" height="500" alt={menuItem.title} />
            <p>{menuItem.description}</p>
            <p>Valor: R$ {menuItem.price}</p>
            <button type="button" className="btn btn-primary me-2" onClick={() => handleShowModalEditItem(menuItem.id)}> 
              Editar
            </button>
            <button type="button" className="btn btn-danger" onClick={() => deleteMenuItem(menuItem.id)}>
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
