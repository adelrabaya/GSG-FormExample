import { useState } from "react";
import "./App.css"

const Loan = () => {

    const [user,setUser] = useState({
        name : "",
        number : "",
        age : "",
        status : false,
        salary : ""
    })
    const [error,setError] = useState("")

    function handleValidate(){
        let err = "";
        if(user.name === ""){
            err = "Enter a valid name";
        }            
        else if(user.number === "" || user.number.length > 10){
            err = "Enter a valid number";
        }
        else if(user.age <18 || user.age >65){
            err = "Enter a valid age";
        }
        else if(user.salary === ""){
            err = "Enter a valid salary";
        }
        return err;
    }

    function handleSubmit(e){
        e.preventDefault();
        let validStatus = handleValidate();
        if(validStatus !== ""){
            setError(validStatus)
        }
        else {
            setError("The form Has Been Submitted Successfully");
            setUser({...user,name:"",age:"",number:"",salary:"",status:false})
            console.log(user)
        }

    }



    return ( 
        <div className="loan">
            <h2>Requesting a Loan</h2>
            <hr />
            {error && <div className="msg" id="errMsg"> <h3> {error} </h3> <button onClick={() => setError("")}>Ok!</button> </div>}
            <form action="handleSubmit" className="form">

                <p>Name:</p>
                <input type="text" label="name" value={user.name} onChange={(e) => setUser({...user, name : e.target.value})} />

                <p> Phone Number: </p>
                <input type="number"  label="Phone Number" value={user.number} onChange={(e) => setUser({...user, number : e.target.value})} />

                <p>Age:</p>
                <input type="number" label="Age" value={user.age} onChange={(e) => setUser({...user, age : e.target.value})} />

                <p style={{marginTop:20}}>Are you an employee?</p>
                <input type="checkbox" name="status" checked={user.status}  onChange={(e) => setUser({...user, status: !user.status})}/>

                <p>Salary:</p>
                <input type="text" label="Salary" value={user.salary} onChange={(e) => setUser({...user, salary : e.target.value})} />

                <button type="submit" style={{marginTop:20}} onClick={(e) => handleSubmit(e)}>Submit</button>


            </form>
        </div>
     );
}
 
export default Loan;
