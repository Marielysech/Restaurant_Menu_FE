import './App.css';
import MenuDataTable from '../components/MenuDataTable'
import MenuLabel from '../components/MenuLabel'
import { MenuContainer, MenuTitle } from './appElements';

function App() {
  return (
    <div className="appContainer">
      <MenuContainer>
        <MenuTitle></MenuTitle>
        <MenuDataTable>
        </MenuDataTable>
        <MenuLabel />

      </MenuContainer>
    </div>
  );
}

export default App;
