package domain

import spock.lang.Specification

class Rule4Test extends Specification {

    RuleExecutor rule = new Rule4("itemId1", 3,"itemId2",2);

    def "all items found"() {
        given: "an array of checkout items"
        CheckoutItem[] basket = [
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId2", "group2", BigDecimal.ONE],
                ["itemId2", "group2", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE]
        ]

        when: "the rule is applied"
        Integer[] appliedIndexes = rule.applyRule(basket)

        then: "the right indexes are returned"
        appliedIndexes.length == 5

    }

    def "some items found"() {
        given: "an array of checkout items"
        CheckoutItem[] basket = [
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId2", "group2", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE]
        ]

        when: "the rule is applied"
        Integer[] appliedIndexes = rule.applyRule(basket)

        then: "the right indexes are returned"
        appliedIndexes.length == 4

    }

    def "no items found"() {
        given: "an array of checkout items"
        CheckoutItem[] basket = [
                ["itemId3", "group1", BigDecimal.ONE],
                ["itemId2", "group2", BigDecimal.ONE],
                ["itemId3", "group1", BigDecimal.ONE],
                ["itemId3", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE]
        ]

        when: "the rule is applied"
        Integer[] appliedIndexes = rule.applyRule(basket)

        then: "the right indexes are returned"
        appliedIndexes.length == 0

    }

    def "no items found 2"() {
        given: "an array of checkout items"
        CheckoutItem[] basket = [
                ["itemId3", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE],
                ["itemId1", "group1", BigDecimal.ONE]
        ]

        when: "the rule is applied"
        Integer[] appliedIndexes = rule.applyRule(basket)

        then: "the right indexes are returned"
        appliedIndexes.length == 0

    }
}
