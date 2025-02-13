import { useState } from "react"

export const Form = () => {
    const inputStyle = "focus:text-black focus:border-black flex flex-col items-center rounded-lg cursor-pointer border border-slate-400 text-slate-400"
    const [firstName, setFirstName] = useState('')
    const [isAlive, setIsAlive] = useState('')
    const [dob, setDob] = useState('')
    const [dod, setDod] = useState('')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if(dob == '') {
                alert('Fecha de nacimiento invalida')
                return
            } else if (firstName == '' || typeof(firstName) == 'number') {
                alert('Nombre no valido')
            } else if (isAlive == 'No' && dod === '') {
                alert('Fecha de defunción invalida')
            } else {
                const person = `
                <ul class='flex flex-col p-4 text-black bg-slate-200 h-fit rounded-lg' draggable='true'>
                    <li><b>Nombre:</b> ${firstName}</li>
                    <li><b>¿Está vivo?</b> ${isAlive}</li>
                    <li><b>Fecha de nacimiento:</b> ${dob}</li>
                    <li><b>Fecha de defuncion:</b> ${dod}</li>
                </ul>`;
                document.querySelector('#main')?.insertAdjacentHTML('beforeend', person);
            }
        } catch (error) {
            console.error(error)
        }}

    return (
        <form className="flex flex-col gap-4 px-2" onSubmit={handleSubmit}>
            <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                autoComplete="true"
                className=" focus:border-black text-black placeholder:text-center text-center border border-slate-400 rounded-lg p-2 cursor-pointer"
                type="text"
                id='name'
                name="name"
                placeholder="Nombre y apellido"
            />
            <label htmlFor="alive" className="p-2 rounded-lg border border-slate-400 text-slate-400 focus:text-black focus:border-black">
                ¿Está vivo?
                <select
                    onChange={(e) => setIsAlive(e.target.value)}
                    value={isAlive}
                    name="alive"
                    id='alive'
                    className="cursor-pointer"
                >
                    <option value='Si'>Si</option>
                    <option value="No">No</option>
                </select>
            </label>
            <label htmlFor="dob" className={inputStyle}>
                Fecha de nacimiento
                <input
                    className="cursor-pointer"
                    type="date"
                    name="dob"
                    id="dob"
                    autoComplete="true"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
            </label>
            <label htmlFor="dod" className={inputStyle}>
                Fecha de defunción
                <input
                    className="cursor-pointer"
                    type="date"
                    name="dod"
                    id="dod"
                    autoComplete="true"
                    value={dod}
                    onChange={(e) => setDod(e.target.value)}
                />
            </label>
            <input
                type="submit"
                value="Enviar"
                className="bg-blue-600 text-white cursor-pointer rounded-lg px-6 py-2 hover:bg-linear-to-r hover:from-blue-500 hover:to-cyan-500  transition ease duration-500"
            />
        </form>
    )
}