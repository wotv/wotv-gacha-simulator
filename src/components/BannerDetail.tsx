import {Collapse, Layout, PageHeader} from "antd";
import React from "react";
import {Banner} from "../data/banners";

interface BannerDetailProps {
    banner: Banner;
}

const {Panel} = Collapse;

const BannerDetail: React.FC<BannerDetailProps & React.HTMLAttributes<HTMLElement>> = ({banner, ...attributes}) => (
    <Layout {...attributes}>
        <PageHeader title={banner?.name}/>
        <div>
            <img src={process.env.PUBLIC_URL + banner?.image}
                 alt={banner?.name}
                 style={{width: "100%"}}/>
        </div>
        <>
            <Collapse bordered={false} defaultActiveKey={["1"]}>
                <Panel header="출현 유닛" key="1">
                    {banner.units.map((unit, index) => (
                        <div key={index}>
                            {unit.name} ({unit.rank.toString()})
                        </div>
                    ))}
                </Panel>
            </Collapse>
        </>
    </Layout>
);

export default BannerDetail;