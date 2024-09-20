import { RootMessageInterface } from "./RootMessageInterface";

export interface CategoriesChartMessageInterface extends RootMessageInterface {
  type: "categoryChart";
  data: {
    framework:
      | "React"
      | "Angular"
      | "Vue"
      | "Svelte"
      | "SolidJs"
      | "CakePHP"
      | "Laravel";
    rate: number;
  }[];
}
