package com.blucoffee.productsmanager.service;
import com.blucoffee.productsmanager.entity.Post;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class PostService {

    private static final String COLLECTION_NAME = "posts";

    public void savePost(Post post){

        Firestore dbFirestore = FirestoreClient.getFirestore();

        dbFirestore.collection(COLLECTION_NAME).document(post.getTitle()).set(post);
    }

    public Post getPostDetails(String documentName) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        DocumentReference documentReference = dbFirestore.collection(COLLECTION_NAME).document(documentName);

        ApiFuture<DocumentSnapshot> future = documentReference.get();

        DocumentSnapshot document = future.get();

        Post post = null;
        if(document.exists()){
            post = document.toObject(Post.class);
            return post;
        } else return null;
    }

    public List<Post> getAllPosts() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = dbFirestore.collection(COLLECTION_NAME).get();
        List<Post> postList = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        List<QueryDocumentSnapshot> documents = querySnapshot.getDocuments();
        for (QueryDocumentSnapshot document : documents) {
            Post post = document.toObject(Post.class);
            post.setId(document.getId());
            postList.add(post);
        }
        return postList;
    }

    public void updatePost(Post post){

        Firestore dbFirestore = FirestoreClient.getFirestore();

        dbFirestore.collection(COLLECTION_NAME).document(post.getTitle()).set(post);
    }

    public void deletePost(String document){

        Firestore dbFirestore = FirestoreClient.getFirestore();

        dbFirestore.collection(COLLECTION_NAME).document(document).delete();
    }

}
