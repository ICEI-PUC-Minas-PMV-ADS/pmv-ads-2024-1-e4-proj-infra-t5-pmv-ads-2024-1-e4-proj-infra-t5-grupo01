package com.blucoffee.productsmanager.controller;

import com.blucoffee.productsmanager.entity.Post;
import com.blucoffee.productsmanager.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/posts-api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("/savePost")
    public void saveProduct(@RequestBody Post post){
        postService.savePost(post);
    }

    @GetMapping("/posts/{documentName}")
    public Post getPost(@PathVariable String documentName) throws ExecutionException, InterruptedException {
        return postService.getPostDetails(documentName);
    }

    @GetMapping("/posts/getAll")
    public List<Post> getAllProducts() throws ExecutionException, InterruptedException {
        return postService.getAllPosts();
    }

    @PutMapping("/update-post")
    public void updatePost(@RequestBody Post post){
        postService.updatePost(post);
    }

    @DeleteMapping("/post/delete/{document}")
    public void deletePost(@PathVariable String document) throws ExecutionException, InterruptedException {
        postService.deletePost(document);
    }

}
