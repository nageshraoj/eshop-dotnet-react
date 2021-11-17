import {
  Typography,
  Grid,
  Box,
  Button,
  FormControl,
  TextField,
  Paper,
} from '@mui/material'

const ContactPage = () => {
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
                Contact us
              </Typography>
              <FormControl>
                <TextField
                  variant='outlined'
                  type='text'
                  placeholder='Name'
                  sx={{ margin: '10px' }}
                />
              </FormControl>

              <FormControl>
                <TextField
                  variant='outlined'
                  sx={{ margin: '10px' }}
                  type='text'
                  placeholder='Email'
                />
              </FormControl>

              <FormControl>
                <TextField
                  variant='outlined'
                  type='text'
                  placeholder='Message'
                  multiline
                  rows={5}
                  sx={{ margin: '10px' }}
                />
              </FormControl>

              <FormControl>
                <Button variant='contained'>Submit</Button>
              </FormControl>
            </Paper>
          </form>
        </Box>
      </Grid>
    </Typography>
  )
}

export default ContactPage
