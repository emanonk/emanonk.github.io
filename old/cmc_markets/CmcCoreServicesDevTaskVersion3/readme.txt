

Requirements
1)  Orders may be removed and the price/quantity of an order may be changed after creation
2)  An order book level is the total quantity of all orders with the same price and side for a given financial instrument.
3)  Each Level has the price and the total size of all orders at that price.
4)  It is common for new price levels to be created during the day as the stock price moves.
5)  A typical order might have 4 or more modifications applied to it before being removed. 
6)  addOrder, modifyOrder, and removeOrder should all update the internal state of your OrderHandler and should be thread safe. 
7)  getCurrentPrice should return the best available average price for the given symbol, quantity and side.
8)  The best price is obtained from first order book level (Level 1). If the total quantity in Level 1 is less that the requested quantity, we must go to the next level and calculate the average price.
9)  The price is getting worse as the quantity increases (from the point of view of a prospective buyer).
10) Assume that getCurrentPrice will always be called with a quantity that can be filled by the current order book. F
11) While the order price is an int, the getCurrentPrice method returns a double. 

- I didn't move some classes to a dao package, as I guess you will run some tests for my code and I didnt want to break the packages
- I thought to add an integer in the signature OrderBookService.calculateCurrentPrice(SortedMap orderBookRecords, int quantity, countIterations)
  in order to test that the OrderBookService.calculateCurrentPrice doesn't loop through all orders every time is called.
  At the end I decided to keep the code clean as it is obvious that the algorithm used in the calculateCurrentPrice loops while the condition is satisfied.
- I didnt wrap the OrderRepository in to a OrderService as the business logic of the OrderService would be very little.
- I regret that I didnt use the Spock framework from the beginning, I saw the junit 4, and I thought lets try with this.

Lack of time:
- Due to lack of time I didnt use Mockito for testing the order/number of the calls
- Due to lack of time I wrote integration tests(using the MockDatabase) for the OrderHandler instead of Mocking the right services.