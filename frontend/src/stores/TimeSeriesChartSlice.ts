import type { StateCreator } from "zustand";
import type {
  appStoreType,
  TimeSeries,
  TimeSeriesChartSlice,
} from "./AppStoreType";
import { addMonths } from "date-fns";
const now = new Date();

const initialData: TimeSeries[] = [];
for (let index = 0; index < 20; index++) {
  initialData.push({
    Date: addMonths(now, index),
    rate: parseInt((Math.random() * 50 + 30).toFixed(2), 10),
  });
}

const createTimeSeriesChartSlice: StateCreator<
  appStoreType,
  [["zustand/immer", never], never],
  [],
  TimeSeriesChartSlice
> = (set) => ({
  timeSeriesData: initialData,
  pushTimeSeriesData(data) {
    set((s) => {
      s.timeSeriesData.shift();
      s.timeSeriesData.push(data);
    });
  },
});

export default createTimeSeriesChartSlice;
