package com.cmcmarkets.cmcdevelopmenttask.service.impl;

import com.cmcmarkets.cmcdevelopmenttask.Order;
import com.cmcmarkets.cmcdevelopmenttask.OrderModification;
import com.cmcmarkets.cmcdevelopmenttask.exception.OrderValidationException;
import com.cmcmarkets.cmcdevelopmenttask.service.OrderValidationService;

public class OrderValidationServiceImpl implements OrderValidationService {

    @Override
    public void validateNewOrder(Order order) {
        if (order.getPrice() < 0) {
            throw new OrderValidationException("Cannot process new order with id:" + order.getOrderId() + ", as it has negative price");
        }
        if (order.getSymbol().isEmpty()) {
            throw new OrderValidationException("Cannot process new order with id:" + order.getOrderId() + ", as the symbol is blank");
        }
        if (order.getQuantity() < 0) {
            throw new OrderValidationException("Cannot process new order with id:" + order.getOrderId() + ", as has negative quantity");
        }
    }

    @Override
    public void validateModification(OrderModification orderModification) {
        if (orderModification.getNewPrice() < 0) {
            throw new OrderValidationException("Cannot process order modification with id:" + orderModification.getOrderId() + ", as it has negative price");
        }
        if (orderModification.getNewQuantity() < 0) {
            throw new OrderValidationException("Cannot process order modification with id:" + orderModification.getOrderId() + ", as has negative quantity");
        }
    }

}
