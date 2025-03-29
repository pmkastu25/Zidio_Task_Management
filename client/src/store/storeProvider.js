import { Provider } from "react-redux";
import configureStore from "./configure-store";

const store = configureStore();

store.subscribe(() => console.log("state updated", store.getState()));

export const StoreProvider = ({ children }) => <Provider store={store}>{children}</Provider>;
