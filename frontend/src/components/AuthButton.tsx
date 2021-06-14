import { useHistory } from "react-router-dom";
import { TOKEN } from "../constants/config";
import { useAuth } from "../context/Auth";
import { authType } from "../CostumType";

export function AuthButton() {
  let history = useHistory();
  let auth = useAuth() as authType;

  return auth.user ? (
    <p className="flex justify-center">
      Welcome! <span>🔥</span>
      <button
        onClick={() => {
          auth.signout(() => {
            localStorage.removeItem(TOKEN);
            history.push("/");
          });
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p className="flex justify-center">You are not logged in.</p>
  );
}
