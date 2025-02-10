import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Home from './page/HomeComponent';
import Layout from './page/LayoutComponent';
import NoPage from './page/NoPageComponent';
import Login from './page/LoginComponent';
import About from './page/AboutComponent';
import MainContentComponent from '../MainContentComponent';



const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="learning" element={<MainContentComponent />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<ReactRouter />);

export default ReactRouter
