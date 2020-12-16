# Lab 7 - React - aplikacja nr 2


####
##### Wymagania dotyczące siódmego zadania:
####

![alt text](https://i.imgur.com/EeWFpch.png)  


---

# Wstęp

Głównym zadaniem było wykorzystanie bibliotek reactowych - Material UI oraz React-Router do utworzenia strony internetowej. Należało mieć trzy podstrony, a w każdej z nich trzy  różne komponenty. Wykorzystany został **bootstrap**, a także **props**, **state** w podstronie Composers.
```
import 'bootstrap/dist/css/bootstrap.css';
```

Moja strona dzieli się na następujące podstrony:

1. **/** - strona główna, homepage

![alt text](https://i.imgur.com/Q2xNpxI.png)

2. **/instruments**

![alt text](https://i.imgur.com/HbOkaTs.png)

3. **/composers**

![alt text](https://i.imgur.com/bbLJjH1.png)

Gdzie w kodzie import wygląda to następująco:
```
import {
  /* główny komponent */
  BrowserRouter as Router,
  /* Renderowanie pierwszej lokalizacji która pasuje - trasa */
  Switch,
  /* Definiowanie ścieżek */
  Route,
  /* Przełączanie między ścieżkami */
  Link
} from "react-router-dom";
```

Następnie przy renderowaniu definiowany jest Router, a w nim zawarty Switch oraz Link:
```
<Router>
  <div>
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="navbar-nav">
      <Link to="/" className="nav-link active">Homepage</Link>
      <Link to="/instruments" className="nav-link active">Instruments</Link>
      <Link to="/composers" className="nav-link active">Composers</Link>
      </div>
  	</nav>
  <Header />
  <Switch>
      <Route path="/instruments">
        <Instruments />
      </Route>
      <Route path="/composers">
          <Composers />
      </Route>
      <Route path="/">
          <Home />
      </Route>
    </Switch>
  </div>
</Router>
```

# Realizacja zadań

Każda z podstron zawiera dwa takie same elementy 
- **nawigację**, gdzie można przenosić się pomiędzy poszczególnymi podstronami, jednocześnie zapisując historię przeglądania. Sama nawigacja wykonana jest za pomocą **Boostrapa** - nav.
```
<nav className="navbar navbar-expand-sm navbar-dark">
  <div className="navbar-nav">
    ...
  </div>
</nav>
```
- **header**, jest to zdjęcie z widocznymi klawiszami pianina

## Homepage - /

![alt text](https://i.imgur.com/6jfPc5F.png)

### 1. About.jsx - Accordion 

Pierwszym komponentem Material UI jest **Accordion**. Jest to tak jakby rozwijana lista, w której zamieściłam tekst po rozwinięciu. Dodany jest przykładowy tekst dla tytułów podstron. Import:
```
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
```

![alt text](https://i.imgur.com/gtkINbM.png)

Po rozwinięciu:

![alt text](https://i.imgur.com/qQjYExs.png)
```
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
          ... tekst ...
    </Typography>
  </AccordionDetails>
</Accordion>
```

### 2. Pics.jsx - Button

Drugim komponentem jest **Button** jednak w wersji trochę bardziej zaawansowanej, używając **ButtonBase API**. Są to trzy przyciski, po wciśnięciu uzyskane są animacje. W tle dodane są wizerunki kompozytorów. W kodzie oddzielnie zdefiniowane są style użyte do przycisków jako useStyles, a także jest utworzona tablica ze zdjęciami i ich szerokością. Import:
```
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
```

![al text](https://i.imgur.com/o1XSYnp.png)

### 3. Rate.jsx - Box, icon

Trzecim komponentem jest przycisk do ocenienia strony z serduszkami. Import:
```
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
```

![alt text](https://i.imgur.com/ZPEagzl.png)


## Instruments - /instruments

![alt text](https://i.imgur.com/Tp0i44y.png)

### 1. Avatars.jsx - Avatar, AvatarGroup

Pierwszym komponentem jest Avatar, w którym widnieją wizerunki kompozytorów. Maksymalna ilość ikon to 5, a wszystkich zdjęć jest 9. W efekcie końcowym wyświetlone jest tylko 4 pierwsze. Import:
```
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
```
![alt text](https://i.imgur.com/quEgb9J.png)

W kodzie nadawane są wartości alt oraz src:
```
<AvatarGroup max={5}>
    <Avatar alt="Tchaikovsky" src="https://www.sfcv.org/sites/default/files/Tchaikovsky%20-%20Thumb.jpg" />
    								...
</AvatarGroup>
```

### 2. Alert.jsx - Button, Dialog

Drugim komponentem jest przycisk, który wyświetla powiadomienie po kliknięci na niego, a także należy wybrać opcję by go zamknąć. Import:
```
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
```

![alt text](https://i.imgur.com/J2KeKnY.png)

Po wciśnięciu:

![alt text](https://i.imgur.com/lsVM4y3.png)

Fragment kodu, implementowanie okna dialogowego.

![alt text](https://i.imgur.com/BHf53eE.png)

### 3. Instr.jsx - Card z wykorzystaniem icon i Typography

Kolejnym komponentem jest imitacja odtwarzacza muzyki, który wykorzystuje Card, icony oraz tekst. Import:
```
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
```

![alt text](https://i.imgur.com/UTsETrn.png)

```
<Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" style={{fontFamily: 'Pacifico'}}>
            The Best of Chopin
          </Typography>
         
          ...
    <CardMedia
    className={classes.cover}
    image="https://64.media.tumblr.com/461ba2b81d1bfba4ec16d5749da57310/tumblr_oer4oowDa41r5cc2yo1_1280.jpg"
    title="Chopin"
    />
</Card>
```

### 4. InstrPhotos.jsx - Prezentacja zdjęć

Jest to element złożony z kilku komponentów, w którym zdefiniowana jest tablica obrazków, a one zmieniają się lub można je przewijać. Import i wykorzystanie Paper, Typography, Button...

```
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
```

![alt text](https://i.imgur.com/pdz2iWJ.png)

![alt text](https://i.imgur.com/8FczgMy.png)

## Composers - /composers

W tym miejscu wkorzystane jest dodanie klasy, konstruktora, przekazywania wartości.

![alt text](https://i.imgur.com/3tOGNRS.png)

Podczas renderowania wywołany jest CompList, aby wyświetlić dane. Jest również lista zdjęć oraz tekst, który zawiera efekt po kliknięciu prawym przyciskiem myszy.

```
render() {      
        const composers = this.state.events.map(cp => {      
            return <CompList key={cp.id} name={cp.name} surname={cp.surname} born={cp.born} popular={cp.popular} />
      })
        return(
        <Grid container spacing={2} style={{margin: 3}}>
          <Grid item xs={6}>
            <Paper elevation={3}>{composers}</Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper elevation={3}>
              <Comp />
              <Pictures />              
            </Paper>
          </Grid>
        </Grid>           
        )
    }
```

### 1. CompList.jsx - List, ListSubheader

Czyli za pomocą czego wyświetlane są dane. Jest to tzw. "sticky list", a więc imię i nazwisko kompozytora "przykleja" się do góry strony podczas przewijania. Uzycie **props**. Import:
```
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
```

![alt text](https://i.imgur.com/hk0YRz1.png)

Przewijanie:

![alt text](https://i.imgur.com/M4rIBxU.gif)

### 2. ComposersText.jsx - Menu

Komponent menu, w którym po kliknięciu w element wyskakuje menu do wyboru zdefiniowanych przez nas opcji. Import:

![alt text](https://i.imgur.com/qT8j39n.png)

Po kliknięciu prawego przycisku myszy:

![alt text](https://i.imgur.com/6k19ykw.png)

![alt text](https://i.imgur.com/I8gafoe.png)

### 3. Pictures.jsx - GridList

Lista zdjęć. Zdjęcia przechowywane są w **PicturesData.jsx**:

![alt text](https://i.imgur.com/MypbMxR.png)

Wyświetlanie za pomocą GridList:

![alt text](https://i.imgur.com/7Hw2FLx.png)

![alt text](https://i.imgur.com/CAoGRpK.png)
