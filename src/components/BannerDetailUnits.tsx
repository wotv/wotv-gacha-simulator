import _ from "lodash";
import {SummonInfo} from "../data/banners";
import {Divider} from "antd";
import React from "react";

interface BannerDetailUnitsProps {
    summonInfos: SummonInfo[];
}

const orders = ["UR", "MR", "SR", "R", "N"];
const sortUnitsByRank = (units: SummonInfo[]) => {
    return _.sortBy(units, (item) =>
        _.indexOf(orders, item.unit.rank as any)
    );
};

const BannerDetailUnits: React.FC<BannerDetailUnitsProps & React.HTMLAttributes<HTMLElement>> = ({summonInfos}) => {
    return <>
        {
            _.entries<SummonInfo[]>(_.groupBy(sortUnitsByRank(summonInfos), "unit.rank"))
                .map(([rank, summonInfos], index) => (
                    <div key={index}>
                        <Divider>
                            {rank}
                        </Divider>
                        {summonInfos.map(({unit: {name}, pickUp, pullRate}, index) =>
                            <div key={index}>
                                {name} {pickUp ? <span style={{color: "green"}}>[픽업]</span> : ""} - {pullRate}%
                            </div>
                        )}
                    </div>
                ))
        }
    </>
};

export default BannerDetailUnits;