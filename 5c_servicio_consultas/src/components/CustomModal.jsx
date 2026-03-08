function CustomModal({ message, onConfirm, onCancel }) {
    return (
        <div className="modal-overlay">

            <div className="modal-content">

                <p>{message}</p>

                <button onClick={onConfirm}>
                    Confirmar
                </button>

                <button onClick={onCancel}>
                    Cancelar
                </button>

            </div>

        </div>
    );
}

export default CustomModal;