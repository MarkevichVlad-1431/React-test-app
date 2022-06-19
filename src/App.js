import './App.css';
import s from './App.module.scss';
import Friends from './Components/Content/Friends/Friends';
import Home from './Components/Content/Home/Home';
import Test from './Components/Content/Test/Test';
import Layout from './Components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className={s.bodyApp}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='friends' element={<Friends />} />
          <Route path='test' element={<Test />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
