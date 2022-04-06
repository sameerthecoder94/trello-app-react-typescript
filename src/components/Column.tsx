import { ColumnContainer, ColumnTitle } from '../styles/styles';
import AddNewItem from './AddNewItem';

interface ColumnProps {
  text: string;
}

function Column({ text, children }: React.PropsWithChildren<ColumnProps>) {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem toggleButtonText="+Add another text" dark onAdd={() => {}} />
    </ColumnContainer>
  );
}

export default Column;
