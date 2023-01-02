import { useState } from "react";
import LoadingButton  from "@mui/lab/LoadingButton";
// import SaveIcon from '@mui/icons-material/Save';

const Otp1 = () => {
    const [isPending, setIsPending] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    const move = (e, p, c, n) =>{

        var len = document.getElementById(c).value.length
        var maxLen = document.getElementById(c).getAttribute('maxlength')
        
        if (len === 1 ){
            if(n !==''){
                 document.getElementById(n).focus();
                 
            }

           
        }

         if(len === 0){
            if(p !==''){
                document.getElementById(p).focus()

            }
        }

        setIsPending(true)
      
    }


    return ( 
    <>

<form onSubmit={handleSubmit}>
    <input type="number" required id="txt1" min={0} max={9} maxLength='1'  onKeyUp={event=> move(event, '', 'txt1', 'txt2')}/>
    <input type="number" required id="txt2" min={0} max={9} maxLength='1'  onKeyUp={event=> move(event, 'txt1', 'txt2', 'txt3')}/>
    <input type="number" required id="txt3" min={0} max={9} maxLength='1'  onKeyUp={event=> move(event, 'txt2', 'txt3', 'txt4')}/>
    <input type="number" required id="txt4" min={0} max={9} maxLength='1'  onKeyUp={event=> move(event, 'txt3', 'txt4', '')}/> <br />
    {!setIsPending && <button type="submit">SUBMIT</button>}
    {isPending && <button type="submit" disabled>SUBMIT</button>}
    <LoadingButton
        loading
        loadingPosition="start"
        // startIcon={<SaveIcon />}
        variant="outlined"
      >
        .....Save
      </LoadingButton>
   
</form>

    </> 
    );
}
 
export default Otp1;