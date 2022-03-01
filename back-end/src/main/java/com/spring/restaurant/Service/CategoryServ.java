package com.spring.restaurant.Service;

import com.spring.restaurant.Dao.CategoryRepo;
import com.spring.restaurant.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServ {
    private CategoryRepo categoryRepo;

    @Autowired
    public CategoryServ(CategoryRepo categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    public List<Category> categories(){
        return categoryRepo.findAll();
    }

}
