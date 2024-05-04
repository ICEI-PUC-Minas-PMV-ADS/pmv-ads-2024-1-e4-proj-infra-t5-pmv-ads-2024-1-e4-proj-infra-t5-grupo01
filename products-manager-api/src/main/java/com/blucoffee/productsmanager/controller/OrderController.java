package com.blucoffee.productsmanager.controller;
import com.blucoffee.productsmanager.entity.Order;
import com.blucoffee.productsmanager.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/order-api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/saveOrder")
    public void saveMenu(@RequestBody Order order){
        orderService.saveOrder(order);
    }

    @GetMapping("/order/{documentName}")
    public Order getOrder(@PathVariable String documentName) throws ExecutionException, InterruptedException {
        return orderService.getOrderDetails(documentName);
    }

    @GetMapping("/order/getAll")
    public List<Order> getAllMenu() throws ExecutionException, InterruptedException {
        return orderService.getAllOrders();
    }

    @GetMapping("/order/getByUserUid/{userUid}")
    public List<Order> getOrdersByUserUid(@PathVariable String userUid) throws ExecutionException, InterruptedException {
        return orderService.getOrdersByUserUid(userUid);
    }

    @PutMapping("/update-order/{orderId}")
    public void updateOrder(@PathVariable String orderId, @RequestBody Order order){
        orderService.updateOrder(orderId, order);
    }

    @DeleteMapping("/order/delete/{document}")
    public void deletePost(@PathVariable String document) throws ExecutionException, InterruptedException {
        orderService.deleteOrder(document);
    }

}
