import { ThemeContext } from "../context/Theme";
import CssBaseline from '@mui/material/CssBaseline';
import { HomePage } from "../page/home-page/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from '../page/login-page/LoginPage';
import { PageBookATable } from "../page/book-a-table/PageBookATable";

function AppSecond() {
  return (
    <BrowserRouter>
      <ThemeContext>
        <CssBaseline />
        <Routes>
          <Route path="/" element={ <HomePage/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path= "/bookatable" element={<PageBookATable/>}/>
        </Routes>
      </ThemeContext>
    </BrowserRouter>
  )
}
export default AppSecond;
