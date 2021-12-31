package com.cmcmarkets.cmcdevelopmenttask.exception;

public class OrderRepositoryException extends RuntimeException{
    public OrderRepositoryException(String errorMessage) {
        super(errorMessage);
    }
}
