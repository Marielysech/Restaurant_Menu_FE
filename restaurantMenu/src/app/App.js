
import DataTable from '../components/DataTable/DataTable'
import { MenuContainer, MenuTitle, AppContainer, Credit } from './appElements';
import Label from '../components/Label/Label';

function App() {
  return (
    <AppContainer>
      <MenuContainer>
        <MenuTitle>Etual Café</MenuTitle>
        <DataTable />
        <Label/>
      </MenuContainer>
      <Credit>Photo by <a href="https://unsplash.com/@thisisralston?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">@Chris Ralston</a> from <a href="https://unsplash.com/@thisisralston?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </Credit>
    </AppContainer>
  );
}

export default App;
