package com.cmcmarkets.cmcdevelopmenttask;

import org.junit.Before;
import org.junit.Test;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicBoolean;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

public class AcceptanceTest {

    @Before
    public void setup() {
        MockDatabase.orders = new ConcurrentHashMap<>();
        MockDatabase.orderBooks = new ConcurrentHashMap<>();
    }

    @Test
    public void shouldCalculateThePriceForTheRequesterQuantityAndSide() {

        OrderHandler orderHandler = OrderHandler.createInstance();

        ExampleData.buildExampleOrderBookFromReadMe(orderHandler);

        double sell6 = orderHandler.getCurrentPrice("MSFT", 6, Side.SELL);
        double sell17 = orderHandler.getCurrentPrice("MSFT", 17, Side.SELL);
        double sell30 = orderHandler.getCurrentPrice("MSFT", 30, Side.SELL);
        double buy10 = orderHandler.getCurrentPrice("MSFT", 10, Side.BUY);

        assertEquals("Sell price quantity 6", 19.0, sell6, 0);
        assertEquals("Sell price quantity 17", 19.588, sell17, 0.001);
        assertEquals("Sell price quantity 30", 20.233, sell30, 0.001);
        assertEquals("Buy price quantity 10", 10.0, buy10, 0.001);
    }

    @Test
    public void shouldBeThreadSafe() {

        /*
            In the beginning none of the methods had the synchronized keyword.
            I used thread-safe datastructures, but I knew it was not enough.
            Creating this test proved that I was right, as there was a race condition between the two threads,
            which one will create the orderBook first. As a result, I was getting
            OrderBookRepositoryException("Cannot create order book for MSFT,as it already exists")

            Then I used the synchronized keyword in the handler and the test was running successfully.
            Then I added the synchronized keyword in the OrderBookServiceImpl to make sure that any orderbook operations are thread-safe as well.
            Advice, add in the first line of the OrderHandlerImpl.addOrder method the following bit to help you visualise the order of the thread execution:
            System.out.println("id:" + order.getOrderId());
         */

        OrderHandler orderHandler = OrderHandler.createInstance();

        boolean interruptedExceptionHappened = false;
        AtomicBoolean interruptedExceptionHappened1 = new AtomicBoolean(false);
        AtomicBoolean interruptedExceptionHappened2 = new AtomicBoolean(false);

        Thread t1 = new Thread(() -> {
            try {
                System.out.println("thread 1 is executing");
                for (long i = 1; i < 100; i++) {
                    orderHandler.addOrder(new Order(i, "MSFT", Side.SELL, 19, 8));
                }
                System.out.println(orderHandler.getCurrentPrice("MSFT", 200, Side.SELL));
                System.out.println("thread 1 finished");
            } catch (RuntimeException ex) {
                interruptedExceptionHappened1.set(true);
            }

        });

        Thread t2 = new Thread(() -> {
            try {
                System.out.println("thread 2 is executing");
                for (long i = 100; i < 200; i++) {
                    orderHandler.addOrder(new Order(i, "MSFT", Side.SELL, 19, 8));
                }
                System.out.println(orderHandler.getCurrentPrice("MSFT", 200, Side.SELL));
                System.out.println("thread 2 finished");
            } catch (RuntimeException ex) {
                interruptedExceptionHappened2.set(true);
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (Exception ex) {
            System.out.println("Interrupted");
            interruptedExceptionHappened = true;
        }

        assertFalse(interruptedExceptionHappened);
        assertFalse(interruptedExceptionHappened1.get());
        assertFalse(interruptedExceptionHappened2.get());
    }
}
