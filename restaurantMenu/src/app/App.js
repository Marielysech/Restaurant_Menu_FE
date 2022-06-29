import './App.css';
import DataTable from '../components/DataTable/DataTable'
import { MenuContainer, MenuTitle } from './appElements';
import Label from '../components/Label/Label';

function App() {
  return (
    <div className="appContainer">
      <MenuContainer>
        <MenuTitle>Etual Café</MenuTitle>
        <DataTable />
        <Label/>
      </MenuContainer>
    </div>
  );
}

export default App;
