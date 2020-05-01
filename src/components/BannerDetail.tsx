import {Layout, PageHeader} from "antd";
import React from "react";
import {Banner} from "../data/banners";

interface BannerDetailProps {
    banner: Banner;
}

const BannerDetail: React.FC<BannerDetailProps & React.HTMLAttributes<HTMLElement>> = ({banner, ...attributes}) => (
    <Layout {...attributes}>
        <PageHeader title={banner?.name}/>
        <div>
            <img src={process.env.PUBLIC_URL + banner?.image}
                 alt={banner?.name}
                 style={{width: "100%"}}/>
        </div>
    </Layout>
);

export default BannerDetail;