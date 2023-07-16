import MainLayout from "./layouts/MainLayout";
import { loginSuccess } from "./redux/features/authSlice";
import { useAppDispatch } from "./redux/hook";




function App() {
  const dispatch = useAppDispatch();
 const token = localStorage.getItem("token");
 const email = localStorage.getItem("email");

 if (token && email) {
   dispatch(loginSuccess({ email, token }));
 }

  return (
    <div className="  items-center h-[calc(100vh-80px)] max-w-7xl mx-auto">
     <MainLayout />
     
    </div>
  );
}

export default App
