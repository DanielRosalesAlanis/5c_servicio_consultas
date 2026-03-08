import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const API_URL = import.meta.env.VITE_API_URL;

function UserDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const getUserDetails = async () => {  
        const response = await fetch(API_URL + '/' + id);
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        if(id) {
            getUserDetails();
        }
    }, [id]);

    return (
        <>
        <div className="top-right-buttons">
        <CustomButton action={() => {navigate('/usersList')}}>
            Volver a Lista de Usuarios
        </CustomButton>
        </div>
        
            {
            user ? (
                <>
                    <h2>Información del usuario</h2>
                    <p>Nombre: {user.name.firstname}</p>
                    <p>Apellido: {user.name.lastname}</p>
                    <p>Nombre de usuario: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Teléfono: {user.phone}</p>
                </>
            ) : (
                <p>Cargando información del usuario...</p>
            )
            }
        </>
    )
}

export default UserDetails;