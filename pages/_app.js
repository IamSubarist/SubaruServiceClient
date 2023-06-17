import { Provider } from "react-redux";
import store from "../src/store/index"; // Путь к вашему корневому редюсеру
import Layout from "@/src/components/Layout";
import "@/styles/globals.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Создаем Redux-стор
// const store = createStore(rootReducer);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
