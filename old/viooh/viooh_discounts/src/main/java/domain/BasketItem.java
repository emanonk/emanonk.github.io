package domain;

import com.univocity.parsers.annotations.*;
import java.math.BigDecimal;


public class BasketItem {

    @Trim
    @Parsed (field = "item-id")
    private String itemId;
    @Parsed (field = "group-id")
    private String groupId;
    @Parsed
    private Integer quantity;
    @Parsed
    private BigDecimal price;

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
