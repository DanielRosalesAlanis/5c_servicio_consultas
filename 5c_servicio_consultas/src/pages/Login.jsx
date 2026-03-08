import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_AUTH;

function Login() {

    const navigate = useNavigate();

    const [loginUser, setUser] = useState({
        username: '',
        password: ''
    });

    const handleLogin = async () => { 

        if(loginUser.username === '' || loginUser.password === '') {
            alert('Por favor, completa todos los campos');
            return;
        }

        try {

            const response = await fetch(API_URL,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginUser)
            });

            if(!response.ok){
                alert("Usuario o contraseña incorrectos");
                return;
            }

            const data = await response.json();

            localStorage.setItem("token", data.token);

            navigate('/usersList');

        } catch (error) {
            console.log(error);
            alert("Error en el login");
        }
    };

    return (
    <>
        <h2>Iniciar Sesión</h2>

        <div>

            <CustomInput
                label={"username: "}
                type={"text"}
                name={"username"}
                value={loginUser.username}
                onChange={(event)=>{
                    setUser({
                        ...loginUser,
                        username: event.target.value
                    })
                }}
            />

            <CustomInput
                label={"password: "}
                type={"password"}
                name={"password"}
                value={loginUser.password}
                onChange={(event)=>{
                    setUser({
                        ...loginUser,
                        password: event.target.value
                    })
                }}
            />

            <CustomButton action={handleLogin}>
                Iniciar Sesión
            </CustomButton>

        </div>
    </>
    );
}

export default Login;