package com.blucoffee.productsmanager.service;
import com.blucoffee.productsmanager.entity.Order;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class OrderService {

    private static final String COLLECTION_NAME = "orders";

    public void saveOrder(Order order){

        Firestore dbFirestore = FirestoreClient.getFirestore();
        order.setOrderDate(new Date());
        ApiFuture<DocumentReference> future = dbFirestore.collection(COLLECTION_NAME).add(order);
        try {
            DocumentReference documentReference = future.get();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Order getOrderDetails(String documentName) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection(COLLECTION_NAME).document(documentName);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Order order = null;
        if (document.exists()) {
            order = document.toObject(Order.class);
            order.setId(document.getId());
        }
        return order;
    }

    public List<Order> getAllOrders() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = dbFirestore.collection(COLLECTION_NAME).get();
        List<Order> orderList = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        List<QueryDocumentSnapshot> documents = querySnapshot.getDocuments();
        for (QueryDocumentSnapshot document : documents) {
            Order order = document.toObject(Order.class);
            order.setId(document.getId());
            orderList.add(order);
        }
        return orderList;
    }

    public List<Order> getOrdersByUserUid(String userUid) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference ordersRef = dbFirestore.collection(COLLECTION_NAME);
        Query query = ordersRef.whereEqualTo("uid", userUid);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        List<Order> orderList = new ArrayList<>();
        for (DocumentSnapshot document : querySnapshot.get().getDocuments()) {
            orderList.add(document.toObject(Order.class));
        }
        return orderList;
    }

    public void updateOrder(String orderId, Order order){

        Firestore dbFirestore = FirestoreClient.getFirestore();

        dbFirestore.collection(COLLECTION_NAME).document(orderId).set(order);
    }
    public void deleteOrder(String document){

        Firestore dbFirestore = FirestoreClient.getFirestore();

        dbFirestore.collection(COLLECTION_NAME).document(document).delete();
    }


}
