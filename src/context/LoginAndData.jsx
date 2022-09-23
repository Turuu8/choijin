import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useContext, createContext } from "react";

const LoginAndData = createContext()

export const LoginProvirder = ({ children }) => {

    const [isData, setIsData] = useState('');
    const [userCheck, setUserCheck] = useState(false);

    const auth = getAuth();

   onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.phoneNumber;
            setUserCheck(true)
            setIsData(uid)
            console.log(userCheck)
        } else {
        }
    });

    const signOutFromFirebase = () => {
        signOut(auth).then((res) => {
            setUserCheck(false)
            setIsData('')
            alert('garlaaa')
        })
    }

    return (

        <LoginAndData.Provider value={{ isData, setIsData, userCheck, setUserCheck ,signOutFromFirebase }}>
            {children}
        </LoginAndData.Provider>
    )
}

export const useLoginAndDataContext = () => useContext(LoginAndData)