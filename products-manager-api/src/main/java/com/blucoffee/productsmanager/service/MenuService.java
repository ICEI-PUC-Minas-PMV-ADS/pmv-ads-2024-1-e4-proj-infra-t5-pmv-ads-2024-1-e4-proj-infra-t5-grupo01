package com.blucoffee.productsmanager.service;
import com.blucoffee.productsmanager.entity.Menu;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class MenuService {

    private static final String COLLECTION_NAME = "menu";

    public String saveMenu(Menu menu) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection(COLLECTION_NAME).document();
        menu.setId(documentReference.getId());
        documentReference.set(menu);
        return documentReference.getId();
    }

    public Menu getMenuDetails(String documentId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection(COLLECTION_NAME).document(documentId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        return document.exists() ? document.toObject(Menu.class) : null;
    }

    public List<Menu> getAllMenu() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = dbFirestore.collection(COLLECTION_NAME).get();
        List<Menu> menuList = new ArrayList<>();
        QuerySnapshot querySnapshot = future.get();
        List<QueryDocumentSnapshot> documents = querySnapshot.getDocuments();
        for (QueryDocumentSnapshot document : documents) {
            menuList.add(document.toObject(Menu.class));
        }
        return menuList;
    }

    public void updateMenu(Menu menu) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        dbFirestore.collection(COLLECTION_NAME).document(menu.getId()).set(menu);
    }

    public void deleteMenu(String documentId) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        dbFirestore.collection(COLLECTION_NAME).document(documentId).delete();
    }
}
