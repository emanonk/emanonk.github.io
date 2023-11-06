package com.cmcmarkets.cmcdevelopmenttask.service.impl;

import com.cmcmarkets.cmcdevelopmenttask.Order;
import com.cmcmarkets.cmcdevelopmenttask.OrderModification;
import com.cmcmarkets.cmcdevelopmenttask.Side;
import com.cmcmarkets.cmcdevelopmenttask.exception.OrderValidationException;
import com.cmcmarkets.cmcdevelopmenttask.service.OrderValidationService;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

public class OrderValidationServiceImplTest {
    private static final String TEST_SYMBOL = "Symbol";
    private static final Side TEST_SIDE = Side.SELL;
    private OrderValidationService orderValidationService = new OrderValidationServiceImpl();

    @Rule
    public ExpectedException expectedEx = ExpectedException.none();

    @Test
    public void newOrderRequestShouldContainValidValues() {
        //Given
        Order order = new Order(1L, TEST_SYMBOL, TEST_SIDE, 100, 10);

        //when
        orderValidationService.validateNewOrder(order);

        //Then no exception is thrown
    }

    @Test
    public void newOrderRequestWithInvalidPriceShouldThrowException() {
        //Given
        Order order = new Order(1L, TEST_SYMBOL, TEST_SIDE, -100, 10);

        //Expected
        expectedEx.expect(OrderValidationException.class);
        expectedEx.expectMessage("Cannot process new order with id:1, as it has negative price");
        //When
        orderValidationService.validateNewOrder(order);
    }

    @Test
    public void newOrderRequestWithInvalidSymbolShouldThrowException() {
        //Given
        Order order = new Order(1L, "", TEST_SIDE, 100, 10);

        //Expected
        expectedEx.expect(OrderValidationException.class);
        expectedEx.expectMessage("Cannot process new order with id:1, as the symbol is blank");
        //When
        orderValidationService.validateNewOrder(order);
    }

    @Test
    public void newOrderRequestWithInvalidQuantityShouldThrowException() {
        //Given
        Order order = new Order(1L, TEST_SYMBOL, TEST_SIDE, 100, -10);

        //Expected
        expectedEx.expect(OrderValidationException.class);
        expectedEx.expectMessage("Cannot process new order with id:1, as has negative quantity");
        //When
        orderValidationService.validateNewOrder(order);
    }

    @Test
    public void orderModificationRequestShouldContainValidValues() {
        //Given
        OrderModification orderModification = new OrderModification(1L, 100, 10);

        //when
        orderValidationService.validateModification(orderModification);

        //Then no exception is thrown
    }

    @Test
    public void orderModificationRequestWithInvalidPriceShouldThrowException() {
        //Given
        OrderModification orderModification = new OrderModification(1L, -100, 10);
        //Expected
        expectedEx.expect(OrderValidationException.class);
        expectedEx.expectMessage("Cannot process order modification with id:" + orderModification.getOrderId() + ", as it has negative price");
        //When
        orderValidationService.validateModification(orderModification);
    }

    @Test
    public void orderModificationRequestWithInvalidQuantityShouldThrowException() {
        //Given
        OrderModification orderModification = new OrderModification(1L, 100, -10);
        //Expected
        expectedEx.expect(OrderValidationException.class);
        expectedEx.expectMessage("Cannot process order modification with id:1, as has negative quantity");
        //When
        orderValidationService.validateModification(orderModification);
    }

}