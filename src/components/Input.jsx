import styles from './Input.module.css';

const Input = ({label, type}) => {
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