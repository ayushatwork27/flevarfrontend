import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

// import GroupAddIcon from "@material-ui/icons/GroupAdd";
// import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StepConnector from "@material-ui/core/StepConnector";
// import Typography from "@material-ui/core/Typography";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient(136deg, rgb(232 101 107) 0%, rgb(233,64,87) 50%, rgb(232 101 107) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <AssignmentTurnedInIcon />,
    2: <LocalShippingIcon />,
    3: <DirectionsWalkIcon />,
    4: <HomeIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Mon, 25th Sept",
    "Mon, 25th Sept",
    "Mon, 27th Sept",
    "Mon, 28th Sept",
  ];
}

export default function DeliveryDetails() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={2}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div></div>
    </div>
  );
}
