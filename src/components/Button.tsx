interface Props {
    children: string,
    color?: 'primary' | 'secondary' | 'danger', // this will make sure only these color are getting passed.
    onClick: () => void
}

const Button = ({children, color, onClick} : Props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    )
}

export default Button