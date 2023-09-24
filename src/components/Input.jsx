import styles from './Input.module.css';

const Input = ({ label, type }) => {
    if (type === "file") {
        return (
            <div className="mb-3">
                <label className="form-label">
                    {label}
                    <input className="form-control" type="file" multiple></input>
                </label>
            </div>
        );
    }
    return (
        <>
            <label>
                {label}
                <input type={type} id={label}></input>
            </label><br></br>

        </>
    );
}

export default Input;