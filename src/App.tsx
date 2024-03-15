import "./scss/all.scss";

import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Film } from "./pages/Film/Film";
import { NotFound } from "./pages/NotFound/NotFound";

export type searchValueType = {
  setSearchValue?: (value: string) => void;
  searchValue?: string;
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<Film />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
