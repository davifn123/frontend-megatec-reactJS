import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {



    const [user, setUser] = useState();
    //#region se existe user no localstorage
    useEffect(() => {

        const userToken = localStorage.getItem("user_token");
        const userStorage = localStorage.getItem("usuario_db")

        if (userToken && userStorage) {
            const hasUser = JSON.parse(userStorage)?.filter(
                (user) => user.emailUsuario === JSON.parse(userToken).emailUsuario
            );

            if (hasUser) setUser(hasUser[0]);

        }

    }, [])
    //#endregion

    //#region verificacao login
    const login = (emailUsuario, senhaUsuario) => {



        const userStorage = JSON.parse(localStorage.getItem("usuario_db"))

        const hasUser = userStorage?.filter((user) => user.emailUsuario === emailUsuario)

        if (hasUser?.length) {

            if (hasUser[0].emailUsuario === emailUsuario && hasUser[0].senhaUsuario === senhaUsuario) {

                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ emailUsuario, token }))
                setUser({ emailUsuario, senhaUsuario })
                return;

            } else {

                return "E-mail ou senha incorretos!"

            }

        } else {

            return "Usuário não cadastrado"

        }

    }
    //#endregion verificacao login

    //#region cadastro

    const signup = (emailUsuario, senhaUsuario) => {

        const userStorage = JSON.parse(localStorage.getItem("usuario_db"))

        const hasUser = userStorage?.filter((user) => user.emailUsuario === emailUsuario)

        if (hasUser?.length) {
            return "Já existe uma conta com esse E-mail "
        }

        let newUser;

        if (userStorage) {
            newUser = [...userStorage, { emailUsuario, senhaUsuario }];
        } else {
            newUser = [{ emailUsuario, senhaUsuario }];
        }

        localStorage.setItem('usuario_db', JSON.stringify(newUser))
        return;
    }

    //#endregion cadastro

    //#region logout

    const logout = () => {

        setUser(null);

        localStorage.removeItem("user_token");

        setTimeout(() => {
            window.location.reload(false);
        }, 300);


    }

    //#endregion logout



    return <AuthContext.Provider value={{ user, logado: !!user, login, signup, logout }} >{children}</AuthContext.Provider>

}