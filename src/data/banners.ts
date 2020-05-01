import {Unit, units} from "./units";
import _ from "lodash";

export type Banner = {
    key: string,
    name: string,
    image: string,
    startDate: string,
    endDate: string,
    units: Unit[],
    pickUpUnits: Unit[],
}

const banners: Banner[] = [
    {
        key: "SB_0001",
        name: "파이널판타지 택틱스 콜라보기념 무료 소환",
        image: "/images/banners/banner1.jpg",
        startDate: "2020-04-01",
        endDate: "2020-04-15",
        units: [
            ..._.values(units.ordinary),
            units.limit.ORLANDEAU,
            units.limit.RAMZA
        ],
        pickUpUnits: [
            units.limit.ORLANDEAU,
            units.limit.RAMZA
        ]
    },
    {
        key: "SB_0002",
        name: "소환배너 2",
        image: "/images/banners/banner2.jpg",
        startDate: "2020-04-15",
        endDate: "2020-04-29",
        units: [],
        pickUpUnits: []
    },
    {
        key: "SB_0003",
        name: "소환배너 3",
        image: "/images/banners/banner3.jpg",
        startDate: "2020-05-01",
        endDate: "2020-05-14",
        units: [],
        pickUpUnits: []
    },
    {
        key: "SB_0004",
        name: "소환배너 4",
        image: "/images/banners/banner1.jpg",
        startDate: "2020-05-14",
        endDate: "2020-05-29",
        units: [],
        pickUpUnits: []
    },
    {
        key: "SB_0005",
        name: "소환배너 5",
        image: "/images/banners/banner3.jpg",
        startDate: "2020-05-01",
        endDate: "2020-05-14",
        units: [],
        pickUpUnits: []
    },
    {
        key: "SB_0006",
        name: "소환배너 6",
        image: "/images/banners/banner1.jpg",
        startDate: "2020-05-14",
        endDate: "2020-05-29",
        units: [],
        pickUpUnits: []
    }
];

export const getBanners = () => {
    return banners;
};