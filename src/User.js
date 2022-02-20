import { Link, useMatch, useParams } from "react-router-dom";

function User() {
  const params = useParams();
  const match = useMatch("/users/2");
  console.log("match", match);
  return (
    <div>
      <h6>
        <span role="img" aria-label="people">
          👤
        </span>{" "}
        {params.id}
      </h6>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default User;
