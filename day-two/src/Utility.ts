//Utility

//Partial<Type>
interface Todo {
    title?: string;
    description: string;
  }
   
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
   
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
   
  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });


  // Required<Type>
  interface Props {
    a?: number;
    b?: string;
  }
   
  const obj: Props = { a: 5 };
   
  const obj3: Required<Props> = { a: 5 ,b:'y'};
  //Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

  

