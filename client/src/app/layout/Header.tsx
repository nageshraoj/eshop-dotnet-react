import {
  AppBar,
  Toolbar,
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
      margin: '0px 10px',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '10px',
      '&:hover': {
        backgroundColor: '#E5890A',
      },

      '&.active': {
        backgroundColor: '#9CC094',
      },
    },
  }))

  const styles = useStyles()

  const midTabItems: { title: string; path: string }[] = [
    { title: 'catalog', path: '/catalog' },
    { title: 'contacts', path: '/contact' },
    { title: 'about', path: '/about' },
  ]

  const rightTabItems: { title: string; path: string }[] = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
  ]

  return (
    <AppBar position='sticky' sx={{ mb: 5 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <List className={styles.maintabStyle}>
          <ListItem component={NavLink} to='/' className={styles.tabStyle}>
            eShoppy
          </ListItem>

          <Switch onChange={screenTheme} />
        </List>

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

        <List className={styles.righttabStyle}>
          <IconButton size='large' sx={{ color: 'inherit' }}>
            <Badge badgeContent={4} sx={{ color: 'secondary' }}>
              <ShoppingCart />
            </Badge>
          </IconButton>
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
