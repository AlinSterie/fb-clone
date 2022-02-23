import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow 
          src="https://scontent.fotp3-2.fna.fbcdn.net/v/t1.6435-9/43252316_1291209371019094_2684507868857630720_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=HpP8FJOSn10AX-I5XZR&_nc_ht=scontent.fotp3-2.fna&oh=00_AT_ieaP8SQs9vCvtPCHEKXFX5DG_Ji9FoMtUSnAZdPywRQ&oe=6237048F" 
          title='Alin Sterie'/>
        <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
        <SidebarRow Icon={PeopleIcon} title='Friends'/>
  
    </div>
  )
}

export default Sidebar;