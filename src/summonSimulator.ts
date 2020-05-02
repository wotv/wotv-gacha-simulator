import {Banner, SummonInfo} from "./data/banners";
import _ from "lodash";

type PullTableEntry = {
    score: number,
    name: string
};

interface InitPullRatesTableParams {
    pullTable: PullTableEntry[];
    pullRateSelector: (summonInfo: SummonInfo) => number;
    summonInfos: SummonInfo[];
}

export class SummonSimulator {
    private currentIndex = 0;
    private summonInfosAll: SummonInfo[] = [];
    private pullTable: PullTableEntry[] = [];
    private pullTable10th: PullTableEntry[] = [];

    constructor(
        private banner: Banner,
        private unitCount: number,
        private times: number = 1
    ) {
        this.initPullRatesTables();
    }

    *summon() {
        while (!this.isFinished()) {
            yield this.getRandomUnits();
            this.currentIndex += this.unitCount;
        }
    }

    private isFinished() {
        return this.currentIndex >= this.unitCount * this.times;
    }

    private getRandomUnits() {
        return _.range(1, this.unitCount + 1).map((summonNumber) => {
            // 10회 소환 마지막 -> MR 확정
            return this.unitCount === 10 && summonNumber === 10
                ? this.getRandomUnit(this.summonInfos10th, this.pullTable10th, this.maxScore10th)
                : this.getRandomUnit(this.summonInfosAll, this.pullTable, this.maxScore);
        });
    }

    private getRandomUnit(summonInfos: SummonInfo[], pullTable: PullTableEntry[], maxScore: number) {
        const score = Math.random() * maxScore;
        const target = _.find(pullTable, ({score: targetScore}) => score < targetScore);

        return _.find(summonInfos, ["unit.name", target?.name]);
    }

    private initPullRatesTables() {
        this.summonInfosAll = [...this.banner.units, ...this.banner.cards];

        this.initPullRatesTable({
            pullTable: this.pullTable,
            summonInfos: this.summonInfosAll,
            pullRateSelector: s => s.pullRate,
        });

        this.initPullRatesTable({
            pullTable: this.pullTable10th,
            summonInfos: this.summonInfos10th,
            pullRateSelector: s => s.pullRate10th!,
        });
    }

    private initPullRatesTable(
        {pullTable, pullRateSelector, summonInfos}: InitPullRatesTableParams
    ) {
        let accScore = 0;
        summonInfos.forEach(summonInfo => {
            accScore += pullRateSelector(summonInfo);

            pullTable.push({
                name: summonInfo.unit.name,
                score: accScore
            });
        });
    }

    private get summonInfos10th() {
        return _.filter(this.summonInfosAll, s => _.has(s, "pullRate10th"));
    }

    private get maxScore() {
        return _.last(this.pullTable)?.score!;
    }

    private get maxScore10th() {
        return _.last(this.pullTable10th)?.score!;
    }
}