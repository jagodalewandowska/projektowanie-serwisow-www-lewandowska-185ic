import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function About() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} style={{ fontFamily: 'Bevan'}}>Homepage</Typography>
          <Typography className={classes.secondaryHeading}>This is where you are now</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Homepage includes a couple of buttons with some simple animations, but also an alert dialog. Besides that here's some usage of Accordion! Just like all the other pages this one includes a navbar, that's been used with some Bootstrap modifications - and a classic header with some piano keys. Take a look at the other parts of this Accordion text. Next ones are not as unique as this one.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading} style={{ fontFamily: 'Bevan'}}>Instruments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A musical instrument is a device created or adapted to make musical sounds. In principle, any object that produces sound can be considered a musical instrument—it is through purpose that the object becomes a musical instrument. The history of musical instruments dates to the beginnings of human culture. Early musical instruments may have been used for ritual, such as a horn to signal success on the hunt, or a drum in a religious ceremony. Cultures eventually developed composition and performance of melodies for entertainment. Musical instruments evolved in step with changing applications and technologies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading} style={{ fontFamily: 'Bevan'}}>Composers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A composer (Latin compōnō; literally "one who puts together") is a musician who is an author of music in any form, including vocal music (for a singer or choir), instrumental music, electronic music, and music which combines multiple forms. A composer may create music in any music genre, including, for example, classical music, musical theatre, blues, folk music, jazz, and popular music. Composers often express their works in a written musical score using musical notation. Many composers are, or were, also skilled performers of music.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}