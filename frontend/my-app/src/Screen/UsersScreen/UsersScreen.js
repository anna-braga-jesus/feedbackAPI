import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Banco-Carrefour.jpg";
import Css from "./style";

export default function UsersScreen() {
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4001/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((res) => {
        setUser();
      });
  }, []);
  return (
    <>
      <Css.Header>
        <img src={logo} alt="google" />
        <Css.Footer>
          {" "}
          <Link to={"/post"}>
            <p>Comente aqui!</p>
          </Link>
        </Css.Footer>
      </Css.Header>
      <Css.Comments>
        <Css.Box>
          <p>Nossos clientes podem contar com a gente!</p>
          <div>
            {user &&
              user.map((item) => {
                return <Css.UserItem> {item.email} </Css.UserItem>;
              })}
          </div>
        </Css.Box>
      </Css.Comments>
    </>
  );
}
