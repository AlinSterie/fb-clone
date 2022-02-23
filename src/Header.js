import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/NotificationsActive';
import FacebookIcon from '@mui/icons-material/Facebook';

function Header() {
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
            <div className='header__option
            header__option--active'>
                <HomeIcon fontSize="large" />
            </div>
        </div>

        <div className='header__right'>
            <div className='header__info'>
                <Avatar />
                <h4>Alin Sefu</h4>
            </div>

            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
        </div>

    </div>
}

export default Header; 