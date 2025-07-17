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
    const userId = searchParams.get("userId");

    if (accessToken && name && email && userId) {
      navigator("/")
      login(name, email, accessToken, userId);
    } else {
      console.error("Oauth 로그인에 실패했습니다.");
    }
  }, []);

  return <div>Loading...</div>;
};

export default AuthCallback;
