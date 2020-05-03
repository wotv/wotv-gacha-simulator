import {Col, Layout, Row} from "antd";
import React from "react";
import BannerCard from "./BannerCard";
import {Banner} from "../data/banners";

interface BannerTableViewProps {
    banners: Banner[];
    selectedBanner?: Banner | null;
    gutter?: number | [number, number];
    onClickSelect: (banner: Banner | null) => void;
}

const BannerTableView: React.FC<BannerTableViewProps & React.HTMLAttributes<HTMLElement>> = ({
    banners,
    selectedBanner,
    gutter,
    onClickSelect,
    ...attributes
}) => (
    <div id="bannerTableViewWrap">
        <Layout {...attributes} style={{overflowY: "scroll", overflowX: "hidden"}}>
            <Row gutter={gutter}>
                {banners.map(banner =>
                    <Col xs={24} md={12} lg={8} xxl={6} key={banner.key}>
                        <BannerCard banner={banner}
                                    selected={banner.key === selectedBanner?.key}
                                    onBannerClick={onClickSelect}/>
                    </Col>
                )}
            </Row>
        </Layout>
    </div>
);

BannerTableView.defaultProps = {
    gutter: [16, 16]
};

export default BannerTableView;