import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const MotionPaper = motion(Paper);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/username' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/username' },
    { icon: <TwitterIcon />, url: 'https://twitter.com/username' },
    { icon: <EmailIcon />, url: 'mailto:contact@example.com' },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 8 }}>
        <MotionPaper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ p: 4, mb: 6 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" paragraph>
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you'd like to connect!
          </Typography>
        </MotionPaper>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} {...({} as any)}>
            <MotionPaper
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{ p: 4 }}
            >
              <Typography variant="h4" gutterBottom>
                Contact Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </form>
            </MotionPaper>
          </Grid>

          <Grid item xs={12} md={6} {...({} as any)}>
            <MotionPaper
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              sx={{ p: 4 }}
            >
              <Typography variant="h4" gutterBottom>
                Connect With Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                {socialLinks.map((link, index) => (
                  <IconButton
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>
              <Typography variant="body1" paragraph>
                You can also reach me directly at:
              </Typography>
              <Typography variant="h6" color="primary">
                contact@example.com
              </Typography>
            </MotionPaper>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Contact; 