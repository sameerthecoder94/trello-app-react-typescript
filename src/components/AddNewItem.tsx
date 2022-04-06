import { useState } from 'react';
import { AddItemButton } from '../styles/styles';

interface AddNewItemProps {
  toggleButtonText: string;
  dark: boolean;
}

function AddNewItem({ toggleButtonText, dark }: AddNewItemProps) {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <div>Hello</div>;
  }

  return (
    <AddItemButton onClick={() => setShowForm(true)} dark={dark}>
      {toggleButtonText}
    </AddItemButton>
  );
}

export default AddNewItem;
