import React, {useEffect, useState} from 'react';
import '../styles/common.css';
import 'antd/dist/antd.css';
import {BackTop, Badge, Button, Col, Empty, Layout, PageHeader, Row, Space} from 'antd';
import CenteredBox from "../components/CenteredBox";
import BannerDetail from "../components/BannerDetail";
import BannerTableView from "../components/BannerTableView";
import {useDispatch, useSelector} from "react-redux";
import {
    clearPulledUnits,
    loadBanners,
    loadNotices,
    selectBanners,
    selectHasNewNotices,
    selectModalVisible,
    selectNotices,
    selectPulledUnits,
    selectSelectedBanner,
    selectSummonInfo,
    setSelectedBanner,
    setVisible,
    updateLastReadNoticeId
} from "../store";
import {Banner, getBanners} from "../data/banners";
import SummonResultModal from "../components/SummonResultModal";
import NoticeDrawer from "../components/noticeDrawer";
import {getNoticeItems} from "../data/notices";

function Home() {
    const [noticeOpened, toggleNoticeOpened] = useState(false);
    const dispatch = useDispatch();
    const notices = useSelector(selectNotices);
    const hasNewNotices = useSelector(selectHasNewNotices);
    const banners = useSelector(selectBanners);
    const selectedBanner = useSelector(selectSelectedBanner);
    const modalVisible = useSelector(selectModalVisible);
    const summonInfo = useSelector(selectSummonInfo);
    const pulledUnits = useSelector(selectPulledUnits);

    const showDivider = summonInfo.unitCount === 10 && summonInfo.times > 1;

    useEffect(() => {
        dispatch(loadBanners(getBanners()));
        dispatch(loadNotices(getNoticeItems().reverse()));
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

    const handleCloseNotice = () => {
        dispatch(updateLastReadNoticeId());
        toggleNoticeOpened(false);
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
                    extra={[
                        <Badge key={hasNewNotices.toString()} {...(hasNewNotices ? { dot: true } : {})}>
                            <Button onClick={() => toggleNoticeOpened(true)}>공지</Button>
                        </Badge>
                    ]}
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
            <BackTop style={{marginBottom: 30}}/>
            <NoticeDrawer list={notices}
                          visible={noticeOpened}
                          handleClose={handleCloseNotice}/>
            <SummonResultModal units={pulledUnits}
                               showDivider={showDivider}
                               dividerSize={10}
                               handleClose={closeModal}
                               visible={modalVisible}/>
        </Layout>
    );
}

export default Home;
