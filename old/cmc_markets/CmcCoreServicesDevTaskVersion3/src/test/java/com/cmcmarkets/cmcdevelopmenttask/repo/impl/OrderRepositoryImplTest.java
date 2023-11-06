package com.cmcmarkets.cmcdevelopmenttask.repo.impl;

import com.cmcmarkets.cmcdevelopmenttask.MockDatabase;
import com.cmcmarkets.cmcdevelopmenttask.Order;
import com.cmcmarkets.cmcdevelopmenttask.Side;
import com.cmcmarkets.cmcdevelopmenttask.exception.OrderRepositoryException;
import com.cmcmarkets.cmcdevelopmenttask.repo.OrderRepository;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import java.util.concurrent.ConcurrentHashMap;

import static org.junit.Assert.*;

public class OrderRepositoryImplTest {

    private OrderRepository orderRepository = new OrderRepositoryImpl();

    private static final String TEST_SYMBOL = "Symbol";
    private static final Side TEST_SIDE = Side.SELL;

    @Rule
    public ExpectedException expectedEx = ExpectedException.none();


    @Before
    public void setup() {
        MockDatabase.orders = new ConcurrentHashMap<>();
    }

    @Test
    public void createCommandShouldCreateOrderBookInTheDatabase() {
        //Given
        Order order = new Order(1L, TEST_SYMBOL, TEST_SIDE, 100, 10);

        //When
        Order actualOrder = orderRepository.create(order);

        //Then
        assertNotNull(actualOrder);
        assertEquals(1L, actualOrder.getOrderId());
        assertEquals(TEST_SYMBOL, actualOrder.getSymbol());
        assertEquals(TEST_SIDE, actualOrder.getSide());
        assertEquals(100, actualOrder.getPrice());
        assertEquals(10, actualOrder.getQuantity());

    }

    @Test
    public void createCommandForExistingOrderShouldThrowException() {
        //Given
        Order order = new Order(1L, TEST_SYMBOL, TEST_SIDE, 100, 10);
        orderRepository.create(order);

        //Expected
        expectedEx.expect(OrderRepositoryException.class);
        expectedEx.expectMessage("Cannot create order with id:1,as it already exists");
        //When
        orderRepository.create(order);
    }

    @Test
    public void updateCommandShouldUpdateOrderInTheDatabase() {
        //Given
        Order order = new Order(1L, TEST_SYMBOL, TEST_SIDE, 100, 10);
        orderRepository.create(order);

        Order updatedOrder = new Order(1L, TEST_SYMBOL, TEST_SIDE, 90, 10);
        Order actualOrder = orderRepository.update(updatedOrder);

        //Then
        assertNotNull(actualOrder);
        assertEquals(1L, actualOrder.getOrderId());
        assertEquals(TEST_SYMBOL, actualOrder.getSymbol());
        assertEquals(TEST_SIDE, actualOrder.getSide());
        assertEquals(100, actualOrder.getPrice());
        assertEquals(10, actualOrder.getQuantity());

    }

    @Test
    public void updateCommandForNonExistingOrderShouldThrowException() {
        //Given
        Order order = new Order(1L, TEST_SYMBOL, TEST_SIDE, 100, 10);

        //Expected
        expectedEx.expect(OrderRepositoryException.class);
        expectedEx.expectMessage("Cannot update order with id:1,as it does not exists");
        //When
        orderRepository.update(order);
    }

    @Test
    public void readCommandShouldReturnOrder() {
        //Given
        Order order = new Order(1L, TEST_SYMBOL, TEST_SIDE, 100, 10);
        orderRepository.create(order);

        //When
        Order actualOrder = orderRepository.read(order.getOrderId());

        //Then
        assertNotNull(actualOrder);
        assertEquals(1L, actualOrder.getOrderId());
        assertEquals(TEST_SYMBOL, actualOrder.getSymbol());
        assertEquals(TEST_SIDE, actualOrder.getSide());
        assertEquals(100, actualOrder.getPrice());
        assertEquals(10, actualOrder.getQuantity());
    }

    @Test
    public void readCommandForNonExistingOrderShouldReturnNull() {
        //Given an empty db
        //When
        Order actualOrder = orderRepository.read(1L);

        //Then
        assertNull(actualOrder);
    }

    @Test
    public void deleteCommandShouldDeleteOrderFromTheDatabase() {
        //Given
        Order order = new Order(1L, TEST_SYMBOL, TEST_SIDE, 100, 10);
        orderRepository.create(order);

        //When
        orderRepository.delete(order.getOrderId());

        //Then
        Order actualOrder = orderRepository.read(1L);
        assertNull(actualOrder);

    }

    @Test
    public void deleteCommandForNonExistingOrderShouldThrowException() {
        //Given an empty db

        //Expected
        expectedEx.expect(OrderRepositoryException.class);
        expectedEx.expectMessage("Cannot delete order with id:1,as it does not exists");
        //When
        orderRepository.delete(1L);
    }

}