package com.cmcmarkets.cmcdevelopmenttask;

import com.cmcmarkets.cmcdevelopmenttask.model.OrderBook;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class MockDatabase {

    public static volatile Map<String, OrderBook> orderBooks = new ConcurrentHashMap<>();
    public static volatile Map<Long, Order> orders = new ConcurrentHashMap<>();

}
