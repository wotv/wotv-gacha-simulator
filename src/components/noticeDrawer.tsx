import {Collapse, Drawer} from "antd";
import React from "react";
import _ from "lodash";

export type NoticeItem = {
    id: number,
    title: string,
    content: string;
    regDate: string;
}

interface NoticeDrawerProps {
    visible: boolean;
    handleClose: () => void;
    list?: NoticeItem[];
}

const NoticeDrawer: React.FC<NoticeDrawerProps & React.HTMLAttributes<HTMLElement>> = ({visible, handleClose, list}) => (
    <Drawer
        title="공지사항"
        placement="right"
        width={300}
        visible={visible}
        onClose={handleClose}
        bodyStyle={{padding: 0}}
    >
        <Collapse bordered={false}>
            {
                _.map(list, (noticeItem, index) => (
                    <Collapse.Panel key={index} header={noticeItem.title} extra={<span>{noticeItem.regDate}</span>}>
                        <p>{noticeItem.content}</p>
                    </Collapse.Panel>
                ))
            }
        </Collapse>
    </Drawer>
);

NoticeDrawer.defaultProps = {
    list: []
};

export default NoticeDrawer;