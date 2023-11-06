package com.cmcmarkets.cmcdevelopmenttask.model;

import java.util.Comparator;

public class OrderBookRecordComparator implements Comparator<OrderBookRecord> {

    public int compare(OrderBookRecord a, OrderBookRecord b) {
        return a.getPrice() - b.getPrice();
    }
}