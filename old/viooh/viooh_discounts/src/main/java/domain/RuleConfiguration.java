package domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class RuleConfiguration {

    private List<Rule2> rule2List;
    private List<Rule4> rule4List;


}
