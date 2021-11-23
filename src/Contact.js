import { useState } from "react";

const Contact = () => {
    const [state, setstate] = useState({
        fields: {
            name: '',
            email: '',
            message: ''
        },
        errors: {
            name: '',
            email: '',
            message: ''
        }
    })


    const handleValidation = () => {
        const fields = state.fields;
        const errors = state.errors;
        let formIsValid = true;
        const errorMessage = {
            notEmpty: " shoudn't be empty",
            onlyLetters: "Only letters please",
            inValidEmail:  "Valid email please"
        };


        console.log('NAMEEEEEEEEEEEEEEEE IS ');
        console.log(fields["name"]);
        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = `Name ${errorMessage.notEmpty}`;
        }
  
        if(fields["name"].length > 0){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = errorMessage.onlyLetters;
           }        
        }
   
        //Email
        if(!fields["email"].trim()){
           formIsValid = false;
           errors["email"] = `Email ${errorMessage.notEmpty}`;
        }
  
        if(fields["email"].length > 0){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = `Email ${errorMessage.inValidEmail}`;
            }
       }  

       setstate({fields: fields, errors: errors});
       return formIsValid;
    }

    const getValue = (event) => {
        const fields = state.fields;
        const attribute = event.target.name;
        fields[attribute] = event.target.value;
        setstate({fields: fields, errors: state.errors});
    }

    const handleFocus = (event) => {
        const errors = state.errors;
        const attribute = event.target.name;
        errors[attribute] = '';
        setstate({fields: state.fields, errors: errors});
    }

   const sendQuery = (event) => {
        event.preventDefault();

        if(handleValidation()){
            const fields = state.fields;
            const subject = 'Howdy Siddhesh!'
            console.log('form validated');
            window.open(`mailto:'siddh14.kubal@gmail.com?subject=${subject}&body=${fields.message}`);
        } else {
            console.log('form not valid');
        }
        //console.log(JSON.stringify(state));
    }

    return ( 
        <div className="contact scrollTopBuffer" id="contact">
            <div className="section">
                <h1><span>Contact Me</span></h1>
                
                <svg className="face" height="100" width="100">
                    <circle cx="50" cy="50" r="50" fill="#FDD835"/>
                    <circle cx="30" cy="30" r="10" fill="#FFFFFF"/>
                    <circle cx="70" cy="30" r="10" fill="#FFFFFF"/>
                    <circle cx="30" cy="30" r="5" fill="#000000"/>
                    <circle cx="70" cy="30" r="5" fill="#000000"/>
                    <path d="M 30 70 q 20 20 40 0" stroke="#FFFFFF" strokeWidth="5" fill="none" />
                </svg>
                    
                <form>
                    <div className="pos-rel">
                        <input name="name" placeholder="Name" type="text" required 
                         onChange={getValue} onFocus={handleFocus}/>
                        <span className="error-msg">{state.errors["name"]}</span>
                    </div>
                    <div className="pos-rel">
                        <input name="email" placeholder="Email" type="email" required onChange={getValue} onFocus={handleFocus}/>
                        <span className="error-msg">{state.errors["email"]}</span>
                    </div>
                    
                    <textarea name="message" placeholder="Message" required onChange={getValue} onFocus={handleFocus}></textarea>
                    <button className="submit" onClick={ sendQuery }>Send</button>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;