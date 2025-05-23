import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
    const getToken = localStorage.getItem('token')
    if(getToken){
        localStorage.clear();
        navigate('/')
    }
    },[navigate])
  return (
    <>
    </>
  );
}
export default Logout
