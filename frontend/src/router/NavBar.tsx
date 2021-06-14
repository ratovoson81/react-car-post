import classNames from "classnames";
import { Link } from "react-router-dom";

const item = classNames(
  "w-20",
  "h-9",
  "flex",
  "items-center",
  "justify-center"
);

const active = classNames(item, "bg-gray-100", "rounded-lg");

export default function NavBar() {
  return (
    <>
      <ul className="flex justify-center">
        <Link to="/register">créer un compte</Link>
      </ul>
    </>
  );
}
