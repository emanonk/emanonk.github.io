package domain;

import domain.utils.FindElementsInArray;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Rule3 extends DiscountRule {

    @Override
    public Integer[] applyRule(CheckoutItem[] basket) {

        //get list of groups with products more than 3
        //map<groupid,list<Checkoutitem>
        //order the indivituals lists of checkouitems by price
        //get the list that the 3rd product is the most expensive -- this is the group we will go for

        //we have the group. find the indexes of groupid/itemid and apply the discount

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
