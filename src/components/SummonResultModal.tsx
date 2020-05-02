import {Unit} from "../data/units";
import React, {useState} from "react";
import {Col, Divider, Modal, Row, Space} from "antd";
import {Checkbox} from "antd/es";
import _ from "lodash";
import UnitCard from "./UnitCard";

interface SummonResultModalProps {
    units: Unit[];
    visible: boolean;
    handleClose: () => void;
    showDivider?: boolean;
    dividerSize?: number;
}

const renderResultList = (units: Unit[], showColor: boolean) => <>
    {
        _.map(units, (unit, index) => (
            <Col key={index} span={4}>
                <UnitCard unit={unit} width={120} showBackgroundColor={showColor}/>
            </Col>
        ))
    }
</>;

const SummonResultModal: React.FC<SummonResultModalProps & React.HTMLAttributes<HTMLElement>> = ({units, visible, handleClose, showDivider, dividerSize}) => {
    const [showColor, toggleShowColor] = useState(true);

    return (
        <Modal title="소환 결과"
               visible={visible}
               width={1000}
               onCancel={handleClose}
               cancelText="닫기"
               okButtonProps={{style: {display: "none"}}}
        >
            <Space direction="vertical" size={8}>
                <div>
                    <Checkbox checked={showColor} onChange={e => toggleShowColor(e.target.checked)}>등급별 색상표시</Checkbox>
                </div>
                <Row gutter={[4, 16]}>
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
                </Row>
            </Space>
        </Modal>
    );
};

export default SummonResultModal;