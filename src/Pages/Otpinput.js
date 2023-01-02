import React from 'react';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

class Otpinput extends React.Component {

    constructor(props) {
      super(props);
      this.state = {otp1:this.otp1, otp2:this.otp2, otp3:this.otp3, otp4:this.otp4
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
    }
  
    handleChange(value1, event) {
  
      this.setState({ [value1]: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const otp1 = this.state.otp1;
      const otp2 = this.state.otp2;
      const otp3 = this.state.otp3;
      const otp4 = this.state.otp4;

      if (otp1 === undefined || otp2 === undefined || otp3 === undefined || otp4 === undefined){
        console.log('error')
      }else{
        const data = [otp1, otp2, otp3, otp4]
        fetch('http://reqres.in/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then( res =>{
          console.log(res)
        }).catch(err =>{
          console.log(err)
        })

      }
    }

    inputfocus = (elmnt) => {

        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
          const next = elmnt.target.tabIndex - 2;
          if (next > -1) {
    
            elmnt.target.form.elements[next].focus()
          }
        }
        // else {
         
        //     const next = elmnt.target.tabIndex;
        //     if (next < 5) {
        //       elmnt.target.form.elements[next].focus()
        //     }
        // }
    
      }
      

      render() {
        return (

            <div className="all"> 

           
          <form onSubmit={this.handleSubmit}>
            <div className="otpContainer">
    
              <input
                name="otp1"
                type="number"
                autoComplete="off"
                placeholder='0'
                max={9}
                min={0}
                className="otpInput"
                value={this.state.otp1}
                onKeyPress={this.keyPressed}
                onChange={e => this.handleChange("otp1", e)}
                tabIndex="1"
                 maxLength={1} onKeyUp={e => this.inputfocus(e)}
    
              />

<input
            name="otp2"
            type="number"
            autoComplete="off"
            placeholder='0'
            className="otpInput"
            min={0}
            max={9}
            value={this.state.otp2}
            onChange={e => this.handleChange("otp2", e)}
            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp3"
            type="number"
            autoComplete="off"
            placeholder='0'
            className="otpInput"
            min={0}
            max={9}
            value={this.state.otp3}
            onChange={e => this.handleChange("otp3", e)}
            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp4"
            type="number"
            autoComplete="off"
            placeholder='0'
            min={0}
            max={9}
            className="otpInput"
            value={this.state.otp4}
            onChange={e => this.handleChange("otp4", e)}
            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />

        </div>

        
        <Button type="submit" variant='contained' fullWidth>
          Submit
        </Button>
      </form>

      </div>
    );
  }
}


export default Otpinput;