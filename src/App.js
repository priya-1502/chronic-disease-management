import { useQuery } from "@tanstack/react-query"
import './App.css';
import { userAPi } from "./API/userApi";

function App() {

  // https://pokeapi.co/api/v2/pokemon/ditto

  // function usePosts() {
  //   return useQuery({
  //     queryKey: ['posts'],
  //     queryFn: async () => {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //       return await response.json()
  //     },
  //   })
  // }
  // const { status, data, error, isFetching } = usePosts();

  const { data, isLoading} = useQuery({ queryKey: ['todos'], queryFn: userAPi });
  console.log(data);
  

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="text-8xl text-white font-bold">Hello, Tailwind CSS!</h1>
      </header>
    </div>
  );
}

export default App;
