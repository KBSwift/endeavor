import Input from "./Input";

const CreateContentForm = () => {
    return (
       <> 
            <form>
                <h4>Create Content Form</h4>
                <Input label="Title" type="text"/>
                <Input label="Description" type="file"/>
            </form>
       </>
    );
  }
  
  export default CreateContentForm;