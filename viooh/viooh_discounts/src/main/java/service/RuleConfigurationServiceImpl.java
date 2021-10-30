package service;

import com.google.gson.Gson;
import domain.RuleConfiguration;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class RuleConfigurationServiceImpl {

    public RuleConfigurationServiceImpl() {
    }

    public void readConfig() {
        Gson gson = new Gson();

        try (BufferedReader br = new BufferedReader(
                new FileReader("C:\\Users\\manos\\git_repos\\viooh_discounts\\src\\test\\resources\\rules.json"))) {
            RuleConfiguration ruleConfiguration = gson.fromJson(br, RuleConfiguration.class);

            System.out.println(ruleConfiguration);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
