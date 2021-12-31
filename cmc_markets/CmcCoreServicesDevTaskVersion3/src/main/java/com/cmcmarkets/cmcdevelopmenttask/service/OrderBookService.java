package com.cmcmarkets.cmcdevelopmenttask.service;

import com.cmcmarkets.cmcdevelopmenttask.Order;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBook;
import com.cmcmarkets.cmcdevelopmenttask.Side;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBookRecord;

import java.util.SortedMap;

public interface OrderBookService {

    OrderBook getOrderBookOrCreate(String symbol);

    OrderBook getOrderBookOrThrow(String symbol);

    void addOrderInOrderBook(SortedMap<Integer, OrderBookRecord> orderBookRecords, Order order);

    void modifyOrderInOrderBook(SortedMap<Integer, OrderBookRecord> orderBookRecords, Order existingOrder, Order updatedOrder);

    void removeOrderFromOrderBook(SortedMap<Integer, OrderBookRecord> orderBookRecords, Order existingOrder);

    SortedMap<Integer, OrderBookRecord> getOrderBookRecords(OrderBook orderBook, Side side);

    Double calculateCurrentPrice(SortedMap<Integer, OrderBookRecord> orderBookRecords, int quantity);
}
