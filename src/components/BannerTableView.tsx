import {Card, Col, Layout, Row} from "antd";
import React from "react";
import BannerCard from "./BannerCard";
import {Banner} from "../data/banners";

interface BannerTableViewProps {
    gutter?: number | [number, number];
    cols?: number;
    banners: Banner[];
}

const BannerTableView: React.FC<BannerTableViewProps & React.HTMLAttributes<HTMLElement>> = ({
    banners,
    gutter,
    cols,
    ...attributes
}) => (
    <Layout {...attributes} style={{overflowY: "scroll", overflowX: "hidden"}}>
        <Row gutter={gutter}>
            {banners.map(banner =>
                <Col span={24 / cols!}>
                    <BannerCard banner={banner} onClick={() => {}}/>
                </Col>
            )}
        </Row>
    </Layout>
);

BannerTableView.defaultProps = {
    gutter: [16, 16],
    cols: 2
};

export default BannerTableView;