export const Form = () => {
    return (
        <form className="flex flex-col gap-4 justify-center">
            <input className="w-fit m-auto text-black placeholder:text-center focus:border-green-600 border-2 rounded-full p-2" type="text" name="name" placeholder="Nombre y apellido" />
            <label htmlFor="alive">¿Está vivo?
                <select name="alive">
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                </select>
            </label>
            <label htmlFor="dob">
                Fecha de nacimiento
                <input type="date" name="dob" id="dob" />
            </label>
            <label htmlFor="dod">
                Fecha de defunción
                <input type="date" name="dod" id="dod" />
            </label>
        </form>
    )
}