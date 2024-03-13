import { useState } from "react"

interface User {
    uid: string;
    name: string;
}

export const Usuario = () => {

    const [user,setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: "ABC123",
            name: "Ernesto Garcia"
        })
    }
  return (
    <div>
        <h3>Usuario</h3>

        <button
            className="btn btn-outline-primary"
            onClick={login}
        >
            login
        </button>

        {
            (!user)
            ? <pre>No hay usuario</pre>
            : <pre>{JSON.stringify(user)}</pre>
        }

        
    </div>
  )
}
