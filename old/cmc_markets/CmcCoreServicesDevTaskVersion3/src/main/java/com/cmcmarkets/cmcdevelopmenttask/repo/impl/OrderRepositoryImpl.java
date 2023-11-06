package com.cmcmarkets.cmcdevelopmenttask.repo.impl;

import com.cmcmarkets.cmcdevelopmenttask.MockDatabase;
import com.cmcmarkets.cmcdevelopmenttask.Order;
import com.cmcmarkets.cmcdevelopmenttask.exception.OrderRepositoryException;
import com.cmcmarkets.cmcdevelopmenttask.repo.OrderRepository;

import java.util.Objects;

public class OrderRepositoryImpl implements OrderRepository {

    @Override
    public Order read(Long id) {
        return MockDatabase.orders.get(id);
    }

    @Override
    public Order create(Order order) {
        Order testOrder = MockDatabase.orders.get(order.getOrderId());
        if (Objects.nonNull(testOrder)) {
            throw new OrderRepositoryException("Cannot create order with id:" + order.getOrderId() + ",as it already exists");
        }
        MockDatabase.orders.put(order.getOrderId(), order);
        return order;
    }

    @Override
    public Order update(Order order) {
        Order testOrder = MockDatabase.orders.get(order.getOrderId());
        if (Objects.isNull(testOrder)) {
            throw new OrderRepositoryException("Cannot update order with id:" + order.getOrderId() + ",as it does not exists");
        }
        return MockDatabase.orders.put(order.getOrderId(), order);
    }

    @Override
    public void delete(Long id) {
        Order testOrder = MockDatabase.orders.get(id);
        if (Objects.isNull(testOrder)) {
            throw new OrderRepositoryException("Cannot delete order with id:" + id + ",as it does not exists");
        }
        MockDatabase.orders.remove(id);
    }

}
