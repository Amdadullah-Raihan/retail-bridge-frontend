import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Routers from "./Routes";

function App() {
  return (
    <main className="flex h-screen App dark:bg-gray-900 dark:text-white">
      <BrowserRouter>
        <Toaster />
        <Routers />
      </BrowserRouter>
    </main>
  );
}

export default App;
