import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/NotificationsActive';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useStateValue } from './StateProvider';
import FlagIcon from '@mui/icons-material/Flag';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import { fontSize } from '@mui/system';
import ForumIcon from '@mui/icons-material/Forum';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {

    const [{ user }, dispatch] = useStateValue();

    return <div className='header'>
        <div className='header__left'>
            <div className='facebook__logo'>
                <FacebookIcon fontSize="large" />

            </div>
            <div className='header__input'>
                <SearchIcon />
                <input placeholder='Search on Facebook' type="text" />
            </div>
        </div>

        <div className='header__center'>
            <div className="header__option
            header__option--active">
                <HomeIcon fontSize="large" />
            </div>
            <div className='header__option'>
                <FlagIcon fontSize="large" />
            </div>
            <div className='header__option'>
                <OndemandVideoIcon fontSize="large" />
            </div>
            <div className='header__option'>
                <StorefrontIcon fontSize="large" />
            </div>
            <div className='header__option'>
                <GroupsIcon fontSize="large" />
            </div>
        </div>

        <div className='header__right'>
            <div className='header__info'>
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>

            <IconButton>
                <AddIcon />
            </IconButton>

            <IconButton>
                <ForumIcon />
            </IconButton>

            <IconButton>
                <NotificationsIcon />
            </IconButton>

            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>

    </div>
}

export default Header; 