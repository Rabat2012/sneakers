import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Container } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [ 
  {
    label: 'Nike Air Force 1 Low Flyknit “University Red”',
    imgPath:
      'http://sneakerbardetroit.com/wp-content/uploads/2016/02/Nike-Air-Force-1-Ultra-Flyknit-Low-University-Red-Available.jpg',
  },
  {
    label: 'Mark Gonzales x adidas Ultra Boost',
    imgPath:
      'https://sneakerbardetroit.com/wp-content/uploads/2022/04/Mark-Gonzales-adidas-Ultra-Boost-GX1694.jpeg',
  },
  {
    label: 'Sean Wotherspoon x atmos x ASICS Gel Lyte III',
    imgPath: 
      'https://sneakerbardetroit.com/wp-content/uploads/2020/08/ASICS-Gel-Lyte-III-Sean-Wotherspoon-atmos-Release-Date.jpg',
  },
  {
    label: 'Diamond Supply Co. Reveals PUMA “California Dreaming” Collection',
    imgPath:
      'https://sneakerbardetroit.com/wp-content/uploads/2019/05/Diamond-Supply-PUMA-California-Dreaming-Release-Date.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container className='qwe'>
    
    
    <Box 
    sx={{ maxWidth: 1200, flexGrow: 1 }}>
      <Paper className='qwer'
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 200,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 700,
                  display: 'block',
                  maxWidth: 1200,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </Container>
  );
}

export default SwipeableTextMobileStepper;
