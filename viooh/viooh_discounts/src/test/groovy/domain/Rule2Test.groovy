package domain

import spock.lang.Specification


class Rule2Test extends Specification {

    RuleExecutor rule = new Rule2("itemId1", "1.80");

    def "the right indexes of the checkout items are returned"() {
        given: "an array of checkout items"
        CheckoutItem[] basket = [
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId2", "group2", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE]
        ]

        when: "the rule is applied"
        Integer[] appliedIndexes = rule.applyRule(basket)

        then: "the right indexes are returned"
        appliedIndexes.length == 2
        appliedIndexes[0] == 0
        appliedIndexes[1] == 2
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
