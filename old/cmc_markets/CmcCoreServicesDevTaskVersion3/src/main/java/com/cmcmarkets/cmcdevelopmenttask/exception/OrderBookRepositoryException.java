package com.cmcmarkets.cmcdevelopmenttask.exception;

public class OrderBookRepositoryException extends RuntimeException{
    public OrderBookRepositoryException(String errorMessage) {
        super(errorMessage);
    }
}
