import { AppContainer } from './styles/styles';
import Column from './components/Column';
import { useAppState } from './context/AppStateContext';
import AddNewItem from './components/AddNewItem';

function App() {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={() => {}} dark />
    </AppContainer>
  );
}

export default App;
