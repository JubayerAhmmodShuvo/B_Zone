import { useAppSelector } from "../hook";

export default function useAuth() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const email = useAppSelector((state) => state.auth.email);
  const token = useAppSelector((state) => state.auth.token);

  return {
    isAuthenticated,
    email,
    token,
  };
}
