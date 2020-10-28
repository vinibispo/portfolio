import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import NextLink from 'next/link';

const Header: React.FC = () => {
  return (
    <AppBar color="secondary">
      <Toolbar>
        <Avatar src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/115723311_2371589913143535_3598114787901218041_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=PoEbVK36VJAAX_EA-F3&_nc_ht=scontent-gru1-1.xx&oh=e61c64a1dc48612fce4edbe165077a66&oe=5FBE2F11" />
        <Box style={{ flexGrow: 1 }} />
        <List style={{ display: 'flex' }}>
          <ListItem>
            <ListItemText
              style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
              <NextLink href="/">
                <Link href="/">Home</Link>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
              <NextLink href="/about">
                <Link href="/about">About</Link>
              </NextLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
              <NextLink href="/services">
                <Link href="/services">Services</Link>
              </NextLink>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText
              style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
              <NextLink href="/contact">
                <Link href="/contact">Contact</Link>
              </NextLink>
            </ListItemText>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
