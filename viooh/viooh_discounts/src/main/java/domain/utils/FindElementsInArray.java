package domain.utils;

import domain.CheckoutItem;

import java.math.BigDecimal;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FindElementsInArray {


    public static List<Integer> findANumberOfElementsInArrayWithSamePrice(CheckoutItem[] basket, Integer numberOfElements, BigDecimal price) {

        List<Integer> result = new ArrayList<>();

        Integer startingIndex = 0;

        for (int i = 0; i < numberOfElements; i++) {
            Integer foundIndex = findNextElement(basket, startingIndex, price);
            if (Objects.nonNull(foundIndex)) {
                result.add(foundIndex);
                startingIndex = ++foundIndex;
            } else {
                return Collections.emptyList();
            }
        }

        return result;
    }

    public static List<Integer> findANumberOfElementsInArray(CheckoutItem[] basket, Integer numberOfElements, String itemId) {

        List<Integer> result = new ArrayList<>();

        Integer startingIndex = 0;

        for (int i = 0; i < numberOfElements; i++) {
            Integer foundIndex = findNextElement(basket, startingIndex, itemId);
            if (Objects.nonNull(foundIndex)) {
                result.add(foundIndex);
                startingIndex = ++foundIndex;
            } else {
                return Collections.emptyList();
            }
        }

        return result;
    }

    public static List<Integer> findAllOfElementsInArray(CheckoutItem[] basket, Integer numberOfElements, String itemId) {

        List<Integer> result = new ArrayList<>();

        Integer startingIndex = 0;

        for (int i = 0; i < numberOfElements; i++) {
            Integer foundIndex = findNextElement(basket, startingIndex, itemId);
            if (Objects.nonNull(foundIndex)) {
                result.add(foundIndex);
                startingIndex = ++foundIndex;
            } else {
                break;
            }
        }

        return result;
    }

    private static Integer findNextElement(CheckoutItem[] basket, Integer startingIndex, String itemId) {
        for (int i = startingIndex; i < basket.length; i++) {
            if (basket[i].getItemId().equals(itemId)
                    && !basket[i].getIsRequiredForOffer()) {
                return i;
            }
        }
        return null;
    }

    private static Integer findNextElement(CheckoutItem[] basket, Integer startingIndex, BigDecimal price) {
        for (int i = startingIndex; i < basket.length; i++) {
            if (basket[i].getPrice().equals(price)
                    && !basket[i].getIsRequiredForOffer()) {
                return i;
            }
        }
        return null;
    }
}
