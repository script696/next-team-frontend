import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Message,
  MessageArray,
  MessagesFormValues,
} from "@/modules/messages/types/messages.typedef";
import { fetchCreateNewMessage } from "@/modules/messages";
import { Axios, AxiosResponse } from "axios";
import {
  CheckboxesFormValues,
  NumberCalculation,
  NumberCalculationArray,
  NumbersFormValues,
} from "@/modules/numbers";
import { fetchCalculateNewAverage } from "@/modules/numbers/services/fetchCalculateNewAverage";
import { types } from "sass";
import Number = types.Number;
import { Calculation } from "@/modules/numbers/types/numbers.typedef";
import { fetchGetAllCalculations } from "@/modules/numbers/services/fetchGetAllCalculations";

type NumbersFlowContextModel = {
  numbersData: NumberCalculationArray | undefined;
  updateNumbersData: () => void;
};

export const NumbersFlowContext = createContext<
  NumbersFlowContextModel | undefined
>(undefined);

type NumbersProviderProps = {
  children: ReactNode;
};

export const NumbersProvider = ({ children }: NumbersProviderProps) => {
  const [numbersData, setNumbersData] = useState<[] | NumberCalculationArray>(
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
          number: +number,
          isInteger,
          isPositive,
        });

      setNumbersData((prev) => [...prev, newCalculation.data]);
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
