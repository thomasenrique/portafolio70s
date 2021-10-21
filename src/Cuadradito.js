import './App.css';
const Cuadradito = ({ color }) => {
    return (
        <div
            className="cuadradito"
            style={{ backgroundColor: color }}>
            {color}
        </div>
    )
}

export default Cuadradito