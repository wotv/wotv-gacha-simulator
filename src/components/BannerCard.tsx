import React from 'react';
import {Card} from "antd";
import {Banner} from "../data/banners";
import {CheckOutlined} from "@ant-design/icons/lib";

interface BannerProps {
    banner: Banner;
    onClick: Function;
}

const BannerCard: React.FC<BannerProps & React.HTMLAttributes<HTMLElement>> = ({banner, onClick}) => (
    <Card
        cover={<img src={process.env.PUBLIC_URL + banner.image} alt={banner.name}/>}
        title={banner.name}
        actions={[
            <CheckOutlined key="setting" onClick={(e) => alert(JSON.stringify(banner))}/>,
        ]}>
        소환 기간: {banner.startDate} ~ {banner.endDate}
    </Card>
);

export default BannerCard;