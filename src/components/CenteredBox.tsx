import {Col, Row} from "antd";
import React from "react";

interface CenteredBoxProps {
}

const CenteredBox: React.FC<CenteredBoxProps & React.HTMLAttributes<HTMLElement>> = ({children, ...attributes}) => (
    <Row align="middle" {...attributes}>
        <Col span={24}>
            {children}
        </Col>
    </Row>
);

export default CenteredBox;
