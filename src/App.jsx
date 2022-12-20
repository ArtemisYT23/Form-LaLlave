import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { RoutesForm } from "./models/routes";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import store from "./redux";
import LoadingApp from "./utilities/LoadingApp";


const InitialForm = lazy(() => import("./pages/InitialForm/InitialForm"));

function App() {
  return (
    <div>
      <Suspense fallback={<LoadingApp />}>
        <Provider store={store()}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<InitialForm />} />
              <Route path="*" element={<InitialForm />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
