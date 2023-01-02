import React from 'react'

import {TextField, Button} from '@mui/material'

export default function NewOTP() {
  return (
    <div>

<form action="">
<TextField type="number" max="9" min="0" id="one" name='otp1' required/>
<TextField type="number" max="9" min="0" id="one" name='otp2' required/>
<TextField type="number" max="9" min="0" id="one" name='otp3' required/>
<TextField type="number" max="9" min="0" id="one" name='otp4' required/><br /><br />
<Button fullWidth variant='contained'>submit</Button>
</form>


    </div>
  )
}
