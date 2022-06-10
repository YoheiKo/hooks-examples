import useFetch from "../hooks/useFetch";

function CustomHookExample() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );
  console.log(data);
  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    alert(error);
  }

  return (
    <div>
      {data.map((post, index) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default CustomHookExample;
