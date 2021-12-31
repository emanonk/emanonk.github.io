package com.cmcmarkets.cmcdevelopmenttask.exception;

public class OrderValidationException extends RuntimeException{
    public OrderValidationException(String errorMessage) {
        super(errorMessage);
    }
}
