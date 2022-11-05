import './App.css';
import Stopwatch from './components/Stopwatch';
// import usePost from './hooks/usePost';
import { getPosts, Post } from './action';
import { useEffect, useState } from 'react';

function App() {
  const [page, setPage] = useState<number>(1);
  
  // const { post, loading, error, execute } = usePost<Post[]>(getPosts, dontExecuteOnMount: true);

  // useEffect(()=>{
  //   execute(page);
  // }, [page])

  // if (loading) {
  //   return <>"Looding...."</>;
  // }
  // if (error) {
  //   return <>"Error...."</>;
  // }
  return (
    <div className="App">
      <Stopwatch />
      {/* <h1>POST</h1>
      {post.map((p: Post) => (
        <div>
          <div key={p.id}>{p.message}</div>
          <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
          <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </div>
      ))} */}
    </div>
  );
}

export default App;
