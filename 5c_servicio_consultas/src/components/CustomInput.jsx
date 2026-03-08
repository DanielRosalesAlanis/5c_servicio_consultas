function CustomInput({ label , type, name, value, onChange }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
                id={name}
                type={type}
                name={name} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    );
}
export default CustomInput;