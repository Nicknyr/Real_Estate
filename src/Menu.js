import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import theme from './Theme';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles({
  list: {
    width: 350
  },
  fullList: {
    width: 'auto'
  },
  menuButton: {
    marginLeft: '0',
    color: theme.palette.primary.main,
  },
  paper: {
    background: '#3c4145',
    color: '#FFF'
  },
  closeIcon: {
    color: '#FFF'
  },
  carrot: {
    color: '#FFF'
  }
});

export default function MenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      {/* Close Icon to close menu */}
      <Box display="flex" justifyContent="flex-end">
        <IconButton  
          variant="secondary" 
          aria-label="menu"
          className={classes.closeIcon}
          >
              <CloseIcon />
          </IconButton>
      </Box>
       
      <List>
        <ListItem button>
            Sign up or Log in
        </ListItem>
      </List>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.carrot}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.paper}
        >
          <Typography className={classes.heading}>Buy</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.paper}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.carrot}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.paper}
        >
          <Typography className={classes.heading}>Rent</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.paper}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.carrot}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.paper}
        >
          <Typography className={classes.heading}>Mortage</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.paper}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.carrot}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.paper}
        >
          <Typography className={classes.heading}>Neighborhood Info</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.paper}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.carrot}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.paper}
        >
          <Typography className={classes.heading}>More Resources</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.paper}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );

  return (
    <div>
        <Button onClick={toggleDrawer('right', true)}>
          <MenuIcon />
        </Button>
        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
    </div>
  );
}
