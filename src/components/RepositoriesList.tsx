import { useState } from "react";
import { useActions } from "../hooks/useActions";

import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");

  const { searchRepositories } = useActions();

  // how to get the state, similar to const { state } = useContext(WhateverContext)
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  // console.log(state);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
