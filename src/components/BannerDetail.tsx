import {Badge, Button, Checkbox, Collapse, Layout, PageHeader, Space, Popover, Input} from "antd";
import React from "react";
import {Banner} from "../data/banners";
import {sort} from "../util";
import {Unit} from "../data/units";
import PopoverButton from "./PopoverButton";

interface BannerDetailProps {
    banner: Banner;
}

const sortUnitsByRank = (units: Unit[]) => {
    return sort(
        units,
        "rank",
        ["UR", "MR", "SR", "R", "N"]
    );
};

const BannerDetail: React.FC<BannerDetailProps & React.HTMLAttributes<HTMLElement>> = ({banner, ...attributes}) => (
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
                    <Space direction="horizontal" size={12}>
                        <Button type="primary" size="middle">1회 소환</Button>
                        <PopoverButton button={<Button type="primary">1 * N회 소환</Button>}>
                            {
                                (close: Function) => <Space direction={"horizontal"}>
                                    <Input type="number" defaultValue={1} placeholder="횟수 입력: " style={{width: "80px"}}/>
                                    <Button type="primary" onClick={() => close()}>반복 소환</Button>
                                </Space>
                            }
                        </PopoverButton>

                        <Button type="primary" size="middle">10회 소환</Button>
                        <PopoverButton button={<Button type="primary">10 * N회 소환</Button>}>
                            {
                                (close: Function) => <Space direction={"horizontal"}>
                                    <Input type="number" defaultValue={1} placeholder="횟수 입력: " style={{width: "80px"}}/>
                                    <Button type="primary" onClick={() => close()}>반복 소환</Button>
                                </Space>
                            }
                        </PopoverButton>
                    </Space>
                </Collapse.Panel>
                <Collapse.Panel header="출현 유닛" key="2">
                    {sortUnitsByRank(banner.units).map((unit, index) => (
                        <div key={index}>
                            {unit.name} ({unit.rank.toString()})
                            {banner.pickUpUnits.includes(unit) ? <span style={{color: "green"}}> [픽업]</span> : ""}
                        </div>
                    ))}
                </Collapse.Panel>
            </Collapse>
        </>
    </Layout>
);

export default BannerDetail;