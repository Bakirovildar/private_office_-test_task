import './App.css';
import Header from "./layouts/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Authorization from "./pages/Authorization";
import Contacts from "./pages/Contacts";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='main-class'>
                    <Routes>
                        <Route path={'/login'} element={<Authorization/>}/>
                        <Route path={'/contacts'} element={<Contacts/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
