import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import axios from 'axios';

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8080/order-api/order/getByUserUid/${user.uid}`);
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false);
    }
  };

  const renderOrderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>Item do Pedido: {item.menuItem.title}</Text>
      <Text>Quantidade: {item.quantity}</Text>
      <Text>Valor total: R$ {item.total.toFixed(2)}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: '#000000',textAlign: 'center', fontSize: 35, fontWeight: 'bold', marginBottom: 10 }}>
        Meus Pedidos
      </Text>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
         keyExtractor={(item) => item.uid.toString()} // Usando a propriedade uid como chave única
        />
    </View>
  );
};

export default MyOrders;