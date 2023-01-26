import { createContext, ReactNode, useContext, useState } from "react";

import { AxiosResponse } from "axios";
import {
  CheckboxesFormValues,
  NumberCalculation,
  NumberCalculationArray,
  NumbersFormValues,
} from "../types/numbers.typedef";
import { fetchCalculateNewAverage } from "../services/fetchCalculateNewAverage";
import { fetchGetAllCalculations } from "../services/fetchGetAllCalculations";

type NumbersFlowContextModel = {
  numbersData: NumberCalculationArray | undefined;
  onCalculateNewAverage: (
    numbersFormValues: NumbersFormValues,
    checkboxesFormValues: CheckboxesFormValues
  ) => void;
  updateNumbersData: () => void;
};

export const NumbersFlowContext = createContext<
  NumbersFlowContextModel | undefined
>(undefined);

type NumbersProviderProps = {
  children: ReactNode;
};

export const NumbersProvider = ({ children }: NumbersProviderProps) => {
  const [numbersData, setNumbersData] = useState<NumberCalculationArray | []>(
    []
  );

  const onCalculateNewAverage = async (
    numbersFormValues: NumbersFormValues,
    checkboxesFormValues: CheckboxesFormValues
  ) => {
    try {
      const { number } = numbersFormValues;
      const { isInteger, isPositive } = checkboxesFormValues;
      const newCalculation: AxiosResponse<NumberCalculation> =
        await fetchCalculateNewAverage({
          isInteger,
          isPositive,
          number: +number,
        });

      setNumbersData((prev) => {
        return [...prev, newCalculation.data];
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updateNumbersData = async () => {
    const responsse: AxiosResponse<NumberCalculationArray> =
      await fetchGetAllCalculations();
    console.log(responsse.data);
    setNumbersData(responsse.data);
  };

  const contextData = {
    numbersData,
    onCalculateNewAverage,
    updateNumbersData,
  };

  return (
    <NumbersFlowContext.Provider value={contextData}>
      {children}
    </NumbersFlowContext.Provider>
  );
};

export const useNumbersContext = () => {
  const context = useContext(NumbersFlowContext);
  if (context === undefined) {
    throw new Error("useJournalContext was used outside of its Provider");
  }
  return context;
};
