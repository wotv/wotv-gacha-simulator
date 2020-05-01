import React, {useState} from 'react';
import '../styles/common.css';
import 'antd/dist/antd.css';
import {PageHeader, Row, Col, Layout, Table, Space, Empty, Button, Card} from 'antd';
import BANNERS, {Banner} from "./data/banners";
import CenteredBox from "./components/CenteredBox";
import BannerDetail from "./components/BannerDetail";
import BannerTableView from "./components/BannerTableView";

const getColumns = (setSelectedBanner: Function) => [
    {
        title: "배너 이미지",
        dataIndex: "image",
        key: "image",
        render: (text: string, banner: Banner) =>
            <Layout style={{background: "inherits"}}>
                <img src={process.env.PUBLIC_URL + banner.image} alt={banner.name}/>
                <span>{banner.name}</span>
            </Layout>
    },
    {
        title: "선택",
        dataIndex: "",
        render: (banner: Banner) =>
            <Button type="primary" onClick={() => setSelectedBanner(banner)}>선택</Button>
    }
];

function Home() {
    const [selectedBanner, setSelectedBanner] = useState<Banner>();

    return (
        <Layout className="page-wrapper">
            <Space direction="vertical" size={"large"}>
                <PageHeader
                    title="WOTV 소환 시뮬레이터"
                    ghost={false}
                    style={{background: "lightgreen"}}
                />
                <Layout>
                    <Row gutter={[24, 0]}>
                        <Col span={17}>
                            <BannerTableView banners={BANNERS} cols={4} style={{height: "80vh"}}/>
                        </Col>

                        <Col span={7}>
                            {
                                selectedBanner
                                    ? <BannerDetail banner={selectedBanner}
                                                    style={{height: "70vh", background: "white"}}/>
                                    : <CenteredBox style={{height: "70vh", background: "white"}}>
                                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                                    </CenteredBox>
                            }
                        </Col>
                    </Row>
                </Layout>
            </Space>
        </Layout>
    );
}

export default Home;
