import React, { ChangeEvent, useState } from 'react';

type initStateProps = {
  username: string;
  email: string;
  password: string;
};
const useMergeState = (initState: initStateProps) => {
  const [cred, setCred] = useState(initState);
  const setState = (e: ChangeEvent<HTMLInputElement>) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };
  return { cred, setState };
};

export default useMergeState;

// const useMergeState = ({ ...initState }: initStateProps) => {
//   const [cred, setCred] = useState({ ...initState });
//   const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
//     console.log('e.target.value: ', e.target.value);
//     setCred({
//       ...cred,
//       [e.target.name]: e.target.value,
//     });
//   };
//   return [cred, handelChange];
// };
