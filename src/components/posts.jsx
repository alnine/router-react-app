import React from "react";
import queryString from "query-string"; // for parse query string parameters

const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search); // example of parse query string to object
  console.log(result); // object of parameters from query string
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;
