package com.cmcmarkets.cmcdevelopmenttask;

import com.cmcmarkets.cmcdevelopmenttask.exception.OrderHandlerException;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBook;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBookRecord;
import com.cmcmarkets.cmcdevelopmenttask.repo.OrderRepository;
import com.cmcmarkets.cmcdevelopmenttask.service.OrderBookService;
import com.cmcmarkets.cmcdevelopmenttask.service.OrderValidationService;

import java.util.Objects;
import java.util.SortedMap;

public class OrderHandlerImpl implements OrderHandler {

    private OrderBookService orderBookService;
    private OrderRepository orderRepository;
    private OrderValidationService orderValidationService;

    public OrderHandlerImpl(OrderRepository orderRepository, OrderBookService orderBookService, OrderValidationService orderValidationService) {
        this.orderRepository = orderRepository;
        this.orderBookService = orderBookService;
        this.orderValidationService = orderValidationService;
    }

    @Override
    public synchronized void addOrder(Order order) {
        orderValidationService.validateNewOrder(order);

        OrderBook orderBook = orderBookService.getOrderBookOrCreate(order.getSymbol());
        SortedMap<Integer, OrderBookRecord> orderBookRecords = orderBookService.getOrderBookRecords(orderBook, order.getSide());

        orderRepository.create(order);
        orderBookService.addOrderInOrderBook(orderBookRecords, order);
    }

    @Override
    public synchronized void modifyOrder(OrderModification orderModification) {

        orderValidationService.validateModification(orderModification);

        Order existingOrder = orderRepository.read(orderModification.getOrderId());
        OrderBook orderBook = orderBookService.getOrderBookOrThrow(existingOrder.getSymbol());
        SortedMap<Integer, OrderBookRecord> orderBookRecords = orderBookService.getOrderBookRecords(orderBook, existingOrder.getSide());

        Order updatedOrder = new Order(
                existingOrder.getOrderId(),
                existingOrder.getSymbol(),
                existingOrder.getSide(),
                orderModification.getNewPrice(),
                orderModification.getNewQuantity());

        orderRepository.update(updatedOrder);

        orderBookService.modifyOrderInOrderBook(orderBookRecords, existingOrder, updatedOrder);
    }

    @Override
    public synchronized void removeOrder(long orderId) {

        Order existingOrder = orderRepository.read(orderId);
        if (Objects.isNull(existingOrder)) {
            throw new OrderHandlerException("Cannot remove order with id:" + orderId + " ,as it does not exist");
        }
        OrderBook orderBook = orderBookService.getOrderBookOrThrow(existingOrder.getSymbol());
        SortedMap<Integer, OrderBookRecord> orderBookRecords = orderBookService.getOrderBookRecords(orderBook, existingOrder.getSide());

        orderRepository.delete(orderId);

        orderBookService.removeOrderFromOrderBook(orderBookRecords, existingOrder);
    }

    @Override
    public synchronized double getCurrentPrice(String symbol, int quantity, Side side) {

        OrderBook orderBook = orderBookService.getOrderBookOrThrow(symbol);
        SortedMap<Integer, OrderBookRecord> orderBookRecords = orderBookService.getOrderBookRecords(orderBook, side);

        if (orderBookRecords.isEmpty()) {
            throw new OrderHandlerException("Cannot calculate current price for " + symbol + ", as the order book is currently empty");
        }

        return orderBookService.calculateCurrentPrice(orderBookRecords, quantity);
    }

}
