import React from "react";
import fp from "lodash/fp";
import {Rank, Unit} from "../data/units";
import UnitCard from "./UnitCard";
import {Badge, Col} from "antd";

interface SummonResultListMergedProps {
    units: Unit[];
    showColor: boolean;
}

const sortOrders = {
    [Rank.UR]: 0,
    [Rank.MR]: 1,
    [Rank.SR]: 2,
    [Rank.R]: 3,
    [Rank.N]: 4
};

const SummonResultListMerged: React.FC<SummonResultListMergedProps & React.HTMLAttributes<HTMLElement>> = ({units, showColor}) => (
    <>
        {
            fp.pipe(
                fp.groupBy<Unit>("key"),
                fp.entries,
                fp.sortBy(([, units]) => sortOrders[units[0].rank as Rank]),
                fp.map(([key, units]) =>
                    (
                        <Col key={key} xs={12} md={6} lg={6} xl={4}>
                            <UnitCard unit={units[0]}
                                      count={units.length}
                                      width={120}
                                      showBackgroundColor={showColor}/>
                        </Col>
                    ))
            )(units)
        }
    </>
);

export default SummonResultListMerged;