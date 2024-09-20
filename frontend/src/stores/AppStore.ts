import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { appStoreType } from "./AppStoreType";

import createWebSocketConnection from "./webSocketConnectionSlice";
import createCategoryChartSlice from "./CategoryChartSliceSlice";
import createTimeSeriesChartSlice from "./TimeSeriesChartSlice";

export const useAppStore = create<appStoreType>()(
  immer((...a) => ({
    ...createWebSocketConnection(...a),
    ...createCategoryChartSlice(...a),
    ...createTimeSeriesChartSlice(...a),
  }))
);
