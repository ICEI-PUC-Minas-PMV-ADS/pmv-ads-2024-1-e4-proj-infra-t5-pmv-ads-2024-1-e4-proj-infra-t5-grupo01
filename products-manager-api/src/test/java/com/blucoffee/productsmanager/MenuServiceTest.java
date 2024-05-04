package com.blucoffee.productsmanager;

import com.blucoffee.productsmanager.entity.Menu;
import com.blucoffee.productsmanager.service.MenuService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@SpringBootTest
public class MenuServiceTest {

    @Autowired
    private MenuService menuService;

    @Test
    public void testSaveAndGetMenuDetails() throws ExecutionException, InterruptedException {
        // Cria um novo menu
        Menu menu = new Menu();
        menu.setId(1); // Define um ID
        menu.setTitle("Café Espresso");

        // Salva o menu
        menuService.saveMenu(menu);

        // Obtém os detalhes do menu recém-salvo
        Menu retrievedMenu = menuService.getMenuDetails("1");

        // Verifica se os detalhes do menu não são nulos e correspondem ao menu salvo
        assertNotNull(retrievedMenu);
        assertEquals("Café Espresso", retrievedMenu.getTitle());
    }

    @Test
    public void testGetAllMenu() throws ExecutionException, InterruptedException {
        // Obtém todos os menus
        List<Menu> menuList = menuService.getAllMenu();

        // Verifica se a lista não é nula e contém pelo menos um menu
        assertNotNull(menuList);
        assert(menuList.size() > 0);
    }

    @Test
    public void testUpdateMenu() throws ExecutionException, InterruptedException {
        // Cria um novo menu
        Menu menu = new Menu();
        menu.setId(2);
        menu.setTitle("Cappuccino");

        // Salva o menu
        menuService.saveMenu(menu);

        // Atualiza o nome do menu
        menu.setTitle("Café Latte");
        menuService.updateMenu(menu);

        // Obtém os detalhes do menu atualizado
        Menu updatedMenu = menuService.getMenuDetails("2");

        // Verifica se o nome do menu foi atualizado corretamente
        assertNotNull(updatedMenu);
    }

    @Test
    public void testDeleteMenu() throws ExecutionException, InterruptedException {
        // Cria um novo menu
        Menu menu = new Menu();
        menu.setId(3);
        menu.setTitle("Café Americano");

        // Salva o menu
        menuService.saveMenu(menu);

        // Deleta o menu
        menuService.deleteMenu("3");

        // Tenta obter os detalhes do menu excluído
        Menu deletedMenu = menuService.getMenuDetails("3");

        // Verifica se o menu foi excluído com sucesso
        assertNull(deletedMenu);
    }
}
