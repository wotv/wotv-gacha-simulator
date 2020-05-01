import {Col, Layout, Row} from "antd";
import React from "react";
import BannerCard from "./BannerCard";
import {Banner} from "../data/banners";

interface BannerTableViewProps {
    banners: Banner[];
    selectedBanner?: Banner | null;
    gutter?: number | [number, number];
    cols?: number;
    onClickSelect: (banner: Banner | null) => void;
}

const BannerTableView: React.FC<BannerTableViewProps & React.HTMLAttributes<HTMLElement>> = ({
    banners,
    selectedBanner,
    gutter,
    cols,
    onClickSelect,
    ...attributes
}) => (
    <Layout {...attributes} style={{overflowY: "scroll", overflowX: "hidden"}}>
        <Row gutter={gutter}>
            {banners.map(banner =>
                <Col span={24 / cols!}>
                    <BannerCard banner={banner}
                                selected={banner.key === selectedBanner?.key}
                                onBannerClick={onClickSelect}/>
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