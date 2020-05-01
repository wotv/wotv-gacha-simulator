import React, {useEffect} from 'react';
import '../styles/common.css';
import 'antd/dist/antd.css';
import {Col, Empty, Layout, PageHeader, Row, Space} from 'antd';
import CenteredBox from "../components/CenteredBox";
import BannerDetail from "../components/BannerDetail";
import BannerTableView from "../components/BannerTableView";
import {useDispatch, useSelector} from "react-redux";
import {loadBanners, selectBanners, selectSelectedBanner, setSelectedBanner} from "../store";
import {Banner, getBanners} from "../data/banners";

function Home() {
    const dispatch = useDispatch();
    const banners = useSelector(selectBanners);
    const selectedBanner = useSelector(selectSelectedBanner);

    useEffect(() => {
        dispatch(loadBanners(getBanners()));
    }, [dispatch]);

    const selectBanner = (banner: Banner | null) => {
        dispatch(setSelectedBanner(banner));
    };

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
                            <BannerTableView banners={banners}
                                             selectedBanner={selectedBanner}
                                             cols={4}
                                             onClickSelect={selectBanner}
                                             style={{height: "80vh"}}/>
                        </Col>
                        <Col span={7}>
                            {
                                selectedBanner
                                    ? <BannerDetail banner={selectedBanner}
                                                    style={{minHeight: "70vh", maxHeight: "70vh", overflowY: "scroll", background: "white"}}/>
                                    : <CenteredBox style={{minHeight: "70vh", maxHeight: "70vh", overflowY: "scroll", background: "white"}}>
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
