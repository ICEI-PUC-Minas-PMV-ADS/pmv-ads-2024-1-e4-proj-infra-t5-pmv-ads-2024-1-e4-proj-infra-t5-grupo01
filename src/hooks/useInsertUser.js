import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { doc, setDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "INSERTED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const useInsertUser = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const insertUserDocument = async (docId, document) => {
    checkCancelBeforeDispatch({ type: "LOADING" });

    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };

      await setDoc(
        doc(db, docCollection, docId),
        newDocument
      );

      checkCancelBeforeDispatch({
        type: "INSERTED_DOC",
      });
    } catch (error) {
      checkCancelBeforeDispatch({ type: "ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { insertUserDocument, response };
};

export default useInsertUser;