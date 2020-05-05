import React from "react";
import {Space} from "antd";
import {Unit} from "../data/units";

interface UnitCardProps {
    unit: Unit;
    count?: number;
    width?: number | string;
    showBackgroundColor?: boolean;
}

const rankColorMap: {[k: string]: string} = {
    UR: "mediumpurple",
    MR: "darkseagreen",
    SR: "gold",
    R: "silver"
};

const UnitCard: React.FC<UnitCardProps & React.HTMLAttributes<HTMLElement>> = ({unit, count, width, showBackgroundColor}) => (
    <Space direction={"vertical"}
           size={3}
           align="center"
           style={{
               width: width,
               wordBreak: "keep-all",
               background: showBackgroundColor ? rankColorMap[unit.rank] : "unset",
               fontWeight: "bold"
           }}>
        <div style={{position: "relative"}}>
            <img src={process.env.PUBLIC_URL + unit.imageUrl} alt={unit.name} style={{width, height: width!}}/>
            {
                count ?
                    <span style={{position: "absolute", background: "white", padding: "2px 6px", margin: 4, right: 0, top: 0, borderRadius: 6}}>x{count}</span>
                    : <></>
            }
        </div>
        <span>{unit.name}</span>
    </Space>
);

UnitCard.defaultProps = {
    width: "unset",
    showBackgroundColor: false,
};

export default UnitCard;