import { useForm } from "../hooks/useForm"

export const Formulario2 = () => {

    const {formulario,cp,estado,handleChange} = useForm({
        cp: '12345',
        estado: 'cdmx'
    })

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">cp:</label>
            <input type="cp"
                className="form-control"
                name="cp"
                value={cp}
                onChange={handleChange}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">estado:</label>
            <input type="text"
                className="form-control"
                name="estado"
                value={estado}
                onChange={handleChange}
            />
        </div>

        <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}
