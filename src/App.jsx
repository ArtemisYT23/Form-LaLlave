import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import store from "./redux";
import LoadingApp from "./utilities/LoadingApp";
import InitialForm from "./pages/InitialForm/InitialForm";
import SaveSucess from "./pages/SaveSucess/SaveSucess";


function App() {
  return (
    <div>
      <Suspense fallback={<LoadingApp />}>
        <Provider store={store()}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<InitialForm />} />
              <Route path="*" element={<Navigate to={<InitialForm />} />} />
              <Route path="SuccessForm" element={<SaveSucess />} />
            </Routes>
          </HashRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
