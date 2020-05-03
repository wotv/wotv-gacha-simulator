import {Button, Collapse, InputNumber, Layout, PageHeader, Space, Row, Col} from "antd";
import React, {useState} from "react";
import {Banner} from "../data/banners";
import {addPulledUnits, setVisible, setSummonInfo} from "../store";
import PopoverButton from "./PopoverButton";
import {useDispatch} from "react-redux";
import {SummonSimulator} from "../summonSimulator";
import BannerDetailUnits from "./BannerDetailUnits";
import _ from "lodash";

interface BannerDetailProps {
    banner: Banner;
}

const sleepAsync = (timeMillis: number) => new Promise(res => setTimeout(res, timeMillis));

const BannerDetail: React.FC<BannerDetailProps & React.HTMLAttributes<HTMLElement>> = ({banner, ...attributes}) => {
    const dispatch = useDispatch();
    let [repeatCountSummon1, setRepeatCountSummon1] = useState(1);
    let [repeatCountSummon10, setRepeatCountSummon10] = useState(1);

    const toggleModal = (show: boolean) => {
        dispatch(setVisible(show));
    };

    const summon = (unitCount: number, times: number) => {
        if (!_.isInteger(unitCount) || !_.isInteger(times) || unitCount < 1 || times < 1) {
            return alert("1 이상의 정수만 입력하세요.");
        }

        if (unitCount * times > 1000) {
            return alert("한 번에 뽑을 수 있는 유닛은 1000개까지 입니다.");
        }

        dispatch(setSummonInfo({unitCount, times}));
        toggleModal(true);

        (async () => {
            const summonSimulator = new SummonSimulator(banner, unitCount, times);

            const summoner = await summonSimulator.summon();
            for (let summonResult = summoner.next(); !summonResult.done; summonResult = summoner.next()) {
                dispatch(addPulledUnits(_.map(summonResult.value, "unit")));
                await sleepAsync(10);
            }
        })();
    };

    return (
        <Layout {...attributes}>
            <PageHeader title={banner?.name}/>
            <div>
                <img src={process.env.PUBLIC_URL + banner?.image}
                     alt={banner?.name}
                     style={{width: "100%"}}/>
            </div>
            <>
                <Collapse bordered={false} defaultActiveKey={"1"} style={{overflowY: "scroll"}}>
                    <Collapse.Panel header="소환" key="1">
                        <Row gutter={[8, 8]}>
                            <Col>
                                <Button type="primary" size="middle" onClick={() => summon(1, 1)}>1회 소환</Button>
                            </Col>
                            <Col>
                                <PopoverButton button={<Button type="primary">1 * N회 소환</Button>}>
                                    {
                                        (close: Function) => <Space direction={"horizontal"}>
                                            <InputNumber min={1} value={repeatCountSummon1} onChange={(n) => setRepeatCountSummon1(n!)} style={{width: "80px"}}/>
                                            <Button type="primary" onClick={() => {
                                                summon(1, repeatCountSummon1);
                                                close();
                                            }}>반복 소환</Button>
                                        </Space>
                                    }
                                </PopoverButton>
                            </Col>
                            <Col>
                                <Button type="primary" size="middle" onClick={() => summon(10, 1)}>10회 소환</Button>
                            </Col>
                            <Col>
                                <PopoverButton button={<Button type="primary">10 * N회 소환</Button>}>
                                    {
                                        (close: Function) => <Space direction={"horizontal"}>
                                            <InputNumber min={1} value={repeatCountSummon10} onChange={(n) => setRepeatCountSummon10(n!)} style={{width: "80px"}}/>
                                            <Button type="primary" onClick={() => {
                                                summon(10, repeatCountSummon10);
                                                close();
                                            }}>반복 소환</Button>
                                        </Space>
                                    }
                                </PopoverButton>
                            </Col>
                        </Row>
                        <Space direction="horizontal" size={12}>

                        </Space>
                    </Collapse.Panel>
                    <Collapse.Panel header="유닛" key="2">
                        <BannerDetailUnits summonInfos={banner.units}/>
                    </Collapse.Panel>
                    <Collapse.Panel header="비전카드" key="3">
                        <BannerDetailUnits summonInfos={banner.cards}/>
                    </Collapse.Panel>
                </Collapse>
            </>
        </Layout>
    );
};

export default BannerDetail;