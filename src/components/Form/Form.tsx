interface Props {
    submitAction: () => void
}

export const Form = ({ submitAction }: Props) => {
    const inputStyle = "flex flex-col items-center bg-slate-300 rounded-full w-3/4"

    return (
        <form className="flex flex-col gap-4 justify-center items-center" onSubmit={submitAction}>
            <input autoComplete="true" className="w-fit m-auto bg-slate-300 text-black placeholder:text-center text-center rounded-full p-2" type="text" name="name" placeholder="Nombre y apellido" />
            <label htmlFor="alive" className="bg-slate-300 w-fit p-2 rounded-full">¿Está vivo?
                <select name="alive" id='alive'>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                </select>
            </label>
            <label htmlFor="dob" className={inputStyle}>
                Fecha de nacimiento
                <input type="date" name="dob" id="dob" autoComplete="true" />
            </label>
            <label htmlFor="dod" className={inputStyle}>
                Fecha de defunción
                <input type="date" name="dod" id="dod" autoComplete="true" />
            </label>
            <input type="submit" value="Enviar" className="bg-slate-300 rounded-full px-6 py-2" />
        </form>
    )
}