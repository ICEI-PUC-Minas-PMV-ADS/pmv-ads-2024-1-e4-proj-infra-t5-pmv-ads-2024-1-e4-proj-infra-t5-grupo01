import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; 
import { getDate } from 'date-fns';

const Order = ({ route }) => {
  const { user } = useContext(AuthContext);
  const { menuItem } = route.params;
  const navigation = useNavigation(); 

  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handlePlaceOrder = async () => {
  if (user) {
    const order = {
      menuItem: menuItem,
      quantity: quantity,
      total: menuItem.price * quantity,
      uid: user.uid,
      status: 'Pendente',
      orderDate: new Date().toISOString(), // Formata para ISO 8601
    };

    try {
      await axios.post('https://blucoffee.azurewebsites.net/order-api/saveOrder', order);
      alert('Pedido criado com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao criar o pedido:', error);
      alert('Erro ao criar o pedido. Por favor, tente novamente mais tarde.');
    }
  } else {
    alert('Você precisa estar logado para fazer um pedido.');
    navigation.navigate('Login');
  }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        Detalhes do Pedido
      </Text>
      <Text style={{ fontSize: 16 }}>Item: {menuItem.title}</Text>
      <Text style={{ fontSize: 16 }}>Preço: R$ {menuItem.price}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity
          onPress={handleDecreaseQuantity}
          style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, marginHorizontal: 10 }}>{quantity}</Text>
        <TouchableOpacity
          onPress={handleIncreaseQuantity}
          style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 16, marginTop: 20 }}>
        Preço total: R$ {(menuItem.price * quantity).toFixed(2)}
      </Text>
      <TouchableOpacity
        onPress={handlePlaceOrder}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          marginTop: 20,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Order;