package service;

import com.univocity.parsers.common.processor.BeanListProcessor;
import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;
import domain.BasketItem;

import java.io.*;
import java.math.BigDecimal;
import java.util.List;

public class BasketReaderServiceImpl {

    public BasketReaderServiceImpl() {
    }


    public static Reader getReader(String relativePath) throws FileNotFoundException {

        FileInputStream file = new FileInputStream(relativePath);
        try {
            return new InputStreamReader(file, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new IllegalStateException("Unable to read input", e);
        }
    }
    public void readBasket() throws FileNotFoundException {


        CsvParserSettings parserSettings = new CsvParserSettings();

//You can configure the parser to automatically detect what line separator sequence is in the input
        parserSettings.setLineSeparatorDetectionEnabled(true);

// A RowListProcessor stores each parsed row in a List.
        BeanListProcessor<BasketItem> rowProcessor = new BeanListProcessor<BasketItem>(BasketItem.class);

// You can configure the parser to use a RowProcessor to process the values of each parsed row.
// You will find more RowProcessors in the 'com.univocity.parsers.common.processor' package, but you can also create your own.
        parserSettings.setProcessor(rowProcessor);

// Let's consider the first parsed row as the headers of each column in the file.
        parserSettings.setHeaderExtractionEnabled(true);

// creates a parser instance with the given settings
        CsvParser parser = new CsvParser(parserSettings);

// the 'parse' method will parse the file and delegate each parsed row to the RowProcessor you defined
        parser.parse(getReader("C:\\Users\\manos\\git_repos\\viooh_discounts\\src\\test\\resources\\basket.csv"));

// get the parsed records from the RowListProcessor here.
// Note that different implementations of RowProcessor will provide different sets of functionalities.
        String[] headers = rowProcessor.getHeaders();
        List<BasketItem> rows = rowProcessor.getBeans();

        System.out.println(rows);

        BigDecimal bigDecimal = rows.get(0).getPrice().add(BigDecimal.TEN);
        System.out.println(bigDecimal);
    }
}
