import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from '../components/CustomButton';
import CustomTable from "../components/CustomTable";
import CustomModal from "../components/CustomModal";

const API_URL = import.meta.env.VITE_API_URL;

function UsersList() {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const columns = ['Nombre', 'Apellido', 'Username', 'Email', 'Teléfono', 'Acciones'];

    const getUsers = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/');
    }

    const confirmDelete = (id) => {
        setUserToDelete(id);
        setShowModal(true);
    }

    const deleteUser = async () => {

        await fetch(API_URL + "/" + userToDelete,{
            method: "DELETE"
        });

        setUsers(users.filter(user => user.id !== userToDelete));

        setShowModal(false);
    }

    return (
        <>
        <div className="top-right-buttons">
            <CustomButton action={() => navigate('/createUser')}>
                Crear usuario
            </CustomButton>

            <CustomButton action={logout}>
                Cerrar sesión
            </CustomButton>
        </div>

            <h2>Lista de usuarios</h2>

            {users.length === 0 ? (
                <p>Cargando usuarios...</p>
            ) : (
                <CustomTable
                    columns={columns}
                    data={users.map(user => ({
                        id: user.id,
                        nombre: user.name.firstname,
                        apellido: user.name.lastname,
                        username: user.username,
                        email: user.email,
                        telefono: user.phone,
                        acciones: (
                            <>
                                <CustomButton action={() => navigate(`/userDetails/${user.id}`)}>
                                    Ver
                                </CustomButton>

                                <CustomButton action={() => confirmDelete(user.id)}>
                                    Borrar
                                </CustomButton>
                            </>
                        )
                    }))}
                />
            )}

            {showModal && (
                <CustomModal
                    message="¿Seguro que deseas eliminar este usuario?"
                    onConfirm={deleteUser}
                    onCancel={() => setShowModal(false)}
                />
            )}
        </>
    );
}

export default UsersList;