import s from "./styles/Numbers.module.scss";
import { NumbersForm, NumbersList, NumbersProvider } from "@/modules/numbers";

const Numbers = () => {
  return (
    <NumbersProvider>
      <div className={s.numbers}>
        <h2 className={s.numbers__title}>Средние числа</h2>
        <section className={s.numbers__contentWrapper}>
          <NumbersForm />
          <NumbersList />
        </section>
      </div>
    </NumbersProvider>
  );
};

export default Numbers;
