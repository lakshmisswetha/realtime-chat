import ReactDOM from "react-dom/client";
import { appRouter } from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <RouterProvider router={appRouter} />
    </Provider>
);
