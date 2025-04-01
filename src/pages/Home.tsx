import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { RootState } from '../store';

const Home: React.FC = () => {
  const theme = useTheme();
  const { skills } = useSelector((state: RootState) => state.portfolio);

  const MotionBox = motion(Box);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 8 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
            }}
          >
            John Doe
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ color: theme.palette.text.secondary }}
          >
            Senior Software Developer
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.text.secondary, mb: 4 }}
          >
            Building elegant solutions to complex problems
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#projects"
            sx={{ mr: 2 }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="#contact"
          >
            Contact Me
          </Button>
        </MotionBox>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} {...({} as any)}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    About Me
                  </Typography>
                  <Typography variant="body1" paragraph>
                    I'm a passionate senior software developer with over 8 years of experience
                    in building scalable web applications. My expertise lies in modern
                    JavaScript frameworks, cloud technologies, and creating efficient,
                    maintainable code.
                  </Typography>
                  <Typography variant="body1">
                    I believe in writing clean, efficient code and following best practices
                    to create robust and scalable applications.
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6} {...({} as any)}>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Skills
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skills.map((skill) => (
                      <Button
                        key={skill}
                        variant="outlined"
                        size="small"
                        sx={{ borderRadius: '20px' }}
                      >
                        {skill}
                      </Button>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 