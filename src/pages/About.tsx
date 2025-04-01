import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { motion } from 'framer-motion';
import { RootState } from '../store';

const About: React.FC = () => {
  const theme = useTheme();
  const { skills } = useSelector((state: RootState) => state.portfolio);

  const MotionPaper = motion(Paper);

  const experiences = [
    {
      year: '2020 - Present',
      title: 'Senior Software Developer',
      company: 'Tech Solutions Inc.',
      description: 'Leading development of enterprise-level applications using React, Node.js, and cloud technologies.',
    },
    {
      year: '2018 - 2020',
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks and cloud services.',
    },
    {
      year: '2016 - 2018',
      title: 'Frontend Developer',
      company: 'Web Solutions',
      description: 'Created responsive and interactive user interfaces using React and modern CSS frameworks.',
    },
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
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            I'm a passionate senior software developer with over 8 years of experience
            in building scalable web applications. My journey in software development
            has been driven by a constant desire to learn and create innovative solutions
            to complex problems.
          </Typography>
          <Typography variant="body1" paragraph>
            My expertise spans across the entire web development stack, from creating
            responsive user interfaces to designing and implementing robust backend
            systems. I'm particularly passionate about writing clean, maintainable code
            and following best practices in software development.
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
                Skills & Expertise
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill) => (
                  <Paper
                    key={skill}
                    sx={{
                      p: 1,
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      borderRadius: '20px',
                    }}
                  >
                    {skill}
                  </Paper>
                ))}
              </Box>
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
                Experience
              </Typography>
              <Timeline>
                {experiences.map((exp, index) => (
                  <TimelineItem key={exp.year}>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      {index < experiences.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="h3">
                        {exp.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {exp.company} | {exp.year}
                      </Typography>
                      <Typography variant="body2" paragraph>
                        {exp.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </MotionPaper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 