import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const MenuBar = createContext()

export const MenuBarProvider = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const [small, setSmall] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setSmall(window.pageYOffset > 20)
            }
            );
        }
    }, []);

    return (
        <MenuBar.Provider value={{ isDrawerOpen, setIsDrawerOpen, small, setSmall }}>
            {children}
        </MenuBar.Provider>
    )

}
export const useMenuBarContext = () => useContext(MenuBar)