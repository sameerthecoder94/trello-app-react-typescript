import { AppContainer } from './styles/styles';
import Column from './components/Column';
import { useAppState } from './context/AppStateContext';

function App() {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}
    </AppContainer>
  );
}

export default App;
