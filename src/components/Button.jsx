import styles from './Button.module.css';

const Button = ({text, type}) => {
    return (
       <> 
            <button type={type}>{text}</button>
       </>
    );
  }
  
  export default Button;