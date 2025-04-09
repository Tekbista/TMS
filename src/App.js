

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/home";
import RegisterPage from "./pages/registerpage/register";
import LoginPage from "./pages/loginpage/login";
import CasesPage from "./pages/casespage/casespage";
import NotFound from "./pages/notfoundpage/notfound";
import Case from "./pages/casespage/case";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NewCase from "./pages/casespage/newcase";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/cases" element={<CasesPage/>}/>
          <Route path="/cases/:id" element={<Case/>}/>
          <Route path="/cases/new" element={<NewCase/>}/>
          <Route path="/mylists" element={<LoginPage/>}/>
          <Route path="/notification" element={<LoginPage/>}/>
          <Route path="/logout" element={<LoginPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
