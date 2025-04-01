import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import { RootState } from '../store';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector((state: RootState) => state.portfolio);

  useEffect(() => {
    dispatch({ type: 'portfolio/fetchProjects' });
  }, [dispatch]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg">
        <Alert severity="error" sx={{ mt: 4 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ textAlign: 'center', mb: 6 }}
        >
          My Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.id} {...({} as any)}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects; 