import React, { useCallback, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAppStore } from "@/stores/AppStore";
import { addMonths } from "date-fns";

function AddEntryForm() {
  const [price, setPrice] = useState(0);
  const pushTimeSeriesData = useAppStore((s) => s.pushTimeSeriesData);
  const timeSeriesData = useAppStore((s) => s.timeSeriesData);

  const changePrice = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(e.currentTarget.value, 10));
  }, []);
  const addRandomPrice = useCallback(() => {
    pushTimeSeriesData({
      rate: parseInt((Math.random() * 50 + 30).toFixed(0), 10),
      Date: addMonths(timeSeriesData[timeSeriesData.length - 1].Date, 1),
    });
  }, [pushTimeSeriesData, timeSeriesData]);

  const updatePrice = useCallback(() => {
    pushTimeSeriesData({
      rate: price,
      Date: addMonths(timeSeriesData[timeSeriesData.length - 1].Date, 1),
    });
    setPrice(0);
  }, [price, pushTimeSeriesData, timeSeriesData]);
  return (
    <div className="shadow-xl rounded-md border-2 border-slate-400 border-solid h-full min-h-[40vh]">
      <div className="underline flex justify-center text-2xl">
        Add new price
      </div>
      <div className="lg:p-10  lg:mt-5  mt-3 p-2">
        <Input
          placeholder="New price"
          type="number"
          min={30}
          max={80}
          value={price}
          onChange={changePrice}
        />
        <div className="text-slate-400 flex justify-end">
          between 30 and 80 dollars
        </div>
      </div>
      <div className="lg:px-10 flex flex-row justify-end gap-4 px-5">
        <Button onClick={addRandomPrice}>Add Random</Button>
        <Button disabled={price < 30 || price > 80} onClick={updatePrice}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default AddEntryForm;
