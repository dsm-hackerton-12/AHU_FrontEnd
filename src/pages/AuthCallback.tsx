import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";

const AuthCallback = () => {
  const navigator = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const { login } = useUserStore();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const name = searchParams.get("name");
    const email = searchParams.get("email");
    console.log(accessToken, name, email);

    if (accessToken && name && email) {
      navigator("/")
      login(name, email, accessToken);
    } else {
      console.error("Oauth 로그인에 실패했습니다.");
    }
  }, []);

  return <div>Loading...</div>;
};

export default AuthCallback;
