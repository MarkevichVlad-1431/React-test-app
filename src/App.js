import './App.css';
import s from './App.module.scss';
import Content from './Components/Content/Content';
import TopMenu from './Components/TopMenu/TopMenu';

const App = () => {
  return (
    <div className={s.bodyApp}>

      <TopMenu/>
      <Content/>
    </div>
  )
}

export default App;
