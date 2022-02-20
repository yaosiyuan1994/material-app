import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Input } from '@material-ui/core'
import { createTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { blue,purple } from '@material-ui/core/colors'
import { Checkbox } from '@material-ui/core'
import { FormGroup } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core'

const theme = createTheme({
    palette:{
      primary:{
        main:blue[400]
      },
    }
  })
export default class Main extends Component{
  render(){
    return(
      <Box theme={theme}>
         <Box sx={{width:395,maxWidth:'100%',marginBottom:20,borderColor:'primary.main',border:1}}>
          <TextField fullWidth autoFocus label="Email Address*"/>
         </Box>
        <Box  sx={{width:395,maxWidth:'100%',marginBottom:20}}>
          <TextField fullWidth label="Password*" type="password" />
        </Box>
        <FormGroup>
          <FormControlLabel control={<Checkbox Checked/>} sx={{color:blue[400],'&.Mui-checked': {
            color: blue[600]}}} label="Remember me"/>
        </FormGroup>
      
      </Box>
    )
  }
}
// export default class Main extends Component {
//     render() {
//         return (
//                 <main className="user">
//         <div className="box-userEmail">
//           {/* <input type="text" placeholder="Email Address*"></input> */}
//          <Box>
//          <TextField fullWidth label="Email Address*" />
//          </Box>
//         </div>
//         <div className="box-password">
//           {/* <input type="password" placeholder="Password*"></input> */}
//           <Box>
//             <TextField fullWidth label="Password"/>
//           </Box>
//         </div>
//         <div className="box-checkbox">
//           <input type="checkbox" id="Remember" name="Remember" />
//           <label htmlFor="Remember"><span className="checkText">Remember me</span></label>
//         </div>
//       </main>       
//         )
//     }
// }

