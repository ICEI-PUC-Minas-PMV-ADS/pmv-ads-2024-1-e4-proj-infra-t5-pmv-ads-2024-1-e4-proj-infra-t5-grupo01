import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostDetail from '../../components/PostDetail';
import styles from './Home.module.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://blucoffee.azurewebsites.net/posts-api/posts/getAll');
        setPosts(response.data);
      } catch (error) {
        setError('Erro ao carregar os posts. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);


  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes sobre promoções</h1>
      <div className={styles.post_list}>
        {loading && <div className={styles.loading_spinner}></div>}
        {error && <div className={styles.error_message}>{error}</div>}
        {!loading && posts.length === 0 && (
          <div className={styles.no_posts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className={styles.create_post_button}>Criar post de informações e/ou promoções</Link>
          </div>
        )}
        {!loading && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;