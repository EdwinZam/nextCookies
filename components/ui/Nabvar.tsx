import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Nextlink from 'next/link'
import { MenuOutlined } from '@mui/icons-material'

export const Nabvar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
            >
                <MenuOutlined />
            </IconButton>
            <Nextlink href="/" passHref legacyBehavior>
                <Link underline='none'>
                    <Typography variant='h6' color="white">CookieMaster</Typography>  
                </Link>
            </Nextlink>
            <div style={{flex:1}}/>
            <Nextlink href="/theme-changer" passHref legacyBehavior>
                <Link underline='none'>
                    <Typography variant='h6' color="white">Cambiar Tema</Typography>  
                </Link>
            </Nextlink>

        </Toolbar>
    </AppBar>
  )
}
