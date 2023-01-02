import * as React from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  CardContent,
  Card,
  Typography,
  MenuItem,
  Stack,
  Divider,
  TextField,
} from "@mui/material";

export default function Personal() {
  const currencies = [
    {
      value: "Super Admin",
      label: "Super Admin",
    },
    {
      value: "User",
      label: "User",
    },
  ];
  return (
    <>
      <Box sx={{ width: "100%" }}>
      <Grid container Spacing={2}>
      <Stack spacing={2} direction="row">
        <Grid item xs={6}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Personal information
              </Typography>
              <Divider />
              <Box height={30} />
              <Stack spacing={2} direction="row">
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    label="Name"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    label="Location"
                    variant="outlined"
                  />
                </Grid>
              </Stack>
              <Box height={30} />
              <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Bio"
                multiline
                rows={4}
              />
              </Grid>
              <Box height={30} />
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="User Type"
                  variant="outlined"
                  select
                  sx={{ minWidth: "100%" }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Contact information
              </Typography>
              <Divider />
              <Box height={30} />
              <Stack spacing={2} direction="row">
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    label="Contact Phone"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    label="Email"
                    variant="outlined"
                  />
                </Grid>
              </Stack>
              <Box height={30} />

              <TextField
                fullWidth
                id="outlined-static"
                label="Profile URL"
                size="small"
              />
              <Box height={30} />
              <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={4}
              />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        </Stack>
      </Grid>
    </Box>
    </>
  
  );
}
