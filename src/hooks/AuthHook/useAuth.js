import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/Auth";

const useAuth = () => {

    const authContext = useContext(AuthContext);

    return authContext;

}

export default useAuth;