import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import tiendaImg from "../assets/store.png";

function Home() {

    const navigate = useNavigate();

    return (
        <>
        <div className="top-right-buttons">
            <CustomButton action={() => navigate('/login')}>
                Login
            </CustomButton>
        </div>

            <h2>Bienvenidos a la Tienda Local</h2>
            <p>¡Productos frescos, siempre!</p>


            <img 
                src={tiendaImg} 
                alt="Tienda local"
                style={{ width: "300px", margin: "20px 0" }}
            />
            
        </>
    );
}

export default Home;