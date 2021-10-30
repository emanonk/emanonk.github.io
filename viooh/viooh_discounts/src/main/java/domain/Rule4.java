package domain;

import domain.utils.FindElementsInArray;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Rule4 extends DiscountRule {

    private String requiredItemId;
    private Integer requiredItemQuantity;
    private String freeItemId;
    private Integer freeItemQuantity;

    @Override
    public Integer[] applyRule(CheckoutItem[] basket) {

        List<Integer> foundElements = FindElementsInArray.findANumberOfElementsInArray(basket, requiredItemQuantity, requiredItemId);

        if (foundElements.isEmpty()) {
            return new Integer[0];
        }

        List<Integer> eligibleItemIndexesForDiscount = FindElementsInArray.findAllOfElementsInArray(basket, freeItemQuantity, freeItemId);

        if (eligibleItemIndexesForDiscount.isEmpty()) {
            return new Integer[0];
        }

        foundElements.stream().forEach(index -> {
            basket[index].setIsRequiredForOffer(true);
        });

        eligibleItemIndexesForDiscount.stream().forEach(index -> {
            basket[index].setIsRequiredForOffer(true);
            basket[index].setDiscount(basket[index].getPrice());
        });


        return Stream.of(foundElements, eligibleItemIndexesForDiscount)
                .flatMap(Collection::stream)
                .collect(Collectors.toList())
                .toArray(Integer[]::new);
    }
}
