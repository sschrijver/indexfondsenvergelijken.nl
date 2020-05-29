import funds from "../data/funds.json";
import {Fund} from "./Fund";

export class FundRepository {
    public getAll(): Array<Fund> {
        return funds.map(function (data: any): Fund {
            return new Fund(
                data.name,
                data.symbol,
                data.isin,
                data.totalExpenseRatio,
                data.dividendLeakage
            );
        })
    }
}
