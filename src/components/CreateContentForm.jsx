import Button from "./Button";
import Input from "./Input";

const CreateContentForm = () => {
    return (
       <> 
            <form>
                <h4>Create Your Content</h4>
                <Input label="Title" type="text"/><br></br>
                <Input label="Content" type="file"/><br></br>
                <Button text="Submit" type="submit"/>
            </form>
       </>
    );
  }
  
  export default CreateContentForm;