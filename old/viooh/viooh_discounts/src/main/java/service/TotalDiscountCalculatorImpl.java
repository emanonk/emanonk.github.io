package service;

import domain.CheckoutItem;

import java.math.BigDecimal;
import java.util.Arrays;

public class TotalDiscountCalculatorImpl {

    public TotalDiscountCalculatorImpl() {
    }

    public BigDecimal calculate(CheckoutItem[] basket) {
        return Arrays.stream(basket)
                .map(CheckoutItem::getDiscount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

//    public BigDecimal calculate(CheckoutItem[] basket) {
//        return Arrays.stream(basket)
//                .map(item ->
//                        item.getPrice().subtract(item.getDiscount()))
//                .reduce(BigDecimal.ZERO, BigDecimal::add);
//    }
}
