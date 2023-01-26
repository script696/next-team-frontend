export type NumberCalculation = {
  currentAverage: number;
  currentNumber: number;
  id: number;
  previousAverage: number;
};

export type NumberCalculationArray = Array<NumberCalculation>;

export type CheckboxesFormValues = {
  isInteger: boolean;
  isPositive: boolean;
};

export type NumbersFormValues = {
  number: number | string;
};

export type Calculation = CheckboxesFormValues & { number: number };
