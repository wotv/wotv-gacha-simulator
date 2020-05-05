import {Unit} from "../data/units";
import React, {useState} from "react";
import {Col, Divider, Modal, Row, Space} from "antd";
import {Checkbox} from "antd/es";
import _ from "lodash";
import UnitCard from "./UnitCard";
import SummonResultList from "./SummonResultList";
import SummonResultListMerged from "./SummonResultListMerged";

interface SummonResultModalProps {
    units: Unit[];
    visible: boolean;
    handleClose: () => void;
    showDivider: boolean;
    dividerSize: number;
}

const SummonResultModal: React.FC<SummonResultModalProps & React.HTMLAttributes<HTMLElement>> = ({units, visible, handleClose, showDivider, dividerSize}) => {
    const [showColor, toggleShowColor] = useState(true);
    const [mergingSameUnit, toggleMergingSameUnit] = useState(true);

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
                    <Checkbox checked={mergingSameUnit} onChange={e => toggleMergingSameUnit(e.target.checked)}>같은 유닛 모아보기</Checkbox>
                </div>
                <Row gutter={[4, 16]}>
                    {
                        mergingSameUnit
                            ? <SummonResultListMerged units={units}
                                                      showColor={showColor}/>
                            : <SummonResultList units={units}
                                                showColor={showColor}
                                                showDivider={showDivider}
                                                dividerSize={dividerSize}/>

                    }
                </Row>
            </Space>
        </Modal>
    );
};

export default SummonResultModal;