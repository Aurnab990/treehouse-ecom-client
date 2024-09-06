import { createContext } from "react";
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({children}) =>{
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    };

const authInfo = {
    googleLogin
}
return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
)
}
export default Authprovider;
