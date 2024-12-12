import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
// '/api/products'


function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/products?search=" + search,{
          signal:controller.signal
        });
        console.log(response)
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('request canceled', error.message)
          return
        }
        setLoading(false);
        setError(true);
      }
    })();

    return ()=>{
      controller.abort();
    }

  }, [search]);
  // const [products, error, loading] = useApiQuery('/api/products',search)

  // if (error) {
  //   return <h1>Something went wrong...Try again later</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading....</h1>;
  // }

  return (
    <>
      <h1>Hello</h1>
      <input
        type=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Number of products are : {products.length}</h2>
    </>
  );
}

export default App;

// const useApiQuery = (pathUrl,searchQuery)=>{
//   const [products, setProducts] = useState([])
//   const [error, setError] = useState(false)
//   const [loading, setLoading] = useState(false)
//   useEffect(()=>{
//     (async ()=>{
//      try {
//       setLoading(true)
//        const response = await axios.get(pathUrl + '?search=' + searchQuery);
//        setProducts(response.data)
//        setLoading(false)
//      } catch (error) {
//       setLoading(false)
//       setError(true)
//      }
//     })()
//   },[searchQuery])
//   return [products,error,loading]
// }
