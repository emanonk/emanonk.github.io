import service.BasketReaderServiceImpl;
import service.RuleConfigurationServiceImpl;

import java.io.FileNotFoundException;

public class Main {

    public static void main(String[] args) throws FileNotFoundException {
        System.out.println("Application starts");
        RuleConfigurationServiceImpl service = new RuleConfigurationServiceImpl();

        service.readConfig();

        BasketReaderServiceImpl se =
                 new BasketReaderServiceImpl();

        se.readBasket();
    }
}
