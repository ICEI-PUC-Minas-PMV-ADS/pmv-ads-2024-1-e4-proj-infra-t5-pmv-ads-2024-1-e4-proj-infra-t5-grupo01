import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'; 
import { Container } from './styles';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation(); 

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8080/posts-api/posts/getAll');
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  const handlePostPress = (document) => {
    navigation.navigate('PostsUser', { document });
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePostPress(item.document)}>
      <View style={{ padding: 10, alignItems:'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:'#000000', textAlign:'center' }}>
          {item.title}
        </Text>
        <Image
          style={{ width: 250, height: 250 }}
          source={{ uri: item.image }}
        />
        <Text style={{ color:'#000000' }}>Por: {item.createdBy}</Text>
        <Text style={{ fontWeight: 'bold', color:'#000000' }}>
          {item.tags.map(tag => `#${tag}`).join(' ')}
        </Text>
      </View>
    </TouchableOpacity>
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
        Veja os nossos posts mais recentes sobre promoções
      </Text>
      <FlatList
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.uid}
      />
    </View>
    </Container>
  );
};

export default HomeScreen;