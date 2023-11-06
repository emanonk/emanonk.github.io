package domain;

import domain.utils.FindElementsInArray;
import lombok.*;

import java.math.BigDecimal;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Rule1 extends DiscountRule {

    private Integer numberOfElements;

    @Override
    public Integer[] applyRule(CheckoutItem[] basket) {

        Map<BigDecimal, Long> collect = Arrays.stream(basket)
                .filter(items -> !items.getIsRequiredForOffer())
                .map(CheckoutItem::getPrice)
                .collect(
                        Collectors.groupingBy(
                                Function.identity(), Collectors.counting()
                        )
                );

        Map<BigDecimal, Long> collect1 = collect.entrySet()
                .stream()
                .filter(entry -> entry.getValue() >= numberOfElements)
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

        if (collect1.isEmpty()) {
            return new Integer[0];
        }

        BigDecimal samePrice = collect1.keySet().stream()
                .findFirst()
                .get();

        List<Integer> foundElements = FindElementsInArray.findANumberOfElementsInArrayWithSamePrice(basket, numberOfElements, samePrice);

        if (foundElements.isEmpty()) {
            return new Integer[0];
        }

        Integer indexOfFirstItem = foundElements.get(0);
        Integer indexOfSecondItem = foundElements.get(1);
        Integer indexOfThirdItem = foundElements.get(2);

        basket[indexOfFirstItem].setIsRequiredForOffer(true);
        basket[indexOfSecondItem].setIsRequiredForOffer(true);

        basket[indexOfSecondItem].setIsRequiredForOffer(true);
        basket[indexOfThirdItem].setDiscount(basket[indexOfThirdItem].getPrice());

        return new Integer[] {indexOfFirstItem,indexOfSecondItem, indexOfThirdItem};
    }
}
