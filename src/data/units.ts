export enum Rank {
    UR = "UR",
    MR = "MR",
    SR = "SR",
    R = "R",
    N = "N"
}

export type Unit = {
    key: string,
    name: string,
    rank: Rank,
    imageUrl: string
}

export const ordinaryUnitMap = {
    MEDIENA: {
        key: "MEDIENA",
        name: "메디에나",
        rank: Rank.UR,
        imageUrl: "/images/units/mediena.jpg"
    },
    GILGAMESH: {
        key: "GILGAMESH",
        name: "길가메시",
        rank: Rank.UR,
        imageUrl: "/images/units/gilgamesh.jpg"
    },
    MACHERIE_HOURNE: {
        key: "MACHERIE_HOURNE",
        name: "마쉐리 호른",
        rank: Rank.UR,
        imageUrl: "/images/units/macherie_hourne.jpg"
    },
    ENGELBERT: {
        key: "ENGELBERT",
        name: "엥겔베르트",
        rank: Rank.UR,
        imageUrl: "/images/units/engelbert.jpg"
    },
    ROB_HOURNE: {
        key: "ROB_HOURNE",
        name: "롭 호른",
        rank: Rank.UR,
        imageUrl: "/images/units/rob_hourne.jpg"
    },
    AYAKA: {
        key: "AYAKA",
        name: "아야카",
        rank: Rank.UR,
        imageUrl: "/images/units/ayaka.jpg"
    },
    OELDE_LEONIS: {
        key: "OELDE_LEONIS",
        name: "엘데 레오니스",
        rank: Rank.UR,
        imageUrl: "/images/units/oelde_leonis.jpg"
    },
    IRENE: {
        key: "IRENE",
        name: "아이린",
        rank: Rank.UR,
        imageUrl: "/images/units/irene.jpg"
    },
    ZIZA: {
        key: "ZIZA",
        name: "지자",
        rank: Rank.UR,
        imageUrl: "/images/units/ziza.jpg"
    },
    STERNE_LEONIS: {
        key: "STERNE_LEONIS",
        name: "슈텔 레오니스",
        rank: Rank.UR,
        imageUrl: "/images/units/sterne_leonis.jpg"
    },
    FREDERICA: {
        key: "FREDERICA",
        name: "프레데리카",
        rank: Rank.UR,
        imageUrl: "/images/units/frederica.jpg"
    },
    YERMA: {
        key: "YERMA",
        name: "옐마",
        rank: Rank.UR,
        imageUrl: "/images/units/yerma.jpg"
    },
    HELENA_LEONIS: {
        key: "HELENA_LEONIS",
        name: "헬레나 레오니스",
        rank: Rank.MR,
        imageUrl: "/images/units/helena_leonis.jpg"
    },
    LILYTH: {
        key: "LILYTH",
        name: "릴리스",
        rank: Rank.MR,
        imageUrl: "/images/units/lilyth.jpg"
    },
    RAMADA: {
        key: "RAMADA",
        name: "라마다",
        rank: Rank.MR,
        imageUrl: "/images/units/ramada.jpg"
    },
    INORI: {
        key: "INORI",
        name: "기도",
        rank: Rank.MR,
        imageUrl: "/images/units/inori.jpg"
    },
    KHURY_WEZETTE: {
        key: "KHURY_WEZETTE",
        name: "크리 웨젯",
        rank: Rank.MR,
        imageUrl: "/images/units/khury_wezette.jpg"
    },
    RAIRYUU: {
        key: "RAIRYUU",
        name: "라이류",
        rank: Rank.MR,
        imageUrl: "/images/units/rairyuu.jpg"
    },
    OWE: {
        key: "OWE",
        name: "오우",
        rank: Rank.MR,
        imageUrl: "/images/units/owe.jpg"
    },
    LORENZO: {
        key: "LORENZO",
        name: "로렌초",
        rank: Rank.MR,
        imageUrl: "/images/units/lorenzo.jpg"
    },
    SCHUZELT: {
        key: "SCHUZELT",
        name: "슈제르트",
        rank: Rank.MR,
        imageUrl: "/images/units/schuzelt.jpg"
    },
    MARGUERITE: {
        key: "MARGUERITE",
        name: "마르게리트",
        rank: Rank.MR,
        imageUrl: "/images/units/marguerite.jpg"
    },
    MERIROOK: {
        key: "MERIROOK",
        name: "메리루크",
        rank: Rank.MR,
        imageUrl: "/images/units/merirook.jpg"
    },
    KADIR: {
        key: "KADIR",
        name: "카디르",
        rank: Rank.MR,
        imageUrl: "/images/units/kadir.jpg"
    },
    FINA: {
        key: "FINA",
        name: "피나",
        rank: Rank.MR,
        imageUrl: "/images/units/fina.jpg"
    },
    VISTRALLE: {
        key: "VISTRALLE",
        name: "비스트랄",
        rank: Rank.MR,
        imageUrl: "/images/units/vistralle.jpg"
    },
    NASTYA: {
        key: "NASTYA",
        name: "나샤",
        rank: Rank.MR,
        imageUrl: "/images/units/nastya.jpg"
    },
    SHADOWLINKS: {
        key: "SHADOWLINKS",
        name: "섀도링크스",
        rank: Rank.MR,
        imageUrl: "/images/units/shadowlinks.jpg"
    },
    VALRIDE: {
        key: "VALRIDE",
        name: "발라이드",
        rank: Rank.SR,
        imageUrl: "/images/units/valride.jpg"
    },
    SEVERO: {
        key: "SEVERO",
        name: "세베로",
        rank: Rank.SR,
        imageUrl: "/images/units/severo.jpg"
    },
    NYAH: {
        key: "NYAH",
        name: "나이아",
        rank: Rank.SR,
        imageUrl: "/images/units/nyah.jpg"
    },
    LIRELLILA: {
        key: "LIRELLILA",
        name: "리렐리라",
        rank: Rank.SR,
        imageUrl: "/images/units/lirellila.jpg"
    },
    SOCIA: {
        key: "SOCIA",
        name: "소샤",
        rank: Rank.SR,
        imageUrl: "/images/units/socia.jpg"
    },
    SURJES: {
        key: "SURJES",
        name: "서제스",
        rank: Rank.SR,
        imageUrl: "/images/units/surjes.jpg"
    },
    PHOEBE: {
        key: "PHOEBE",
        name: "피비",
        rank: Rank.SR,
        imageUrl: "/images/units/phoebe.jpg"
    },
    MURMUR: {
        key: "MURMUR",
        name: "속삭임",
        rank: Rank.SR,
        imageUrl: "/images/units/murmur.jpg"
    },
    BEYLOT: {
        key: "BEYLOT",
        name: "베일로",
        rank: Rank.SR,
        imageUrl: "/images/units/beylot.jpg"
    },
    VADIM: {
        key: "VADIM",
        name: "바짐",
        rank: Rank.SR,
        imageUrl: "/images/units/vadim.jpg"
    },
    YUNI: {
        key: "YUNI",
        name: "유니",
        rank: Rank.SR,
        imageUrl: "/images/units/yuni.jpg"
    },
    REATE: {
        key: "REATE",
        name: "리아트",
        rank: Rank.R,
        imageUrl: "/images/units/reate.jpg"
    },
    MICHE: {
        key: "MICHE",
        name: "미체",
        rank: Rank.R,
        imageUrl: "/images/units/miche.jpg"
    },
    MIA: {
        key: "MIA",
        name: "미아",
        rank: Rank.R,
        imageUrl: "/images/units/mia.jpg"
    },
    ZAZAN: {
        key: "ZAZAN",
        name: "자잔",
        rank: Rank.N,
        imageUrl: "/images/units/zazan.jpg"
    }
};

export const limitUnitMap = {
    THANCRED: {
        key: "THANCRED",
        name: "산크레트",
        rank: Rank.UR,
        imageUrl: "/images/units/thancred.jpg"
    },
    YSHTOLA: {
        key: "YSHTOLA",
        name: "야슈톨라",
        rank: Rank.MR,
        imageUrl: "/images/units/yshtola.jpg"
    },
    ETRE: {
        key: "ETRE",
        name: "에트와",
        rank: Rank.MR,
        imageUrl: "/images/units/etre.jpg"
    },
    RAMZA: {
        key: "RAMZA",
        name: "람자",
        rank: Rank.UR,
        imageUrl: "/images/units/ramza.jpg"
    },
    ORLANDEAU: {
        key: "ORLANDEAU",
        name: "오를란두",
        rank: Rank.UR,
        imageUrl: "/images/units/orlandeau.jpg"
    },
    GAFFGARION: {
        key: "GAFFGARION",
        name: "가프가리온",
        rank: Rank.MR,
        imageUrl: "/images/units/gaffgarion.jpg"
    }
};

export const units = {
    ordinary: ordinaryUnitMap,
    limit: limitUnitMap
};