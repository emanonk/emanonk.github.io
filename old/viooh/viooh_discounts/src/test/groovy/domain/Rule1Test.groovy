package domain

import spock.lang.Specification

class Rule1Test extends Specification {

    RuleExecutor rule = new Rule1(3);

    def "the right indexes of the checkout items are returned"() {
        given: "an array of checkout items"
        CheckoutItem[] basket = [
                ["itemId1", "group1", BigDecimal.TEN],
                ["itemId2", "group2", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE]
        ]

        when: "the rule is applied"
        Integer[] appliedIndexes = rule.applyRule(basket)

        then: "the right indexes are returned"
        appliedIndexes.length == 3
        appliedIndexes[0] == 1
        appliedIndexes[1] == 2
        appliedIndexes[2] == 3
        basket[appliedIndexes[2]].getDiscount() == BigDecimal.ONE

    }

    def "no indexes are returned when the rules can not be applied"() {
        given: "an array of checkout items"
        CheckoutItem[] basket = [
                ["itemId2", "group2", BigDecimal.ONE]
        ]

        when: "the rule is applied"
        Integer[] appliedIndexes = rule.applyRule(basket)

        then: "no indexes are returned"
        appliedIndexes.length == 0

    }
}
