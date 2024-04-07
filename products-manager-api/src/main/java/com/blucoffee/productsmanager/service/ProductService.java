package com.blucoffee.productsmanager.service;

import com.blucoffee.productsmanager.entity.Product;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ProductService {

    private static final String COLLECTION_NAME = "products";

    public void saveProduct(Product product){

        Firestore dbFirestore = FirestoreClient.getFirestore();

        dbFirestore.collection(COLLECTION_NAME).document(product.getName()).set(product);
    }

    public Product getProductDetails(String documentName) throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        DocumentReference documentReference = dbFirestore.collection(COLLECTION_NAME).document(documentName);

        ApiFuture<DocumentSnapshot> future = documentReference.get();

        DocumentSnapshot document = future.get();

        Product product = null;
        if(document.exists()){
            product = document.toObject(Product.class);
            return product;
        } else return null;
    }

    public List<Product> getAllProducts() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = dbFirestore.collection(COLLECTION_NAME).get();
        List<Product> productList = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        List<QueryDocumentSnapshot> documents = querySnapshot.getDocuments();
        for (QueryDocumentSnapshot document : documents) {
            productList.add(document.toObject(Product.class));
        }
        return productList;
    }

    public void updateProduct(Product product){

        Firestore dbFirestore = FirestoreClient.getFirestore();

        dbFirestore.collection(COLLECTION_NAME).document(product.getName()).set(product);
    }

    public void deleteProduct(String document){

        Firestore dbFirestore = FirestoreClient.getFirestore();

        dbFirestore.collection(COLLECTION_NAME).document(document).delete();
    }

}
