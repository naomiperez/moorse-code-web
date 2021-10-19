import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Translator from './Translator';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/naomiperez/moorse-code">
        Moorse Code Translator
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Album() {
  return (
<>      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{bgcolor: "#212529"}}>
          <CompareArrowsIcon sx={{ mr: 2, bgcolor: "#212529" }} />
          <Typography variant="h6" color="inherit" noWrap>
            CowMoorseCode
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Moorse Code 🐮
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            How do we maximize utility of morse code?<br/>
            Make it inclusive. Moorse Code.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Translator></Translator>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Moorse Code
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          How do we translate morse code to be cow interpetable?
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
      </>
  );
}