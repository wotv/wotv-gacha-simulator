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

const ordinaryUnitMap = {
    MIRANDA: {
        key: "MIRANDA",
        name: "미란다",
        rank: Rank.UR,
        imageUrl: "/images/units/miranda.jpg"
    },
    MEDIENA: {
        key: "MEDIENA",
        name: "메디에나",
        rank: Rank.UR,
        imageUrl: "/images/units/mediena.jpg"
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
    SASAYAKI: {
        key: "SASAYAKI",
        name: "속삭임",
        rank: Rank.UR,
        imageUrl: "/images/units/sasayaki.jpg"
    },
    KITONE: {
        key: "KITONE",
        name: "키튼",
        rank: Rank.UR,
        imageUrl: "/images/units/kitone.jpg"
    },
    DORAND: {
        key: "DORAND",
        name: "도랜드",
        rank: Rank.MR,
        imageUrl: "/images/units/helena_leonis.jpg"
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
        name: "메릴루크",
        rank: Rank.MR,
        imageUrl: "/images/units/merirook.jpg"
    },
    KADIR: {
        key: "KADIR",
        name: "카디아",
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
        name: "혼잣말",
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

const rareUnitMap = {
    GILGAMESH: {
        key: "GILGAMESH",
        name: "길가메시",
        rank: Rank.UR,
        imageUrl: "/images/units/gilgamesh.jpg"
    },
};

const limitUnitMap = {
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
    rare: rareUnitMap,
    limit: limitUnitMap
};

const ordinaryCardMap = {
    LAMIA_QUEEN: {
        "key": "LAMIA_QUEEN",
        "name": "라미아 퀸",
        "rank": Rank.UR,
        "imageUrl": "/images/cards" +
            "/LAMIA_QUEEN.jpg"
    },
    GOLEM: {
        "key": "GOLEM",
        "name": "암벽의 거인-골렘",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/GOLEM.jpg"
    },
    IFRIT: {
        "key": "IFRIT",
        "name": "맹염의 외침-이프리트",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/IFRIT.jpg"
    },
    LEONIS_SECOND_FORCE_AZURE: {
        "key": "LEONIS_SECOND_FORCE_AZURE",
        "name": "레오니스 왕국 제2부대-창궁",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/LEONIS_SECOND_FORCE_AZURE.jpg"
    },
    TO_BE_STRONGER_THAN_ANYONE: {
        "key": "TO_BE_STRONGER_THAN_ANYONE",
        "name": "누구보다도 강해지기 위해",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/TO_BE_STRONGER_THAN_ANYONE.jpg"
    },
    TROUSSEAU: {
        "key": "TROUSSEAU",
        "name": "혼수품",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/TROUSSEAU.jpg"
    },
    RESOUNDING_SCREEM: {
        "key": "RESOUNDING_SCREEM",
        "name": "울려 퍼지는 비명",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/RESOUNDING_SCREEM.jpg"
    },
    RUN_ON_THE_SNOW_FIELD: {
        "key": "RUN_ON_THE_SNOW_FIELD",
        "name": "설원을 달리다",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/RUN_ON_THE_SNOW_FIELD.jpg"
    },
    SIREN: {
        "key": "SIREN",
        "name": "물에 울려퍼지는 노래-세이렌",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/SIREN.jpg"
    },
    SHIVA: {
        "key": "SHIVA",
        "name": "모든 것을 얼리는 자-시바",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/SHIVA.jpg"
    },
    THE_TWO_IN_HOLY_NIGHT: {
        "key": "THE_TWO_IN_HOLY_NIGHT",
        "name": "프레데리카의 꿈",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/THE_TWO_IN_HOLY_NIGHT.jpg"
    },
    RAMUH: {
        "key": "RAMUH",
        "name": "하늘에 울리는 뇌명-라무",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/RAMUH.jpg"
    },
    ODIN: {
        "key": "ODIN",
        "name": "차원 절단-오딘",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/ODIN.jpg"
    },
    WHITE_BODYGUARD: {
        "key": "WHITE_BODYGUARD",
        "name": "순백의 친위대",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/WHITE_BODYGUARD.jpg"
    },
    BEHEMOTH: {
        "key": "BEHEMOTH",
        "name": "난폭한 마수-베히모스",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/BEHEMOTH.jpg"
    },
    VOW_OF_LOVE: {
        "key": "VOW_OF_LOVE",
        "name": "사랑의 맹세",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/VOW_OF_LOVE.jpg"
    },
    MALBORO: {
        "key": "MALBORO",
        "name": "불결한 저주-몰볼",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/MALBORO.jpg"
    },
    BIRTH_OF_NEW_LIFE: {
        "key": "BIRTH_OF_NEW_LIFE",
        "name": "새로운 생명의 탄생",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/BIRTH_OF_NEW_LIFE.jpg"
    },
    SHARPENED_CONCENTRATION: {
        "key": "SHARPENED_CONCENTRATION",
        "name": "극도의 집중력",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/SHARPENED_CONCENTRATION.jpg"
    },
    FLEETING_TRANQUILITY: {
        "key": "FLEETING_TRANQUILITY",
        "name": "찰나의 안식",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/FLEETING_TRANQUILITY.jpg"
    },
    GREETINGS_FROM_AFAR: {
        "key": "GREETINGS_FROM_AFAR",
        "name": "먼 이국의 땅으로부터",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/GREETINGS_FROM_AFAR.jpg"
    },
    IRON_GIANT: {
        "key": "IRON_GIANT",
        "name": "강철의 마인-철거인",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/IRON_GIANT.jpg"
    },
    SECRET_ORDERS: {
        "key": "SECRET_ORDERS",
        "name": "밀명",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/SECRET_ORDERS.jpg"
    },
    CLEANSING_THE_MIND: {
        "key": "CLEANSING_THE_MIND",
        "name": "마음의 정화",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/CLEANSING_THE_MIND.jpg"
    },
    BEWITCHING_WITCH: {
        "key": "BEWITCHING_WITCH",
        "name": "요염한 마녀",
        "rank": Rank.SR,
        "imageUrl": "/images/cards/BEWITCHING_WITCH.jpg"
    },
    SABOTENDER: {
        "key": "SABOTENDER",
        "name": "바늘 천 개-사보텐더",
        "rank": Rank.SR,
        "imageUrl": "/images/cards/SABOTENDER.jpg"
    },
    FLOATING_EYE: {
        "key": "FLOATING_EYE",
        "name": "마안광선-부유안",
        "rank": Rank.SR,
        "imageUrl": "/images/cards/FLOATING_EYE.jpg"
    },
    ZU: {
        "key": "ZU",
        "name": "거대 괴조-즈",
        "rank": Rank.SR,
        "imageUrl": "/images/cards/ZU.jpg"
    },
    OGRE: {
        "key": "OGRE",
        "name": "강력 괴인-오거",
        "rank": Rank.SR,
        "imageUrl": "/images/cards/OGRE.jpg"
    },
    BOMB: {
        "key": "BOMB",
        "name": "폭렬 탄환-봄",
        "rank": Rank.SR,
        "imageUrl": "/images/cards/BOMB.jpg"
    },
    A_RARE_DAY_OFF: {
        "key": "A_RARE_DAY_OFF",
        "name": "오랜만의 휴가",
        "rank": Rank.SR,
        "imageUrl": "/images/cards/A_RARE_DAY_OFF.jpg"
    },
    DETECTIVE_LIRELLILA: {
        "key": "DETECTIVE_LIRELLILA",
        "name": "명탐정 리렐리라",
        "rank": Rank.SR,
        "imageUrl": "/images/cards/DETECTIVE_LIRELLILA.jpg"
    },
    A_SWEET_TIME: {
        "key": "A_SWEET_TIME",
        "name": "유희의 시간",
        "rank": Rank.SR,
        "imageUrl": "/images/cards/A_SWEET_TIME.jpg"
    },
    KING_OF_OVEREATING: {
        "key": "KING_OF_OVEREATING",
        "name": "폭식왕 등장",
        "rank": Rank.SR,
        "imageUrl": "/images/cards/KING_OF_OVEREATING.jpg"
    },
    LEONIS_FLAG: {
        "key": "LEONIS_FLAG",
        "name": "레오니스의 깃발",
        "rank": Rank.R,
        "imageUrl": "/images/cards/LEONIS_FLAG.jpg"
    },
    HOURNE_FLAG: {
        "key": "HOURNE_FLAG",
        "name": "호른의 깃발",
        "rank": Rank.R,
        "imageUrl": "/images/cards/HOURNE_FLAG.jpg"
    },
    FENNES_FLAG: {
        "key": "FENNES_FLAG",
        "name": "페네스의 깃발",
        "rank": Rank.R,
        "imageUrl": "/images/cards/FENNES_FLAG.jpg"
    },
    WEZETTE_FLAG: {
        "key": "WEZETTE_FLAG",
        "name": "웨젯의 깃발",
        "rank": Rank.R,
        "imageUrl": "/images/cards/WEZETTE_FLAG.jpg"
    },
    CRYSTAL_SANCTUM_FLAG: {
        "key": "CRYSTAL_SANCTUM_FLAG",
        "name": "크리스탈교의 깃발",
        "rank": Rank.R,
        "imageUrl": "/images/cards/CRYSTAL_SANCTUM_FLAG.jpg"
    },
    LEONIS_CASTLE: {
        "key": "LEONIS_CASTLE",
        "name": "레오니스 성",
        "rank": Rank.R,
        "imageUrl": "/images/cards/LEONIS_CASTLE.jpg"
    },
    HOURNE_CASTLE: {
        "key": "HOURNE_CASTLE",
        "name": "호른 성",
        "rank": Rank.R,
        "imageUrl": "/images/cards/HOURNE_CASTLE.jpg"
    },
    FENNES_CASTLE: {
        "key": "FENNES_CASTLE",
        "name": "페네스 성",
        "rank": Rank.R,
        "imageUrl": "/images/cards/FENNES_CASTLE.jpg"
    },
    WEZETTE_CASTLE: {
        "key": "WEZETTE_CASTLE",
        "name": "웨젯 성",
        "rank": Rank.R,
        "imageUrl": "/images/cards/WEZETTE_CASTLE.jpg"
    },
    DYNEWERK_CHURCE: {
        "key": "DYNEWERK_CHURCE",
        "name": "다인베르크 성전",
        "rank": Rank.R,
        "imageUrl": "/images/cards/DYNEWERK_CHURCE.jpg"
    }
};

const limitCardMap = {
    THE_WILL_OF_BEOULVE: {
        "key": "THE_WILL_OF_BEOULVE",
        "name": "베올브의 이름을 잇는 자",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/THE_WILL_OF_BEOULVE.jpg"
    },
    PORTRAIT_OF_SHADOW: {
        "key": "PORTRAIT_OF_SHADOW",
        "name": "칠흑의군상",
        "rank": Rank.UR,
        "imageUrl": "/images/cards/PORTRAIT_OF_SHADOW.jpg"
    },
    SHADOWBRINGERS: {
        "key": "SHADOWBRINGERS",
        "name": "섀도우브링어",
        "rank": Rank.MR,
        "imageUrl": "/images/cards/SHADOWBRINGERS.jpg"
    },
};

export const cards = {
    ordinary: ordinaryCardMap,
    limit: limitCardMap
};