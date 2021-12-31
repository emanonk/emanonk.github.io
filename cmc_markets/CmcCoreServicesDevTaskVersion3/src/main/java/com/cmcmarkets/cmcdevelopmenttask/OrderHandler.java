package com.cmcmarkets.cmcdevelopmenttask;

import com.cmcmarkets.cmcdevelopmenttask.repo.impl.OrderBookRepositoryImpl;
import com.cmcmarkets.cmcdevelopmenttask.repo.impl.OrderRepositoryImpl;
import com.cmcmarkets.cmcdevelopmenttask.service.impl.OrderBookServiceImpl;
import com.cmcmarkets.cmcdevelopmenttask.service.impl.OrderValidationServiceImpl;

public interface OrderHandler {
    void addOrder(Order order);

    void modifyOrder(OrderModification orderModification);

    void removeOrder(long orderId);

    double getCurrentPrice(String symbol, int quantity, Side side);

    /**
     * Please implement this method so we are able to create an instance
     * of your OrderHandler implementation.
     */
    static OrderHandler createInstance() {
        synchronized (OrderHandler.class) {
            return new OrderHandlerImpl(
                    new OrderRepositoryImpl(),
                    new OrderBookServiceImpl(new OrderBookRepositoryImpl()),
                    new OrderValidationServiceImpl());
        }
    }
}
