import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  List,
  ListItem,
  IconButton,
  Badge,
} from '@mui/material'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { ShoppingCart } from '@mui/icons-material'
interface propType {
  screenTheme: () => void
}

const Header = ({ screenTheme }: propType) => {
  const useStyles = makeStyles((theme) => ({
    maintabStyle: {
      display: 'flex',
    },
    righttabStyle: {
      display: 'flex',
    },
    tabStyle: {
      color: 'white',
      '&:hover': {
        backgroundColor: '#E5890A',
        borderRadius: '10px',
      },

      '&:active': {
        backgroundColor: '#DFD8CA',
      },
    },
  }))

  const styles = useStyles()

  const midTabItems: { title: string; path: string }[] = [
    { title: 'home', path: '/' },
    { title: 'about', path: '/about' },
    { title: 'catalog', path: '/catalog' },
    { title: 'contacts', path: '/contact' },
  ]

  const rightTabItems: { title: string; path: string }[] = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
  ]

  return (
    <AppBar position='sticky' sx={{ mb: 5 }}>
      <Toolbar>
        <Typography>My-Shoppy</Typography>
        <Switch onChange={screenTheme} />

        <List className={styles.maintabStyle}>
          {midTabItems.map(({ title, path }, index) => (
            <ListItem
              key={index}
              className={styles.tabStyle}
              to={path}
              component={NavLink}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <IconButton>
          <Badge badgeContent={4} sx={{color:'white'}} >
            <ShoppingCart />
          </Badge>
        </IconButton>

        <List className={styles.righttabStyle}>
          {rightTabItems.map(({ title, path }, index) => (
            <ListItem
              key={index}
              className={styles.tabStyle}
              to={path}
              component={NavLink}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  )
}

export default Header
