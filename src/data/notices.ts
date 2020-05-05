import {NoticeItem} from "../components/noticeDrawer";

const noticeItems: NoticeItem[] = [
    {
        id: 1,
        title: "공지사항 기능 추가",
        content: "공지사항 기능을 추가하였습니다.",
        regDate: "2020-05-05"
    }
];

export const getNoticeItems = () => {
    return noticeItems;
};