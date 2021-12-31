package com.cmcmarkets.cmcdevelopmenttask.model;

import java.util.Collections;
import java.util.SortedMap;
import java.util.TreeMap;

public class OrderBook {

    private final String symbol;
    private final SortedMap<Integer, OrderBookRecord> bids;
    private final SortedMap<Integer, OrderBookRecord> asks;

    public OrderBook(String symbol) {
        this.symbol = symbol;
        this.bids = Collections.synchronizedSortedMap(new TreeMap<>());
        this.asks = Collections.synchronizedSortedMap(new TreeMap<>());
    }

    public String getSymbol() {
        return symbol;
    }

    public SortedMap<Integer, OrderBookRecord> getBids() {
        return bids;
    }

    public SortedMap<Integer, OrderBookRecord> getAsks() {
        return asks;
    }

}
