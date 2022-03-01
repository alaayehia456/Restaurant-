package com.spring.restaurant.Dao;

import com.spring.restaurant.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepo extends JpaRepository<Order,Long> {

    public List<Order> findByCategoryId(Long id);

    public List<Order> findByNameContaining(String name);

}
