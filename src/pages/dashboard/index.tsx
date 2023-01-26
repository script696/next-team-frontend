import s from "./styles/Dashboard.module.scss";
import axios, { AxiosResponse } from "axios";
import {
  MessagesForm,
  MessagesList,
  MessagesProvider,
  MessageArray,
  MESSAGES_API_ROUTES,
} from "@/modules/messages";

type DashboardProps = {
  data: MessageArray;
};

const Dashboard = ({ data }: DashboardProps) => {
  return (
    <MessagesProvider initialMessagesData={data}>
      <div className={s.dashboard}>
        <h2 className={s.dashboard__title}>Доска сообщений</h2>
        <div className={s.dashboard__contentWrapper}>
          <MessagesList />
          <MessagesForm />
        </div>
      </div>
    </MessagesProvider>
  );
};
export async function getServerSideProps() {
  const response: AxiosResponse<MessageArray> = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${MESSAGES_API_ROUTES.base}${MESSAGES_API_ROUTES.getAll}`
  );

  return { props: { data: response.data } };
}

export default Dashboard;
