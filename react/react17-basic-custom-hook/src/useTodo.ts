import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useTodo(): {
  id: number;
  setId: Dispatch<SetStateAction<number>>;
  data: obj;
} {
  const [id, setId] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.cypress.io/todos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData({
          id: data.id,
          title: data.title,
        });
      });
  }, [id]);

  return { id, setId, data };
}
