package service;

import domain.CheckoutItem;
import domain.DiscountRule;
import domain.RuleExecutor;

import java.math.BigDecimal;
import java.util.Arrays;

public class DiscountCalculatorServiceImpl {

    private RuleExecutor[] rules;
    private CheckoutItem[] basket;
    private BigDecimal maxDiscount;
    private TotalDiscountCalculatorImpl totalDiscountCalculator;

    public DiscountCalculatorServiceImpl(RuleExecutor[] rules, CheckoutItem[] basket, TotalDiscountCalculatorImpl totalDiscountCalculator) {
        this.rules = rules;
        this.basket = basket;
        this.totalDiscountCalculator = totalDiscountCalculator;
    }

    public BigDecimal getDiscount() {
        rec();
        return maxDiscount;
    }

    private void rec() {
        boolean isLeafNode = true;
        for (RuleExecutor rule : rules) {
            Integer[] newlyMarkedIndexes = getMarkedIndexesAfterApplyRule(rule);
            if (newlyMarkedIndexes.length > 0) {
                isLeafNode = false;
                rec();
                unMarkProductsWithRelatedDiscount(newlyMarkedIndexes);
            }
        }
        if (!isLeafNode) {
            return;
        }
        BigDecimal potentialMax = calculateTotalDiscounts();
        if (maxDiscount.compareTo(BigDecimal.ZERO) == 0) {
            maxDiscount = potentialMax;
        }
        if (maxDiscount.compareTo(potentialMax) < 0) {
            maxDiscount = potentialMax;
        }

    }

    private void unMarkProductsWithRelatedDiscount(Integer[] newlyMarkedIndexes) {
        Arrays.stream(newlyMarkedIndexes).forEach(nmi -> {
            basket[nmi].setDiscount(BigDecimal.ZERO);
            basket[nmi].setIsRequiredForOffer(false);
        });
    }

    private BigDecimal calculateTotalDiscounts() {
        return totalDiscountCalculator.calculate(basket);
    }

    public Integer[] getMarkedIndexesAfterApplyRule(RuleExecutor rule) {
        return rule.applyRule(basket);

    }

      /*
    Function rec(basket: integer[], marked: bool[], applied_rules: integer[], max_sum: integer, max_applied_rules: integer[], rules: Rule[]) {
  Is_leaf_node = true
  For rule in rules {
     Const newly_marked_indexes: integer[] = apply_rule(basket, marked, rule)
     If (newly_marked_indexes.length > 0) {
       Is_leaf_node = false
       For m in newly_marked { applied_rules[m] = rule.id } // markarisma
       For m in newly_marked { marked[m] = true } // markarisma
       rec(basket, marked, rules) // ena epipedo katw - kaname apply rule
       For m in newly_marked { marked[m] = false } // ksemarkarisma
       For m in newly_marked { applied_rules[m] = null } // ksemarkarisma
     }
  }
  // THA GINEI MONO STO TELEFTAIO EPIPEDO POU OLA TA RULES TELEIWSAN
  If (! is_leaf_node) { return }
  current_max = process_rules(basket, max_applied_rules)
  potential_max = process_rules(basket, applied_rules)
  If (current_max < potential_max) {
    Max_applied_rules.fill(applied_rules)
  }
}

     */
}
