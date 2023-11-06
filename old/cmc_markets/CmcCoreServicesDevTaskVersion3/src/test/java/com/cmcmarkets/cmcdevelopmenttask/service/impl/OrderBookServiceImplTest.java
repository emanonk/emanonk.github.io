package com.cmcmarkets.cmcdevelopmenttask.service.impl;

import com.cmcmarkets.cmcdevelopmenttask.MockDatabase;
import com.cmcmarkets.cmcdevelopmenttask.Order;
import com.cmcmarkets.cmcdevelopmenttask.Side;
import com.cmcmarkets.cmcdevelopmenttask.exception.OrderHandlerException;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBook;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBookRecord;
import com.cmcmarkets.cmcdevelopmenttask.repo.impl.OrderBookRepositoryImpl;
import com.cmcmarkets.cmcdevelopmenttask.service.OrderBookService;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import java.util.SortedMap;
import java.util.TreeMap;
import java.util.concurrent.ConcurrentHashMap;

import static org.junit.Assert.*;

public class OrderBookServiceImplTest {

    private OrderBookService orderBookService = new OrderBookServiceImpl(new OrderBookRepositoryImpl());

    private static final String TEST_SYMBOL = "Symbol";

    @Rule
    public ExpectedException expectedEx = ExpectedException.none();

    @Before
    public void setup() {
        MockDatabase.orderBooks = new ConcurrentHashMap<>();
    }

    @Test
    public void shouldCreateNewBook() {
        //When
        orderBookService.getOrderBookOrCreate(TEST_SYMBOL);
        //Then
        OrderBook actualOrderBook = MockDatabase.orderBooks.get(TEST_SYMBOL);
        assertNotNull(actualOrderBook);
    }

    @Test
    public void shouldGetExistingOrderBook() {
        //Given
        OrderBook orderBook = new OrderBook(TEST_SYMBOL);
        MockDatabase.orderBooks.put(TEST_SYMBOL, orderBook);
        //When
        OrderBook actualOrderBook = orderBookService.getOrderBookOrCreate(TEST_SYMBOL);
        //Then

        assertNotNull(actualOrderBook);
        assertEquals(TEST_SYMBOL, actualOrderBook.getSymbol());
        assertEquals(0, actualOrderBook.getAsks().size());
        assertEquals(0, actualOrderBook.getBids().size());
    }

    @Test
    public void shouldGetExistingOrderBookWithoutThrowingException() {
        //Given
        OrderBook orderBook = new OrderBook(TEST_SYMBOL);
        MockDatabase.orderBooks.put(TEST_SYMBOL, orderBook);
        //When
        OrderBook actualOrderBook = orderBookService.getOrderBookOrThrow(TEST_SYMBOL);
        //Then

        assertNotNull(actualOrderBook);
        assertEquals(TEST_SYMBOL, actualOrderBook.getSymbol());
        assertEquals(0, actualOrderBook.getAsks().size());
        assertEquals(0, actualOrderBook.getBids().size());
    }

    @Test
    public void shouldThrowExceptionWhenOrderBookNotFound() {
        //Expected
        expectedEx.expect(OrderHandlerException.class);
        expectedEx.expectMessage("OrderBook for:Symbol is currently empty");

        //When
        orderBookService.getOrderBookOrThrow(TEST_SYMBOL);
    }

    @Test
    public void shouldAddOrderAndCreateOrderBook() {
        //Given
        SortedMap<Integer, OrderBookRecord> records = new TreeMap<Integer, OrderBookRecord>();
        Order order = new Order(2L, "TESLA", Side.SELL, 100, 10);

        //When
        orderBookService.addOrderInOrderBook(records, order);

        //Then
        OrderBookRecord orderBookRecord = records.get(100);
        assertNotNull(orderBookRecord);
        assertEquals(10, orderBookRecord.getQuantity());
        assertEquals(100, orderBookRecord.getPrice());
        assertEquals(1, orderBookRecord.getOrderCount());

    }

    @Test
    public void shouldAddOrderAndUpdateExistingOrderBook() {
        //Given
        SortedMap<Integer, OrderBookRecord> records = new TreeMap<Integer, OrderBookRecord>();
        OrderBookRecord orderBookRecord = new OrderBookRecord(2, 10, 100);
        records.put(100, orderBookRecord);
        Order order = new Order(2L, "TESLA", Side.SELL, 100, 10);

        //When
        orderBookService.addOrderInOrderBook(records, order);

        //Then
        OrderBookRecord updatedOrderBookRecord = records.get(100);
        assertNotNull(updatedOrderBookRecord);
        assertEquals(20, updatedOrderBookRecord.getQuantity());
        assertEquals(100, updatedOrderBookRecord.getPrice());
        assertEquals(3, updatedOrderBookRecord.getOrderCount());

    }

    @Test
    public void shoudUpdateOrderBookOnOrderModificationRequestWithSamePrice() {
        //Given
        SortedMap<Integer, OrderBookRecord> records = new TreeMap<Integer, OrderBookRecord>();
        OrderBookRecord orderBookRecord = new OrderBookRecord(2, 10, 100);
        records.put(100, orderBookRecord);
        Order order = new Order(2L, "TESLA", Side.SELL, 100, 5);
        Order updatedOrder = new Order(2L, "TESLA", Side.SELL, 100, 4);

        //When
        orderBookService.modifyOrderInOrderBook(records, order, updatedOrder);

        //Then
        OrderBookRecord updatedOrderBookRecord = records.get(100);
        assertNotNull(updatedOrderBookRecord);
        assertEquals(9, updatedOrderBookRecord.getQuantity());
        assertEquals(100, updatedOrderBookRecord.getPrice());
        assertEquals(2, updatedOrderBookRecord.getOrderCount());
    }

