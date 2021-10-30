package domain;

import domain.utils.FindElementsInArray;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Rule2 extends DiscountRule {

    private String itemId;
    private String price;

    @Override
    public Integer[] applyRule(CheckoutItem[] basket) {

        List<Integer> foundElements = FindElementsInArray.findANumberOfElementsInArray(basket, 2, itemId);

        if (foundElements.isEmpty()) {
            return new Integer[0];
        }

        Integer indexOfFirstItem = foundElements.get(0);
        Integer indexOfSecondItem = foundElements.get(1);

        BigDecimal initialPackagePrice = basket[indexOfFirstItem].getPrice().multiply(new BigDecimal("2"));
        BigDecimal packageDiscountedPrice = initialPackagePrice.subtract(new BigDecimal(price));
        basket[indexOfFirstItem].setIsRequiredForOffer(true);

        basket[indexOfSecondItem].setIsRequiredForOffer(true);
        basket[indexOfSecondItem].setDiscount(packageDiscountedPrice);

        return new Integer[]{indexOfFirstItem, indexOfSecondItem};
    }
}
