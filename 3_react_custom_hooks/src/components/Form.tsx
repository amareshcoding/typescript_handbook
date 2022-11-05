import useMergeState from '../hooks/useMergeState';

const Form = () => {
  const initState = {
    username: '',
    email: '',
    password: '',
  };
  const { cred: state, setState } = useMergeState(initState);
  console.log('state: ', state);

  return (
    <div>
      <h1>Form</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={setState}
          name="username"
          value={state.username}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={setState}
          value={state.email}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={setState}
          value={state.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
