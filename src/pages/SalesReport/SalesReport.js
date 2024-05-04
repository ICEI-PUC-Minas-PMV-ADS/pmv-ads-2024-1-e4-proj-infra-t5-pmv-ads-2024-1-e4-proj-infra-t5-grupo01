import React, { useState } from 'react';

const SalesReport = () => {
  const [salesData, setSalesData] = useState([
    { id: 1, date: '2024-05-01', product: 'Café', quantity: 50, total: 250 },
    { id: 2, date: '2024-05-02', product: 'Bolo', quantity: 20, total: 100 },
    {
      id: 3,
      date: '2024-05-03',
      product: 'Sanduíche',
      quantity: 30,
      total: 150,
    },
  ]);

  const handleAdd = id => {
    setSalesData(prevSalesData =>
      prevSalesData.map(item => {
        if (item.id === id) {
          return { ...item, total: item.total + 1 };
        }
        return item;
      })
    );
  };

  const handleRemove = id => {
    setSalesData(prevSalesData =>
      prevSalesData.map(item => {
        if (item.id === id && item.total > 0) {
          return { ...item, total: item.total - 1 };
        }
        return item;
      })
    );
  };

  const handleSave = () => {
    console.log('Alterações salvas!');
  };

  const handleDiscardChanges = () => {
    console.log('Alterações descartadas!');
  };

  return (
    <div className="table-container">
      <h2>Relatório de Vendas</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr key={index}>
              <td>{sale.date}</td>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>{sale.total}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" style={{ textAlign: 'right', paddingTop: '20px' }}>
              <button
                style={{
                  backgroundColor: 'blue',
                  color: 'white',
                  marginRight: '5px',
                }}
                onClick={handleSave}
              >
                Salvar
              </button>
              <button
                style={{ backgroundColor: 'grey', color: 'white' }}
                onClick={handleDiscardChanges}
              >
                Descartar Alterações
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SalesReport;
