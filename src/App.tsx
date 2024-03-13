import "./scss/all.scss";

import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Film } from "./pages/Film/Film";

export type searchValueType = {
  setSearchValue?: (value: string) => void;
  searchValue?: string;
};





// TODO Пагинация
// TODO (Попробовать подключить редакс)









const App = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="App">
      <BrowserRouter>
        <Header setSearchValue={setSearchValue} />
        <main>
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/film/:id" element={<Film />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
