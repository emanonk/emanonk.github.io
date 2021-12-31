package com.cmcmarkets.cmcdevelopmenttask.service.impl;

import com.cmcmarkets.cmcdevelopmenttask.*;
import com.cmcmarkets.cmcdevelopmenttask.exception.OrderHandlerException;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBook;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBookRecord;
import com.cmcmarkets.cmcdevelopmenttask.repo.OrderBookRepository;
import com.cmcmarkets.cmcdevelopmenttask.service.OrderBookService;

import java.util.Iterator;
import java.util.Map;
import java.util.Objects;
import java.util.SortedMap;

public class OrderBookServiceImpl implements OrderBookService {

    private OrderBookRepository orderBookRepository;

    public OrderBookServiceImpl(OrderBookRepository orderBookRepository) {
        this.orderBookRepository = orderBookRepository;
    }

    @Override
    public synchronized OrderBook getOrderBookOrCreate(String symbol) {
        OrderBook orderBook = orderBookRepository.readOrderBookBySymbol(symbol);

        if (Objects.isNull(orderBook)) {
            orderBook = new OrderBook(symbol);
            orderBook = orderBookRepository.create(orderBook);
        }
        return orderBook;
    }

    @Override
    public synchronized OrderBook getOrderBookOrThrow(String symbol) {
        OrderBook orderBook = orderBookRepository.readOrderBookBySymbol(symbol);

        if (Objects.isNull(orderBook)) {
            throw new OrderHandlerException("OrderBook for:" + symbol + " is currently empty");
        }
        return orderBook;
    }

    @Override
    public synchronized void addOrderInOrderBook(SortedMap<Integer, OrderBookRecord> orderBookRecords, Order order) {
        OrderBookRecord newOrderBookRecord = orderBookRecords.get(order.getPrice());
        if (Objects.isNull(newOrderBookRecord)) {
            newOrderBookRecord = new OrderBookRecord(1, order.getQuantity(), order.getPrice());
            orderBookRecords.put(order.getPrice(), newOrderBookRecord);
        } else {
            updateOrderBookRecord(newOrderBookRecord, order.getQuantity(), 1);
        }
    }

    @Override
    public synchronized void modifyOrderInOrderBook(SortedMap<Integer, OrderBookRecord> orderBookRecords, Order existingOrder, Order updatedOrder) {
        OrderBookRecord existingOrderBookRecord = orderBookRecords.get(existingOrder.getPrice());
        boolean modifiedOrderHasSamePrice = existingOrder.getPrice() == updatedOrder.getPrice();
        if (modifiedOrderHasSamePrice) {
            int quantityDelta = updatedOrder.getQuantity() - existingOrder.getQuantity();
            updateOrderBookRecord(existingOrderBookRecord, quantityDelta, 0);
        } else {
            removeOrderFromOrderBook(orderBookRecords, existingOrder);
            addOrderInOrderBook(orderBookRecords, updatedOrder);
        }
    }

    @Override
    public synchronized void removeOrderFromOrderBook(SortedMap<Integer, OrderBookRecord> orderBookRecords, Order existingOrder) {
        OrderBookRecord existingOrderBookRecord = orderBookRecords.get(existingOrder.getPrice());
        if (existingOrderBookRecord.getOrderCount() == 1) {
            orderBookRecords.remove(existingOrder.getPrice());
        } else {
            updateOrderBookRecord(existingOrderBookRecord, existingOrder.getQuantity() * (-1), -1);
        }
    }

    @Override
    public synchronized SortedMap<Integer, OrderBookRecord> getOrderBookRecords(OrderBook orderBook, Side side) {
        SortedMap<Integer, OrderBookRecord> orders;
        if (side == Side.SELL) {
            orders = orderBook.getAsks();
        } else {
            orders = orderBook.getBids();
        }
        return orders;
    }

    @Override
    public synchronized Double calculateCurrentPrice(SortedMap<Integer, OrderBookRecord> orderBookRecords, int quantity) {
        Iterator<Map.Entry<Integer, OrderBookRecord>> iterator = orderBookRecords.entrySet().iterator();

        int leftQuantity = quantity;
        double price = 0;
        while (leftQuantity > 0) {

            OrderBookRecord value = iterator.next().getValue();
            int bookRecordQuantity = value.getQuantity();
            if (bookRecordQuantity >= leftQuantity) {
                price = price + leftQuantity * value.getPrice();
                leftQuantity = 0;
            } else {
                price = price + value.getQuantity() * value.getPrice();
                leftQuantity = leftQuantity - bookRecordQuantity;
            }
        }
        return price / quantity;
    }

    private void updateOrderBookRecord(OrderBookRecord orderBookRecord, int quantityDelta, int orderCountDelta) {
        orderBookRecord.setQuantity(orderBookRecord.getQuantity() + quantityDelta);
        orderBookRecord.setOrderCount(orderBookRecord.getOrderCount() + orderCountDelta);
    }

}
