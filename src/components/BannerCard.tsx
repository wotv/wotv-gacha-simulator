import React from 'react';
import {Card} from "antd";
import {Banner} from "../data/banners";
import {CheckOutlined, CheckCircleTwoTone} from "@ant-design/icons/lib";

interface BannerProps {
    banner: Banner;
    selected?: boolean;
    onBannerClick: (banner: Banner | null) => void;
}

const BannerCard: React.FC<BannerProps & React.HTMLAttributes<HTMLElement>> = ({banner, selected, onBannerClick}) => (
    <Card
        cover={<img src={process.env.PUBLIC_URL + banner.image} alt={banner.name}/>}
        title={banner.name}
        actions={[
            selected
                ? <CheckCircleTwoTone twoToneColor="#52c41a" onClick={() => onBannerClick(null)}/>
                : <CheckOutlined key="setting" onClick={() => onBannerClick(banner)}/>
        ]}>
        소환 기간: <br/>{banner.startDate} ~ {banner.endDate}
    </Card>
);

export default BannerCard;