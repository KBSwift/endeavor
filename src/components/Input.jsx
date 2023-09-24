import styles from './Input.module.css';

const Input = ({label, type}) => {
    if(type === "file"){
        return(
            <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">{label}</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple></input>
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