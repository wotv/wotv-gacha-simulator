import {
    configureStore,
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";
import {Banner} from "./data/banners";

const initialState = {
    banners: [],
    selectedBanner: null
};

const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
        loadBanners: (state: any, action: PayloadAction<Banner[]>) => {
            state.banners = action.payload;
        },
        setSelectedBanner: (state: any, action: PayloadAction<Banner | null>) => {
            state.selectedBanner = action.payload
        }
    }
});

const store = configureStore({
    reducer: {
        banner: bannerSlice.reducer
    }
});

type RootState = ReturnType<typeof store.getState>;

export const {loadBanners, setSelectedBanner} = bannerSlice.actions;

export const selectBanners = (state: RootState) => state.banner.banners;
export const selectSelectedBanner = (state: RootState) => state.banner.selectedBanner;

export default store;