package com.cmcmarkets.cmcdevelopmenttask.exception;

public class OrderHandlerException extends RuntimeException{
    public OrderHandlerException(String errorMessage) {
        super(errorMessage);
    }
}
