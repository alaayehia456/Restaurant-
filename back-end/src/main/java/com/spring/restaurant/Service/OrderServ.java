package com.spring.restaurant.Service;

import com.spring.restaurant.Dao.OrderRepo;
import com.spring.restaurant.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServ {
    private OrderRepo orderRepo;

    @Autowired
    public OrderServ(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    public List<Order> orders(){
        return orderRepo.findAll();
    }

    public List<Order> getorderByID(Long id){
        return orderRepo.findByCategoryId(id);
    }

    public List<Order> getserchName(String name){
        return orderRepo.findByNameContaining(name);
    }

    public Order getOrderById(long id){
        return orderRepo.findById(id).get();
    }

}
