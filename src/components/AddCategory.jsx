import { useState } from 'react';

export const AddCategory = ({ onNewCatergory }) => {
  const [term, setTerm] = useState('');

  const onSetTerm = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (term.trim().length <= 1) return;

    // setCategories(categories => [term, ...categories])
    onNewCatergory(term.trim());
    setTerm('');
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={term}
        onChange={onSetTerm}
      />
    </form>
  );
};
