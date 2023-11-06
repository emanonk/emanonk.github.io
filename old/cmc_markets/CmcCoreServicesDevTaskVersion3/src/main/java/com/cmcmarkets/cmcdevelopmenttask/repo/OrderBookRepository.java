package com.cmcmarkets.cmcdevelopmenttask.repo;

import com.cmcmarkets.cmcdevelopmenttask.model.OrderBook;

public interface OrderBookRepository {

    OrderBook readOrderBookBySymbol(String symbol);

    OrderBook create(OrderBook orderBook);
}
