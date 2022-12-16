import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Search() {
  let history = useHistory();
  const [search, setSearch] = useState({
    keyWord: "",
  });
  const onChangeSeach = (event) =>
    setSearch({ ...search, [event.target.name]: event.target.value });
  const onSearch = (event) => {
    event.preventDefault();
    if (search.keyWord == "") {
      history.push(`/allCourse`);
    } else {
      history.push(`/search?title=${search.keyWord}`);
    }
  };
  return (
    <Form className="d-flex w-50 me-auto ms-auto" onSubmit={onSearch}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        name="keyWord"
        value={search.keyWord}
        onChange={onChangeSeach}
      />
      <Button variant="outline-light" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default Search;
