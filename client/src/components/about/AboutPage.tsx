import {
  Typography,
  Grid,
  Box,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@mui/material'
import { ShoppingBasket } from '@mui/icons-material'

const AboutPage = () => {
  return (
    <Typography variant='h2'>
      <Grid container spacing={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
            borderRadius: '10px',
          }}
        >
          <form>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '500px',
                padding: '20px 30px',
                boxShadow:
                  '0 5px 10px rgba(0, 0, 0, .3), 0 5px 10px rgba(0, 0, 0, .3)',
              }}
            >
              <Typography sx={{ mb: 2, textAlign: 'center' }} variant='h4'>
                About
              </Typography>
              <List>
                <ListItem sx={{ fontSize: '18px' }}>
                  <ListItemAvatar>
                    <Avatar>
                      <ShoppingBasket />
                    </Avatar>
                  </ListItemAvatar>
                  eShopping App
                </ListItem>
                <ListItem sx={{ fontSize: '15px' }}>
                  Hyderabad, Telangana, India - 500049
                </ListItem>
              </List>
            </Paper>
          </form>
        </Box>
      </Grid>
    </Typography>
  )
}

export default AboutPage
