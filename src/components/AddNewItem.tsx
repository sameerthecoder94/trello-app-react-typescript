import { useState } from 'react';
import { AddItemButton } from '../styles/styles';
import NewItemForm from './NewItemForm';

interface AddNewItemProps {
  toggleButtonText: string;
  onAdd(text: string): void;
  dark: boolean;
}

function AddNewItem({ toggleButtonText, dark, onAdd }: AddNewItemProps) {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton onClick={() => setShowForm(true)} dark={dark}>
      {toggleButtonText}
    </AddItemButton>
  );
}

export default AddNewItem;
