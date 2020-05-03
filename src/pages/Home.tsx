import React, {useEffect} from 'react';
import '../styles/common.css';
import 'antd/dist/antd.css';
import {Col, Empty, Layout, PageHeader, Row, Space} from 'antd';
import CenteredBox from "../components/CenteredBox";
import BannerDetail from "../components/BannerDetail";
import BannerTableView from "../components/BannerTableView";
import {useDispatch, useSelector} from "react-redux";
import {
    clearPulledUnits,
    loadBanners,
    selectBanners,
    selectModalVisible,
    selectPulledUnits,
    selectSelectedBanner, selectSummonInfo,
    setSelectedBanner,
    setVisible
} from "../store";
import {Banner, getBanners} from "../data/banners";
import SummonResultModal from "../components/SummonResultModal";

function Home() {
    const dispatch = useDispatch();
    const banners = useSelector(selectBanners);
    const selectedBanner = useSelector(selectSelectedBanner);
    const modalVisible = useSelector(selectModalVisible);
    const summonInfo = useSelector(selectSummonInfo);
    const pulledUnits = useSelector(selectPulledUnits);

    const showDivider = summonInfo.unitCount === 10 && summonInfo.times > 1;

    useEffect(() => {
        dispatch(loadBanners(getBanners()));
    }, [dispatch]);

    const selectBanner = (banner: Banner | null) => {
        dispatch(setSelectedBanner(banner));

        if (banner) {
            document.querySelector("#bannerDetail")?.scrollIntoView({behavior: "smooth"});
        }
    };

    const toggleModal = (show: boolean) => {
        dispatch(setVisible(show));
    };

    const closeModal = () => {
        dispatch(clearPulledUnits());
        toggleModal(false);
    };

    return (
        <Layout className="page-wrapper">
            <Space direction="vertical" size="large">
                <PageHeader
                    title="WOTV 소환 시뮬레이터"
                    ghost={false}
                />
                <Layout>
                    <Row gutter={[24, 0]}>
                        <Col xl={17} xs={24}>
                            <BannerTableView banners={banners}
                                             selectedBanner={selectedBanner}
                                             onClickSelect={selectBanner}
                                             style={{height: "80vh"}}/>
                        </Col>
                        <Col xl={7} xs={24}>
                            <div id="bannerDetail">
                            {
                                selectedBanner
                                    ? <BannerDetail banner={selectedBanner}
                                                    style={{
                                                        background: "white"
                                                    }}/>
                                    : <CenteredBox style={{
                                        overflowY: "scroll",
                                        background: "white"
                                    }}>
                                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>소환 배너를 선택하세요.</span>}/>
                                    </CenteredBox>
                            }
                            </div>
                        </Col>
                    </Row>
                </Layout>
            </Space>
            <SummonResultModal units={pulledUnits}
                               showDivider={showDivider}
                               dividerSize={10}
                               handleClose={closeModal}
                               visible={modalVisible}/>
        </Layout>
    );
}

export default Home;
