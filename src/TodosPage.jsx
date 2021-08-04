import React, { useEffect } from 'react';

export const TodosPage = ({todo}) => {
  return (
    <ul>
      {todo.length > 0 && todo.map(x=><li key={x.title}>{x.title}</li>)}
    </ul>
  );
}