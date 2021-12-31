package com.cmcmarkets.cmcdevelopmenttask.model;

public class OrderBookRecord {

    private int orderCount;
    private int quantity;
    private int price;

    public OrderBookRecord(int orderCount, int quantity, int price) {
        this.orderCount = orderCount;
        this.quantity = quantity;
        this.price = price;
    }

    public int getOrderCount() {
        return orderCount;
    }

    public void setOrderCount(int orderCount) {
        this.orderCount = orderCount;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

}
