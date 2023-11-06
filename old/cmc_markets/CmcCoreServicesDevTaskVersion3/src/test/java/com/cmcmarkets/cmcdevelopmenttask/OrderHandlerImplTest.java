package com.cmcmarkets.cmcdevelopmenttask;

import com.cmcmarkets.cmcdevelopmenttask.exception.OrderHandlerException;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBook;
import com.cmcmarkets.cmcdevelopmenttask.model.OrderBookRecord;
import com.cmcmarkets.cmcdevelopmenttask.repo.impl.OrderBookRepositoryImpl;
import com.cmcmarkets.cmcdevelopmenttask.repo.impl.OrderRepositoryImpl;
import com.cmcmarkets.cmcdevelopmenttask.service.impl.OrderBookServiceImpl;
import com.cmcmarkets.cmcdevelopmenttask.service.impl.OrderValidationServiceImpl;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import java.util.concurrent.ConcurrentHashMap;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

public class OrderHandlerImplTest {

    private static final String TEST_SYMBOL = "Symbol";
    private static final Side TEST_SIDE = Side.SELL;

    private OrderHandler orderHandler = new OrderHandlerImpl(
            new OrderRepositoryImpl(),
            new OrderBookServiceImpl(new OrderBookRepositoryImpl()),
            new OrderValidationServiceImpl());

    @Rule
    public ExpectedException expectedEx = ExpectedException.none();

    @Before
    public void setup() {
        MockDatabase.orders = new ConcurrentHashMap<>();
        MockDatabase.orderBooks = new ConcurrentHashMap<>();
    }

    @Test
    public void shouldProcessNewOrder() {
        //Given
        Order order = new Order(1L, TEST_SYMBOL, Side.SELL, 100, 10);

        //When
        orderHandler.addOrder(order);

        //Then
        Order actualOrder = MockDatabase.orders.get(1L);

        assertEquals(TEST_SYMBOL, actualOrder.getSymbol());
        assertEquals(Side.SELL, actualOrder.getSide());
        assertEquals(100, actualOrder.getPrice());
        assertEquals(10, actualOrder.getQuantity());

        OrderBook actualOrderBook = MockDatabase.orderBooks.get(TEST_SYMBOL);

        assertEquals(TEST_SYMBOL, actualOrderBook.getSymbol());
        assertEquals(1, actualOrderBook.getAsks().size());
        assertEquals(0, actualOrderBook.getBids().size());
        OrderBookRecord orderBookRecord = (OrderBookRecord) actualOrderBook.getAsks().get(100);
        assertEquals(1, orderBookRecord.getOrderCount());
        assertEquals(100, orderBookRecord.getPrice());
        assertEquals(10, orderBookRecord.getQuantity());

    }

    @Test
    public void shouldProcessOrderModification() {
        //Given
        Order order = new Order(1L, TEST_SYMBOL, Side.SELL, 100, 10);
        orderHandler.addOrder(order);
        OrderModification orderModification = new OrderModification(1L, 90, 8);

        //When
        orderHandler.modifyOrder(orderModification);

        //Then
        Order actualOrder = MockDatabase.orders.get(1L);

        assertEquals(TEST_SYMBOL, actualOrder.getSymbol());
        assertEquals(Side.SELL, actualOrder.getSide());
        assertEquals(90, actualOrder.getPrice());
        assertEquals(8, actualOrder.getQuantity());

        OrderBook actualOrderBook = MockDatabase.orderBooks.get(TEST_SYMBOL);

        assertEquals(TEST_SYMBOL, actualOrderBook.getSymbol());
        assertEquals(1, actualOrderBook.getAsks().size());
        assertEquals(0, actualOrderBook.getBids().size());

        OrderBookRecord orderBookRecord = (OrderBookRecord) actualOrderBook.getAsks().get(90);
        assertEquals(1, orderBookRecord.getOrderCount());
        assertEquals(90, orderBookRecord.getPrice());
        assertEquals(8, orderBookRecord.getQuantity());

        OrderBookRecord oldOrderBookRecord = (OrderBookRecord) actualOrderBook.getAsks().get(100);
        assertNull(oldOrderBookRecord);
    }

    @Test
    public void shouldProcessRemoveOrderSuccessfully() {
        //Given
        Order order = new Order(2L, "TESLA", Side.SELL, 100, 10);
        orderHandler.addOrder(order);

        //When
        orderHandler.removeOrder(2L);

        //Then
        Order actualOrder = MockDatabase.orders.get(1L);

        assertNull(actualOrder);

        OrderBook actualOrderBook = MockDatabase.orderBooks.get("TESLA");
        OrderBookRecord orderBookRecord = (OrderBookRecord) actualOrderBook.getAsks().get(100);
        assertNull(orderBookRecord);

    }

    @Test
    public void removeOrderShouldThrowExceptionWhenOrderNotExists() {
        //Given the order is not in db
        //Expected
        expectedEx.expect(OrderHandlerException.class);
        expectedEx.expectMessage("Cannot remove order with id:3 ,as it does not exist");
        //When
        orderHandler.removeOrder(3L);
    }

    @Test
    public void shouldSuccessfullyProcessCalculatePrice() {
        //Given
        Order order = new Order(4L, TEST_SYMBOL, Side.BUY, 100, 10);
        Order order1 = new Order(5L, TEST_SYMBOL, Side.BUY, 200, 10);
        orderHandler.addOrder(order);
        orderHandler.addOrder(order1);

        //When
        double actualPrice = orderHandler.getCurrentPrice(TEST_SYMBOL, 20, Side.BUY);

        assertEquals(150, actualPrice, 0.001);
    }

    @Test
    public void shouldNotProcessCalculatePriceWhenOrderBookIsEmpty() {
        //When order book is not created

        //Expected
        expectedEx.expect(OrderHandlerException.class);
        expectedEx.expectMessage("OrderBook for:NOT_HERE is currently empty");
        //When
        orderHandler.getCurrentPrice("NOT_HERE", 20, Side.BUY);
    }

}