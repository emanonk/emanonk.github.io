package com.cmcmarkets.cmcdevelopmenttask.repo;

import com.cmcmarkets.cmcdevelopmenttask.Order;

public interface OrderRepository {

    Order read(Long id);

    Order create(Order order);

    Order update(Order order);

    void delete(Long id);

}
