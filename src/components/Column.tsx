import { ColumnContainer, ColumnTitle } from '../styles/styles';
import AddNewItem from './AddNewItem';
import { useAppState } from '../context/AppStateContext';
import Card from './Card';

interface ColumnProps {
  text: string;
  index: number;
}

function Column({ text, index }: ColumnProps) {
  const { state } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem toggleButtonText="+Add another task" dark onAdd={() => {}} />
    </ColumnContainer>
  );
}

export default Column;
