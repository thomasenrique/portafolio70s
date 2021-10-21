import './Perfil.css'
const Perfil = ({ nombre, email, img }) => {

    return (
        <div className="Perfil">
            <div className="Img">{img}</div>
            <div className="Datos">
                <div className="Nombre">{nombre}</div>
                <div className="Email">{email}</div>
            </div>

        </div>
    )
}

export default Perfil