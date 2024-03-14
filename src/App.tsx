import "./scss/all.scss";

import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Film } from "./pages/Film/Film";
import { NotFound } from "./pages/NotFound/NotFound";

export type searchValueType = {
  setSearchValue?: (value: string) => void;
  searchValue?: string;
};

// TODO (Попробовать подключить редакс)

const App = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="App">
      <BrowserRouter>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <main>
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/film/:id" element={<Film />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
