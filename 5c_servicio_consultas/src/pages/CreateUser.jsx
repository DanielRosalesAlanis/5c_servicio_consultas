import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function CreateUser() {
    const navigate = useNavigate();

    const [newUser, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleCreateUser = async () => { 

    if(newUser.username === '' || newUser.email === '' || newUser.password === '') {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    if(newUser.password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    try {

        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        const data = await response.json()

        if(!response.ok){   
            const error = new Error('Error al crear el usuario');
            error.status = response.status;
            error.statusText = data.message;
            throw error;
        }

        console.log("Usuario creado:", data);
        alert("Usuario creado con id: " + data.id);

    } catch (error) {
        console.log(error);
    }
}

    return (
        <>
        <div className="top-right-buttons">
        <CustomButton action={() => {navigate('/usersList')}}>
                Volver a Lista de Usuarios
        </CustomButton>
        </div>

            <h2>Crear Usuario</h2>
            <div>
                <CustomInput
                    label={"username: "}
                    type={"text"}
                    name={"username"}
                    value={newUser.username}
                    onChange={
                        (event) => {setUser({
                            ...newUser,
                            username: event.target.value
                        })
                    }}
                />

                <CustomInput
                    label={"email: "}
                    type={"email"}
                    name={"email"}
                    value={newUser.email}
                    onChange={
                        (event) => {setUser({
                            ...newUser,
                            email: event.target.value
                        })
                    }}
                />

                <CustomInput
                    label={"password: "}
                    type={"password"}
                    name={"password"}
                    value={newUser.password}
                    onChange={
                        (event) => {setUser({
                            ...newUser,
                            password: event.target.value
                        })
                    }}
                />

                <CustomButton action={handleCreateUser}>
                    Crear Usuario
                </CustomButton>

            </div>
        </>
    );
}

export default CreateUser;