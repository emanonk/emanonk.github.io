package domain;

import lombok.*;

import java.math.BigDecimal;

@NoArgsConstructor
@Getter
@Setter
public class CheckoutItem {

    private String itemId;
    private String groupId;
    private BigDecimal price;
    private BigDecimal discount;
    private Boolean isRequiredForOffer;

    public CheckoutItem(String itemId, String groupId, BigDecimal price) {
        this.itemId = itemId;
        this.groupId = groupId;
        this.price = price;
        this.isRequiredForOffer = false;
    }
}
