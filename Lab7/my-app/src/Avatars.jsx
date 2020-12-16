import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const Avatars = () => (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: 40}}>
        <AvatarGroup max={5}>
        <Avatar alt="Tchaikovsky" src="https://www.sfcv.org/sites/default/files/Tchaikovsky%20-%20Thumb.jpg" />
        <Avatar alt="Bach" src="https://www.sfcv.org/sites/default/files/th_bach.jpg" />
        <Avatar alt="Wagner" src="https://www.sfcv.org/sites/default/files/WagnerThumb.jpg" />
        <Avatar alt="Beethoven" src="https://www.sfcv.org/sites/default/files/th_beethoven.jpg" />
        <Avatar alt="Brahms" src="https://www.sfcv.org/sites/default/files/th_brahms.jpg" />
        <Avatar alt="Chopin" src="https://www.sfcv.org/sites/default/files/th_chopin.jpg" />
        <Avatar alt="Debussy" src="https://www.sfcv.org/sites/default/files/th_debussy.jpg" />
        <Avatar alt="Vivaldi" src="https://www.sfcv.org/sites/default/files/th_vivaldi.jpg" />
        <Avatar alt="Mozart" src="https://www.sfcv.org/sites/default/files/th_mozart.jpg" />
        </AvatarGroup>
    </div>    
);

export default Avatars;