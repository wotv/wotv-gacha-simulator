import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Banner} from "./data/banners";
import {Unit} from "./data/units";

type SummonInfo = {
    unitCount: number;
    times: number;
}

const bannerSlice = createSlice({
    name: "banner",
    initialState: {
        banners: [],
        selectedBanner: null,
        summonInfo: {
            unitCount: 1,
            times: 1,
            pulledUnits: [] as Unit[]
        },
    },
    reducers: {
        loadBanners: (state: any, action: PayloadAction<Banner[]>) => {
            state.banners = action.payload;
        },
        setSelectedBanner: (state: any, action: PayloadAction<Banner | null>) => {
            state.selectedBanner = action.payload
        },
        setSummonInfo: (state: any, action: PayloadAction<SummonInfo>) => {
            state.summonInfo.unitCount = action.payload.unitCount;
            state.summonInfo.times = action.payload.times;
        },
        addPulledUnits: (state: any, action: PayloadAction<Unit[]>) => {
            state.summonInfo.pulledUnits = [
                ...state.summonInfo.pulledUnits,
                ...action.payload
            ]
        },
        clearPulledUnits: (state: any) => {
            state.summonInfo.pulledUnits = [];
        }
    }
});

export const {loadBanners, setSelectedBanner, setSummonInfo, addPulledUnits, clearPulledUnits} = bannerSlice.actions;

export const selectBanners = (state: RootState) => state.banner.banners;
export const selectSelectedBanner = (state: RootState) => state.banner.selectedBanner;
export const selectSummonInfo = (state: RootState) => state.banner.summonInfo;
export const selectPulledUnits = (state: RootState) => state.banner.summonInfo.pulledUnits;

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        visible: false,
    },
    reducers: {
        setVisible: (state: any, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        }
    }
});

export const {setVisible} = modalSlice.actions;

export const selectModalVisible = (state: RootState) => state.modal.visible;

const store = configureStore({
    reducer: {
        banner: bannerSlice.reducer,
        modal: modalSlice.reducer,
    }
});

type RootState = ReturnType<typeof store.getState>;

export default store;