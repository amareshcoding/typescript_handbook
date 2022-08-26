import { exec } from 'child_process';
import { useEffect, useState } from 'react';
// type Options={
//      dontExecuteOnMount?:Boolean 
// }
const usePost = <T,>(getPosts, initialState: T) => {
  const [post, setPost] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const exec = async ()=>{
     setLoading(true);
     getPosts()
       .then((d) => {
         setLoading(false);
         setError(false);
         setPost(d);
       })
       .catch((e) => {
         setLoading(false);
         setError(true);
       });
  }
  
  useEffect(() => {
    //  if(option?:Options){
    //       exec();
    //  }
    
  }, []);
  return { post, loading, error, exec };
};

export default usePost;


// ctrl+shift+p