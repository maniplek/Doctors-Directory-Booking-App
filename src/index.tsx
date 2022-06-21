import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import Footer from "./components/Footer";
import rootReducer from "./store/rootreducer";

type RootState = ReturnType<typeof rootReducer>;
const store: Store<RootState, DoctorAction | AppointmentAction  > & { dispatch: DispatchType } =
  createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
