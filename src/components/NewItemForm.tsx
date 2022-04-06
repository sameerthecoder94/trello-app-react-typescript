import { useState } from 'react';
import {
  NewItemButton,
  NewItemFormContainer,
  NewItemInput
} from '../styles/styles';
import useFocus from '../utils/useFocus';

interface NewItemFormProps {
  onAdd(text: string): void;
}

function NewItemForm({ onAdd }: NewItemFormProps) {
  const [text, setText] = useState('');
  const inputRef = useFocus();
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
}

export default NewItemForm;
