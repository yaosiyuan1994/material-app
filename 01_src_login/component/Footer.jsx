import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { createTheme } from '@material-ui/core'
import { blue, lightBlue, purple } from '@material-ui/core/colors'
import { ThemeProvider } from '@material-ui/styles'

const theme = createTheme({
  palette:{
    primary:{
      main:blue[400]
    },
  }
})
export default class Footer extends Component {
    render() {
        return (
        <div className="box-button">
          {/* <button className="log-in"><span>SIGN IN</span></button> */}
          <Button variant="contained" color="primary" size="large"><span>SIGN IN</span></Button>
          {/* <ThemeProvider theme={theme}>
            <Button color="primary">SIGN IN</Button>
          </ThemeProvider> */}
          <div className="box-point">
          <div className="box-forgot">
            <a href=''>
            Forgot password?</a></div>
          <div className="box-account"><a href=''>Don't have an account? Sign Up</a></div></div>
        </div>    
        )
    }
}
