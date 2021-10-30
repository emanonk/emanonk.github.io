package domain;

public interface RuleExecutor {

    Integer[] applyRule(CheckoutItem[] basket);

}
