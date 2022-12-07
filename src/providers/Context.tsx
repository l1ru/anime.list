import React, { Context, createContext,  useContext, useEffect, useState } from "react";

interface IContext {
    actualFilter: string
    setActualFilter: (actualFilter: string) => void
}

const AnimeListCtx = createContext<IContext | null>(null)

export const AnimeListProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [actualFilter, setActualFilter] = useState("")

    return (
        <AnimeListCtx.Provider
            value={{actualFilter,setActualFilter}}
        >
            {children}
        </AnimeListCtx.Provider>
    )
}