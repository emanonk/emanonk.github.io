package com.cmcmarkets.cmcdevelopmenttask.service;

import com.cmcmarkets.cmcdevelopmenttask.Order;
import com.cmcmarkets.cmcdevelopmenttask.OrderModification;

public interface OrderValidationService {

    void validateNewOrder(Order order);

    void validateModification(OrderModification orderModification);

}
