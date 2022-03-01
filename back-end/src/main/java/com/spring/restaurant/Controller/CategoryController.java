package com.spring.restaurant.Controller;

import com.spring.restaurant.Service.CategoryServ;
import com.spring.restaurant.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class CategoryController {

    private CategoryServ categoryServ;

    @Autowired
    public CategoryController(CategoryServ categoryServ) {
        this.categoryServ = categoryServ;
    }

    @GetMapping("/allCategory")
    public List<Category> allCategory(){
        return categoryServ.categories();
    }


}
