export type NumberCalculation = {
  id: number;
  previousAverage: number;
  currentNumber: number;
  currentAverage: number;
};

export type NumberCalculationArray = Array<NumberCalculation>;

export type CheckboxesFormValues = {
  isPositive: boolean;
  isInteger: boolean;
};

export type NumbersFormValues = {
  number: string | number;
};

export type Calculation = CheckboxesFormValues & { number: number };
