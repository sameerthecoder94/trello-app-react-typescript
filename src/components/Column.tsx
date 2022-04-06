import { ColumnContainer, ColumnTitle } from '../styles/styles';
import AddNewItem from './AddNewItem';
import { useAppState } from '../context/AppStateContext';
import Card from './Card';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

function Column({ text, index, id }: ColumnProps) {
  const { state, dispatch } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+Add another task"
        dark
        onAdd={(addText) =>
          dispatch({ type: 'ADD_TASK', payload: { addText, taskId: id } })
        }
      />
    </ColumnContainer>
  );
}

export default Column;
