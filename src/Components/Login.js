import { Box ,Typography,TextField,CircularProgress,Button} from '@mui/material'
import React, { useState }  from 'react'
import Container from '@mui/material/Container';
import logo from "../Components/logo/logo.png";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { auth, db } from './Firebase';
import { useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { collection, addDoc } from "firebase/firestore";

const Login = () => {
  
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPasswordOne = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorMsg, setErrorMsg] = useState('');
const [successMsg, setSuccessMsg] = useState('')

const navigate = useNavigate();

  const handleLogin= async (e) =>{
    e.preventDefault();
    console.log(email,password);
    
      try {
        await createUserWithEmailAndPassword(auth , email, password);
      } 
      catch (err) {
        console.error(err);
        setErrorMsg(err.message)
       setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      }

      try {
        await signInWithEmailAndPassword(auth , email, password);
        setSuccessMsg("login success");
       setEmail("");
          setPassword("");
          setTimeout(() => {
            setSuccessMsg("");
            navigate("/");
          }, 3000); 
      } 
      catch (err) {
        // console.error(err);  
       setErrorMsg(err.message)
       setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      }

      try {
        await addDoc(collection(db ,"user"),{
email:email
        })
      } 
      catch (err) {
        setErrorMsg(err.message)
      }
  }
  
  return (
    <>
    {successMsg&&<>
      <Alert variant="filled" severity="success">
 {successMsg}
</Alert>
</>}

{errorMsg&&<>
  <Alert variant="filled" severity="error">
 {errorMsg}
</Alert>
</>}

     <Container maxWidth="xs">
     <Box sx={{ 
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
        value={email}
        onChange={event => setEmail(event.target.value)} 
        
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
        value={password}
        onChange={event => setPassword(event.target.value)} 
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
        {/* <br></br> */}
         {/* <CircularProgress size={30} paddingtop="10px"/> */}
         <br/>
         <br/>
         <Button variant="contained" fullWidth color="primary" onClick={handleLogin}  >
  login
</Button>
      </Box>
    </Container>
    </>
  )
}

export default Login
