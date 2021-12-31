package com.cmcmarkets.cmcdevelopmenttask.repo.impl;

import com.cmcmarkets.cmcdevelopmenttask.MockDatabase;
import com.cmcmarkets.cmcdevelopmenttask.exception.OrderBookRepositoryException;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBook;
import com.cmcmarkets.cmcdevelopmenttask.repo.OrderBookRepository;

import java.util.Objects;

public class OrderBookRepositoryImpl implements OrderBookRepository {

    @Override
    public OrderBook readOrderBookBySymbol(String symbol) {
        return MockDatabase.orderBooks.get(symbol);
    }

    @Override
    public OrderBook create(OrderBook orderBook) {
        OrderBook testOrderBook = MockDatabase.orderBooks.get(orderBook.getSymbol());
        if(Objects.nonNull(testOrderBook)) {
            throw new OrderBookRepositoryException("Cannot create order book for " + orderBook.getSymbol() + ",as it already exists");
        }
        MockDatabase.orderBooks.put(orderBook.getSymbol(), orderBook);
        return orderBook;
    }
}
