import { AppContainer } from './styles/styles';
import Column from './components/Column';
import Card from './components/Card';

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Make TypeScript Project" />
      </Column>
      <Column text="In Progress">
        <Card text="Make TypeScript Project" />
      </Column>
      <Column text="Completed!">
        <Card text="Make TypeScript Project" />
      </Column>
    </AppContainer>
  );
}

export default App;
