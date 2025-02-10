
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';


interface State extends SnackbarOrigin {
  open: boolean;
}
const MultiComponent: React.FC = () => {
  const [snackbarState, setSnackbarState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = snackbarState;

  const handleSnackbarClick = (newState: SnackbarOrigin) => () => {
    setSnackbarState({ ...newState, open: true });
  };

  const handleSnackbarClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };
  const snackbarButtons = (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleSnackbarClick({ vertical: 'top', horizontal: 'center' })}>
          Top-Center
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleSnackbarClick({ vertical: 'bottom', horizontal: 'center' })}>
          Bottom-Center
        </Button>
      </Box>
    </React.Fragment>
  );

  return (
    <div>
      <Box   
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Firstname" variant="outlined" />
        <TextField id="filled-basic" label="Addresses" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        
        <Slider size="small" defaultValue={70} aria-label="Small" valueLabelDisplay="auto" />
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
         
        <Stack spacing={2} direction="row">
          <Button variant="text">Delete</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
         
        <LinearProgress style={{ marginTop: 20 }} />  
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ width: 500 }}>
        {snackbarButtons}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleSnackbarClose}
          message="I love sciences"
          key={vertical + horizontal}
        />
      </Box>
    </div>
  );
}

export default MultiComponent;
