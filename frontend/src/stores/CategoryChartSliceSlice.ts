import type { StateCreator } from "zustand";
import type { appStoreType, CategoryChartSlice } from "./AppStoreType";

const createCategoryChartSlice: StateCreator<
  appStoreType,
  [["zustand/immer", never], never],
  [],
  CategoryChartSlice
> = (set) => ({
  categoryChartData: [
    {
      framework: "Angular",
      rate: 40,
    },
    {
      framework: "CakePHP",
      rate: 30,
    },
    {
      framework: "Laravel",
      rate: 50,
    },
    {
      framework: "React",
      rate: 80,
    },
    {
      framework: "SolidJs",
      rate: 30,
    },
    {
      framework: "Svelte",
      rate: 20,
    },
    {
      framework: "Vue",
      rate: 10,
    },
  ],
  setCategoryChartData(data) {
    set((s) => {
      s.categoryChartData = data;
    });
  },
});

export default createCategoryChartSlice;
