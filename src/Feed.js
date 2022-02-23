import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post 
            profilePic='https://scontent.fotp3-2.fna.fbcdn.net/v/t1.6435-9/48935555_2033805840019153_1611746968143396864_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=MCCkEmCxCdcAX-OrFxe&_nc_ht=scontent.fotp3-2.fna&oh=00_AT8mxgDM7eZscmrSwc2J83ou4z_BQ9fcIK53P6ubaCdyew&oe=6239ADE0'
            message="This works"
            timestamp="This is a timestamp"
            username="iorga"
            image='https://scontent.fotp3-3.fna.fbcdn.net/v/t1.6435-9/133660897_3511700865549864_8508733094640172058_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ODYlcGpYYecAX-umgbn&tn=YqydraxeU3_D1tdg&_nc_ht=scontent.fotp3-3.fna&oh=00_AT_Mw4GGjYb3sMtrH2b9ANfT3qKDrWhYTnH0TMvXkq-RuA&oe=623A9E52'
            />
            <Post  profilePic='https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/243331415_4581494471915412_8829128264945225316_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XY_w0C2AT6cAX9n2ONK&tn=YqydraxeU3_D1tdg&_nc_ht=scontent.fotp3-3.fna&oh=00_AT-shwRF9o9YNmTJetHFXbXX7Z7ZKgULLFZUIANZFNp8uA&oe=62185631'
            message="Amazing"
            timestamp="This is a timestamp"
            username="stefff"
            />            
        </div>
    )
}

export default Feed