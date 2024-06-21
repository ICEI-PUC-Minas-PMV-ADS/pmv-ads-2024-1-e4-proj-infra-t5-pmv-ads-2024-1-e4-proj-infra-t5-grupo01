import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity, RefreshControl } from 'react-native';
import axios from 'axios';
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'; 
import { Container } from './styles';

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [menu, setMenu] = useState([]);
  const navigation = useNavigation(); 

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get('https://blucoffee.azurewebsites.net/menu-api/menu/getAll');
      setMenu(response.data);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.error('Error fetching menu:', error);
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleOrderPress = (menuItem) => {
    navigation.navigate('Order', { menuItem });
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchMenu();
  };

  const renderMenuItem = ({ item }) => (
    <View style={{ padding: 10, alignItems:'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color:'#000000', textAlign:'center' }}>
        {item.title}
      </Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: item.image }}
      />
      <Text style={{ color:'#000000' }}>Descrição: {item.description}</Text>
      <Text style={{ fontWeight: 'bold', color:'#000000' }}>R$ {item.price}</Text>
      <TouchableOpacity
        onPress={() => handleOrderPress(item)}
        style={{ backgroundColor: 'blue', padding: 10, marginTop: 10 }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Comprar</Text>
      </TouchableOpacity>
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
    <Container>
      <Header/>
      <View style={{ flex: 1, padding: 10, alignItems:'center' }}>
        <Text style={{ color: '#000000', fontWeight: 'bold', marginBottom: 10, fontSize:30 }}>
          Cardápio
        </Text>
        <FlatList
          data={menu}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.uid}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </View>
    </Container>
  );
};

export default Menu;
