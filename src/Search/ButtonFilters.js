import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        padding: "0"
    },
    item: {
        display: 'flex',
        //justifyContent: 'space-between',
        marginTop: '.5rem',
        marginBottom: '1rem',
        width: 'auto'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        //width: '2rem !important'
    },
});

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const classes = useStyles();

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Container className={classes.container}>
        <Grid container display="flex" alignItems="center" className={classes.buttonContainer}>
            <Grid item className={classes.item}>
                <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <Button variant="contained" onClick={handleClick}>Price</Button>
                </ButtonGroup>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu">
                            {options.map((option, index) => (
                            <MenuItem
                                key={option}
                                disabled={index === 2}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                            ))}
                        </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
                </Popper>
            </Grid>
            <Grid item className={classes.item}>
                <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <Button variant="contained" onClick={handleClick}>Beds</Button>
                </ButtonGroup>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu">
                            {options.map((option, index) => (
                            <MenuItem
                                key={option}
                                disabled={index === 2}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                            ))}
                        </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
                </Popper>
            </Grid>
            <Grid item className={classes.item}>
                <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <Button variant="contained" onClick={handleClick}>Home Type</Button>
                </ButtonGroup>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu">
                            {options.map((option, index) => (
                            <MenuItem
                                key={option}
                                disabled={index === 2}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                            ))}
                        </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
                </Popper>
            </Grid>
        </Grid>
    </Container>
  );
}
