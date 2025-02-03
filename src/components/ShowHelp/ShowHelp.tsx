
interface Props {
    method: () => void
}

export const ShowHelp = ({method}: Props) => {
    return (
        <div className="flex flex-col bg-slate-900 w-full justify-center place-items-center" onClick={method}>
            <ol className="list-disc text-xl">
                <li>Ingresar nombre de la persona.<br /> Puedes empezar por tus ascendientes o descendientes</li>
                <li>Seleccionar estilo deseado.</li>
                <li>Indicar si está vivo o no.</li>
                <li>Indicar sus respectivas fechas.</li>
                <li>Presionar el botón <span className="text-green-300"><b>Agregar</b></span>.</li>
            </ol>
            <p className="text-slate-700 mt-10 italic">(Para cerrar, hacer click)</p>
        </div>
    )
}