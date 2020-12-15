import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const CompList = props => (
    <List style = {{marginBottom: 70}}>      
        <li>
          <ul>
            <ListSubheader style={{ fontFamily: 'Bevan', fontSize: '20px', color:'#2A0E0D'}}>{props.name} {props.surname}</ListSubheader>
              <ListItem>
                <ListItemText secondary={'Born'} />
                <ListItemText secondary={'Most popular piece'} />
              </ListItem>
              <ListItem>
                <ListItemText primary={props.born} />
                <ListItemText primary={props.popular} />
              </ListItem>
          </ul>
        </li>
    </List>  
);

export default CompList;