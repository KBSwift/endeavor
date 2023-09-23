import Input from "./Input";

const CreateContentForm = () => {
    return (
       <> 
            <form>
                <h4>Create Content Form</h4>
                <Input label="Title"/>
                <Input label="Description"/>
            </form>
       </>
    );
  }
  
  export default CreateContentForm;