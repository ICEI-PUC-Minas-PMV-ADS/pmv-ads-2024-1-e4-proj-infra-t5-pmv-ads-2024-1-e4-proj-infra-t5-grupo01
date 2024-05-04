import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostDetail from '../../components/PostDetail';
import styles from './Home.module.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/posts-api/posts/getAll');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query) {
      try {
        const response = await axios.get(`http://localhost:8080/posts-api/posts/search?query=${query}`);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error searching posts:', error);
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes sobre promoções</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div className="post-list">
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar post de informações e/ou promoções
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;
