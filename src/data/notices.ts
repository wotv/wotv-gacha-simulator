import {NoticeItem} from "../components/noticeDrawer";

const noticeItems: NoticeItem[] = [
    {
        id: 1,
        title: "공지사항 기능 추가",
        content: "공지사항 기능을 추가하였습니다.",
        regDate: "2020-05-05"
    },
    {
        id: 2,
        title: "신규 픽업 소환배너 추가",
        content: "키튼, 속삭임 픽업 소환배너를 추가하였습니다.",
        regDate: "2020-05-05"
    },
    {
        id: 3,
        title: "새로운 기능 추가",
        content: "유닛 소환 후 소환 결과 창에서 같은 유닛 모아보기 기능을 사용할 수 있습니다.",
        regDate: "2020-05-05"
    },
    {
        id: 4,
        title: "신규 소환배너 추가",
        content: "신규 비전 카드 소환 (오딘), 장비 육성 퀘스트 응원 소환 배너를 추가하였습니다.",
        regDate: "2020-05-13"
    }
];

export const getNoticeItems = () => {
    return noticeItems;
};