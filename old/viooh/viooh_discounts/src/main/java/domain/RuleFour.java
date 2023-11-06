package domain;

public class RuleFour extends DiscountRule implements RuleExecutor{

    @Override
    public Integer[] applyRule(CheckoutItem[] basket) {
        return new Integer[0];
    }
}
