package com.blucoffee.productsmanager.controller;

import com.blucoffee.productsmanager.entity.Menu;
import com.blucoffee.productsmanager.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/menu-api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MenuController {

    @Autowired
    MenuService menuService;

    @PostMapping("/saveMenu")
    public String saveMenu(@RequestBody Menu menu) {
        return menuService.saveMenu(menu);
    }

    @GetMapping("/menu/{documentId}")
    public Menu getMenu(@PathVariable String documentId) throws ExecutionException, InterruptedException {
        return menuService.getMenuDetails(documentId);
    }

    @GetMapping("/menu/getAll")
    public List<Menu> getAllMenu() throws ExecutionException, InterruptedException {
        return menuService.getAllMenu();
    }

    @PutMapping("/update-menu")
    public void updateMenu(@RequestBody Menu menu) {
        menuService.updateMenu(menu);
    }

    @DeleteMapping("/menu/delete/{documentId}")
    public void deleteMenu(@PathVariable String documentId) throws ExecutionException, InterruptedException {
        menuService.deleteMenu(documentId);
    }
}
