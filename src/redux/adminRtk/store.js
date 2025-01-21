import { configureStore } from "@reduxjs/toolkit";
import { partnerApi } from "./adminRtk/services/partnerApi";

const store = configureStore({
    reducer: {
        [partnerApi.reducerPath]: partnerApi.reducer, // RTK Query reducer-i əlavə edirik
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(partnerApi.middleware), // Middleware əlavə olunur
});

export default store;
