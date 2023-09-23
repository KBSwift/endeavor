import styles from './Input.module.css';

const Input = ({label, type}) => {
    return (
       <> 
            <label for="textInput">
                {label}
            </label><br></br>
            <input type={type}></input>
       </>
    );
  }
  
  export default Input;