    @Test
    public void shouldUpdateOrderBookOnOrderModificationRequestWithUpdatedPrice() {
        //Given
        SortedMap<Integer, OrderBookRecord> records = new TreeMap<Integer, OrderBookRecord>();
        OrderBookRecord orderBookRecord = new OrderBookRecord(2, 10, 100);
        records.put(100, orderBookRecord);
        Order order = new Order(2L, "TESLA", Side.SELL, 100, 5);
        Order updatedOrder = new Order(2L, "TESLA", Side.SELL, 110, 5);

        //When
        orderBookService.modifyOrderInOrderBook(records, order, updatedOrder);

        //Then
        OrderBookRecord updatedOrderBookRecord = records.get(100);
        assertNotNull(updatedOrderBookRecord);
        assertEquals(5, updatedOrderBookRecord.getQuantity());
        assertEquals(100, updatedOrderBookRecord.getPrice());
        assertEquals(1, updatedOrderBookRecord.getOrderCount());

        OrderBookRecord updatedOrderBookRecord1 = records.get(110);
        assertNotNull(updatedOrderBookRecord1);
        assertEquals(5, updatedOrderBookRecord1.getQuantity());
        assertEquals(110, updatedOrderBookRecord1.getPrice());
        assertEquals(1, updatedOrderBookRecord1.getOrderCount());
    }

    @Test
    public void shouldUpdateOrderBookOnOrderRemoveRequest() {
        //Given
        SortedMap<Integer, OrderBookRecord> records = new TreeMap<Integer, OrderBookRecord>();
        OrderBookRecord orderBookRecord = new OrderBookRecord(2, 10, 100);
        records.put(100, orderBookRecord);
        Order order = new Order(2L, "TESLA", Side.SELL, 100, 5);


        //When
        orderBookService.removeOrderFromOrderBook(records, order);

        //Then
        OrderBookRecord updatedOrderBookRecord = records.get(100);
        assertNotNull(updatedOrderBookRecord);
        assertEquals(5, updatedOrderBookRecord.getQuantity());
        assertEquals(100, updatedOrderBookRecord.getPrice());
        assertEquals(1, updatedOrderBookRecord.getOrderCount());
    }

    @Test
    public void shouldRemoveOrderBookOnOrderRemoveRequest() {
        //Given
        SortedMap<Integer, OrderBookRecord> records = new TreeMap<Integer, OrderBookRecord>();
        OrderBookRecord orderBookRecord = new OrderBookRecord(1, 10, 100);
        records.put(100, orderBookRecord);
        Order order = new Order(2L, "TESLA", Side.SELL, 100, 10);


        //When
        orderBookService.removeOrderFromOrderBook(records, order);

        //Then
        OrderBookRecord updatedOrderBookRecord = records.get(100);
        assertNull(updatedOrderBookRecord);
    }

    @Test
    public void shouldReturnBidsWhenSideIsBuy() {
        //Given
        OrderBook orderBook = new OrderBook(TEST_SYMBOL);
        OrderBookRecord orderBookRecord = new OrderBookRecord(2, 10, 100);
        orderBook.getBids().put(100, orderBookRecord);

        //When
        SortedMap<Integer, OrderBookRecord> orderBookBidsRecords = orderBookService.getOrderBookRecords(orderBook, Side.BUY);
        SortedMap<Integer, OrderBookRecord> orderBookAsksRecords = orderBookService.getOrderBookRecords(orderBook, Side.SELL);

        //Then
        assertEquals(1, orderBookBidsRecords.size());
        assertEquals(0, orderBookAsksRecords.size());

    }

    @Test
    public void shouldReturnAsksWhenSideIsSell() {
        //Given
        OrderBook orderBook = new OrderBook(TEST_SYMBOL);
        OrderBookRecord orderBookRecord = new OrderBookRecord(2, 10, 100);
        orderBook.getAsks().put(100, orderBookRecord);

        //When
        SortedMap<Integer, OrderBookRecord> orderBookBidsRecords = orderBookService.getOrderBookRecords(orderBook, Side.BUY);
        SortedMap<Integer, OrderBookRecord> orderBookAsksRecords = orderBookService.getOrderBookRecords(orderBook, Side.SELL);

        //Then
        assertEquals(0, orderBookBidsRecords.size());
        assertEquals(1, orderBookAsksRecords.size());
    }

    @Test
    public void shouldCalculateCurrentPrice() {
        //Given
        OrderBook orderBook = new OrderBook(TEST_SYMBOL);
        OrderBookRecord orderBookRecord = new OrderBookRecord(2, 10, 100);
        OrderBookRecord orderBookRecord1 = new OrderBookRecord(2, 10, 200);
        OrderBookRecord orderBookRecord2 = new OrderBookRecord(2, 10, 300);
        orderBook.getAsks().put(100, orderBookRecord);
        orderBook.getAsks().put(200, orderBookRecord1);
        orderBook.getAsks().put(300, orderBookRecord2);
        //When
        Double currentPrice = orderBookService.calculateCurrentPrice(orderBook.getAsks(), 20);

        assertEquals(150, currentPrice, 0.001);
    }

}