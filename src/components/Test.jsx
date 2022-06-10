import useFetch from "../hooks/useFetch";

function FetchComponent() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const { data, loading, error } = useFetch(url, {});

  if (error) {
    alert(error);
    return <h4>Error Occured</h4>;
  }

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default FetchComponent;
