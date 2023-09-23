import styles from './Input.module.css';

const Input = ({label}) => {
    return (
       <> 
            <label for="textInput">
                {label}
            </label><br></br>
            <input type="text"></input>
       </>
    );
  }
  
  export default Input;