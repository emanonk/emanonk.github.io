package com.cmcmarkets.cmcdevelopmenttask.repo.impl;

import com.cmcmarkets.cmcdevelopmenttask.MockDatabase;
import com.cmcmarkets.cmcdevelopmenttask.exception.OrderBookRepositoryException;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBook;
import com.cmcmarkets.cmcdevelopmenttask.repo.OrderBookRepository;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import java.util.concurrent.ConcurrentHashMap;

import static org.junit.Assert.*;

public class OrderBookRepositoryImplTest {

    private OrderBookRepository orderBookRepository = new OrderBookRepositoryImpl();

    @Rule
    public ExpectedException expectedEx = ExpectedException.none();

    private static final String TEST_SYMBOL = "Symbol";

    @Before
    public void setup() {
        MockDatabase.orderBooks = new ConcurrentHashMap<>();
    }

    @Test
    public void createCommandShouldCreateOrderBookInTheDatabase() {
        //Given
        OrderBook orderBook = new OrderBook(TEST_SYMBOL);

        //When
        orderBookRepository.create(orderBook);

        //Then
        OrderBook savedOrderBook = MockDatabase.orderBooks.get(TEST_SYMBOL);
        assertNotNull(savedOrderBook);
        assertEquals(TEST_SYMBOL, savedOrderBook.getSymbol());
        assertEquals(0, savedOrderBook.getAsks().size());
        assertEquals(0, savedOrderBook.getBids().size());
    }

    @Test
    public void createCommandForExistingOrderShouldThrowException() {
        //Given
        OrderBook orderBook = new OrderBook(TEST_SYMBOL);
        orderBookRepository.create(orderBook);

        //Expected
        expectedEx.expect(OrderBookRepositoryException.class);
        expectedEx.expectMessage("Cannot create order book for " + TEST_SYMBOL + ",as it already exists");
        //When
        orderBookRepository.create(orderBook);
    }

    @Test
    public void readBySymbolCommandShouldReturnOrderBookForThisSymbol() {
        //Given
        OrderBook orderBook = new OrderBook(TEST_SYMBOL);
        orderBookRepository.create(orderBook);

        //When
        OrderBook actualOrderBook = orderBookRepository.readOrderBookBySymbol(TEST_SYMBOL);

        //Then
        assertNotNull(actualOrderBook);
        assertEquals(TEST_SYMBOL, actualOrderBook.getSymbol());
        assertEquals(0, actualOrderBook.getAsks().size());
        assertEquals(0, actualOrderBook.getBids().size());
    }

    @Test
    public void readBySymbolCommandForNonExistingOrderBookShouldReturnNull() {

        //When
        OrderBook actualOrderBook = orderBookRepository.readOrderBookBySymbol(TEST_SYMBOL);

        //Then
        assertNull(actualOrderBook);
    }

}