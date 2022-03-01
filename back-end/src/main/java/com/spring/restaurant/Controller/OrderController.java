package com.spring.restaurant.Controller;

import com.spring.restaurant.Service.OrderServ;
import com.spring.restaurant.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class OrderController {

    private OrderServ orderServ;

    @Autowired
    public OrderController(OrderServ orderServ) {
        this.orderServ = orderServ;
    }

    @GetMapping("/allOrders")
    public List<Order> allOrders(){
        return orderServ.orders();
    }

    @GetMapping("/category")
    public  List<Order> getAllOrder(@RequestParam Long id){

        return this.orderServ.getorderByID(id);
    }

    @GetMapping("/search")
    public List<Order> getBySearch(@RequestParam String name){
        return orderServ.getserchName(name);
    }

    @GetMapping("/getorder")
    public Order getOrderById(@RequestParam Long id){
        return orderServ.getOrderById(id);
    }

}
