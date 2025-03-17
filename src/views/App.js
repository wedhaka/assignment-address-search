import { createContext } from "react";
import HomeScreen from "./pages/homeScreen";

const ThemeContext = createContext({theme: ''});

function App() {
    return (
        <ThemeContext.Provider value={'light'}>
            <HomeScreen></HomeScreen>
        </ThemeContext.Provider>
    );
}

export default App;
