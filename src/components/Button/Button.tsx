
interface Props {
    label: string
    style: string
    icon: JSX.Element
    method: () => void
}

export const Button: React.FC<Props> = ({ label, method, icon, style }) => {
    return (
        <button className={style} onClick={method}>
            <>
            {icon}
            </>
            {label}
        </button>
    )
}