import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import Header from '../../components/Header'
import { useRoute } from '@react-navigation/native'; 
import { Container } from './styles';

const PostsUser = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const route = useRoute(); 

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const document = route.params.document;
      const response = await axios.get(`http://10.0.2.2:8080/posts-api/posts/${document}`);
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching post:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!post) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Nenhum post encontrado</Text>
      </View>
    );
  }

  return (
    <Container>
      <Header/>
      <View style={{ padding: 10, alignItems:'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:'#000000', textAlign:'center' }}>
          {post.title}
        </Text>
        <Image
          style={{ width: 250, height: 250 }}
          source={{ uri: post.image }}
        />
        <Text style={{ color:'#000000' }}>Por: {post.createdBy}</Text>
        <Text style={{ color:'#000000' }}>{post.body}</Text>
        <Text style={{ fontWeight: 'bold', color:'#000000' }}>
          {post.tags.map(tag => `#${tag}`).join(' ')}
        </Text>
      </View>
    </Container>
  );
};

export default PostsUser;