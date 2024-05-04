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
    public void saveMenu(@RequestBody Menu menu){
        menuService.saveMenu(menu);
    }

    @GetMapping("/menu/{documentName}")
    public Menu getMenu(@PathVariable String documentName) throws ExecutionException, InterruptedException {
        return menuService.getMenuDetails(documentName);
    }

    @GetMapping("/menu/getAll")
    public List<Menu> getAllMenu() throws ExecutionException, InterruptedException {
        return menuService.getAllMenu();
    }

    @PutMapping("/update-menu")
    public void updateMenu(@RequestBody Menu menu){
        menuService.updateMenu(menu);
    }

    @DeleteMapping("/menu/delete/{document}")
    public void deletePost(@PathVariable String document) throws ExecutionException, InterruptedException {
        menuService.deleteMenu(document);
    }
}
