import _ from "lodash";
import {Col, Divider, Row} from "antd";
import React from "react";
import {Unit} from "../data/units";
import UnitCard from "./UnitCard";

interface SummonResultListProps {
    units: Unit[];
    showColor: boolean;
    showDivider: boolean;
    dividerSize: number;
}

const renderResultList = (units: Unit[], showColor: boolean) => <>
    {
        _.map(units, (unit, index) => (
            <Col key={index} xs={12} md={6} lg={6} xl={4}>
                <UnitCard unit={unit} width={120} showBackgroundColor={showColor}/>
            </Col>
        ))
    }
</>;

const SummonResultList: React.FC<SummonResultListProps & React.HTMLAttributes<HTMLElement>> = ({units, showColor, showDivider, dividerSize}) => (
    <>
        {
            (showDivider && dividerSize)
                ? _.chunk(units, dividerSize)
                    .map((subList, index) => <div key={index}>
                        <Divider>{index * dividerSize + 1} ~ {index * dividerSize + subList.length} 번째</Divider>
                        <Row gutter={[4, 16]}>
                            {renderResultList(subList, showColor)}
                        </Row>
                    </div>)
                : renderResultList(units, showColor)
        }
    </>
);

export default SummonResultList;