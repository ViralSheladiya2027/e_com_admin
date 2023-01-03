import  React from "react";
import {
  Box,
  CardContent,
  Card,
  Typography,
  Grid,
  Stack,
  Divider,
  TextField,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Profile() {
  return (
    <div>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                V sheladiya
              </Typography>
              <Divider />
              <Box height={30} />
              <Grid item xs={12}>
                <Stack spacing={4} direction="row">
                  <EmailIcon />
                  <Typography variant="body2" component="div">
                    Vsheladiya@gmail.com
                  </Typography>
                </Stack>
              </Grid>
              <Box height={30} />
              <Grid item xs={12}>
                <Stack spacing={4} direction="row">
                  <PhoneAndroidIcon />
                  <Typography variant="body2" component="div">
                    996582352
                  </Typography>
                </Stack>
              </Grid>
              <Box height={30} />
              <Grid item xs={12}>
                <Stack spacing={4} direction="row">
                  <LocationOnIcon />
                  <Typography variant="body2" component="div">
                    code@.com
                  </Typography>
                </Stack>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                About me
              </Typography>
              <Divider />

              <Box height={30} />
              <Grid item xs={12}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  ducimus nesciunt debitis, ea quam inventore corrupti
                  voluptatem tempora nemo possimus quo quidem nobis nam natus
                  animi consequatur fuga numquam perspiciatis?
                </Typography>
              </Grid>

              <Box height={30} />
              <Typography gutterBottom variant="h5" component="div">
                Details
              </Typography>
              <Box height={10} />
              <Grid item xs={12}>
                <Stack spacing={8} direction="row">
                  <Typography variant="subtitle1" component="div">
                    Full Name:
                  </Typography>
                  <Typography variant="body2" component="div">
                    viral sheladiya
                  </Typography>
                </Stack>
              </Grid>
              <Box height={10} />
              <Grid item xs={12}>
                <Stack spacing={6} direction="row">
                  <Typography variant="subtitle1" component="div">
                    Father's Name:
                  </Typography>
                  <Typography variant="body2" component="div">
                    p g sheladiya
                  </Typography>
                </Stack>
              </Grid>
              <Box height={10} />
              <Grid item xs={12}>
                <Stack spacing={10} direction="row">
                  <Typography variant="subtitle1" component="div">
                    Address:
                  </Typography>
                  <Typography variant="body2" component="div">
                    Devgam,india
                  </Typography>
                </Stack>
              </Grid>
              <Box height={10} />
              <Grid item xs={12}>
                <Stack spacing={10} direction="row">
                  <Typography variant="subtitle1" component="div">
                    Zip Code:
                  </Typography>
                  <Typography variant="body2" component="div">
                    365460
                  </Typography>
                </Stack>
              </Grid>
              <Box height={10} />
              <Grid item xs={12}>
                <Stack spacing={10} direction="row">
                  <Typography variant="subtitle1" component="div">
                    Website:
                  </Typography>
                  <Typography variant="body2" component="div">
                    http://thunderchemical.com
                  </Typography>
                </Stack>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </div>
    
  );
}
