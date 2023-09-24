import './Button.module.css';

const Button = ({text, type, className}) => {
   return (
      <> 
         <button type={type} className={`btn ${className}`}>{text}</button>
      </>
   );
}

export default Button;
