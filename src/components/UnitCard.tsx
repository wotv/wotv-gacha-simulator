import React from "react";
import {Space} from "antd";
import {Unit} from "../data/units";

interface UnitCardProps {
    unit: Unit;
    width?: number | string;
    showBackgroundColor?: boolean;
}

const rankColorMap: {[k: string]: string} = {
    UR: "mediumpurple",
    MR: "darkseagreen",
    SR: "gold",
    R: "silver"
};

const UnitCard: React.FC<UnitCardProps & React.HTMLAttributes<HTMLElement>> = ({unit, width, showBackgroundColor}) => (
    <Space direction={"vertical"}
           size={3}
           align="center"
           style={{
               width: width,
               wordBreak: "keep-all",
               background: showBackgroundColor ? rankColorMap[unit.rank] : "unset",
               fontWeight: "bold"
           }}>
        <img src={process.env.PUBLIC_URL + unit.imageUrl} alt={unit.name} style={{width, height: width!}}/>
        <span>{unit.name}</span>
    </Space>
);

UnitCard.defaultProps = {
    width: "unset",
    showBackgroundColor: false,
};

export default UnitCard;