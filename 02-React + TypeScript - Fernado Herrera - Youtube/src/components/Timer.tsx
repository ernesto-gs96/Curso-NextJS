import { useEffect, useRef, useState } from "react"

type TimerArgs = {
    milisegundos: number
}

export const Timer = (args: TimerArgs) => {

    const {milisegundos} = args;
    const [segundos,setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>();

    useEffect(() => {
        ref.current && clearInterval(ref.current)
        ref.current = setInterval(() => setSegundos(s => s+1),milisegundos)
    }, [milisegundos])

  return (
    <div>
        <h4>Timer: <small>{segundos}</small></h4>
    </div>
  )
}
