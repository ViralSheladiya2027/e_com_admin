import { Box ,Typography,TextField,CircularProgress,Button} from '@mui/material'
import React, { useState }  from 'react'
import Container from '@mui/material/Container';
import logo from "../Components/logo/logo.png";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';


const Login = () => {

  const [values, setValues] = React.useState({
    email:"",
    password: '',
    showPassword:""
  });

  
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPasswordOne = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);
 

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    
  };

  return (
    <>
     <Container maxWidth="xs">
     <Box sx={{ 
      // width: 500,
        // height: 500,
        borderRadius:"10px",
        backgroundColor: 'white',
        boxShadow:"2",
       textAlign:"center",mt:"70px",p:"24px",
     }} >
      <img src={logo } height= "50px"/>
      <br/>
      <Typography color = "textSecondary" variant="h5">Admin</Typography>
      <TextField
          label="Email"
          id="outlined-size-small"
          size="small"
          fullWidth
          margin="normal"
          padding="normal"
        required
        onChange={handleChange('email')} 
        
        />
         <TextField
          label="Password"
          id="outlined-size-small"
          type={showPassword ? 'text' : 'password'}
        
          size="small"
          fullWidth
          margin="normal"
          padding="normal"
        required
        onChange={handleChange('password')} 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPasswordOne}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
        
        />
      
       
        <br></br>
        <br></br>
         <CircularProgress size={30} paddingtop="10px"/>
         <br/>
         <br/>
         <Button variant="contained" fullWidth color="primary" >
  login
</Button>
      </Box>
    </Container>
    </>
  )
}

export default Login
