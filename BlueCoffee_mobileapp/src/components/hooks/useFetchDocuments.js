import { useState, useEffect } from 'react';
import { db } from '../firebase/config'; // Importe o objeto de configuração do Firebase aqui
import { collection, getDocs, query, where } from 'firebase/firestore'; // Importe os métodos necessários do Firebase

export const useFetchDocuments = (collectionName) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      setLoading(true);
      setError(null);

      try {
        const q = query(collection(db, collectionName));
        const querySnapshot = await getDocs(q);
        const fetchedDocuments = [];

        querySnapshot.forEach((doc) => {
          fetchedDocuments.push({ id: doc.id, ...doc.data() });
        });

        setDocuments(fetchedDocuments);
      } catch (error) {
        console.error('Error fetching documents: ', error);
        setError('Error fetching documents');
      }

      setLoading(false);
    };

    fetchDocuments();
  }, [collectionName]);

  return { documents, loading, error };
};