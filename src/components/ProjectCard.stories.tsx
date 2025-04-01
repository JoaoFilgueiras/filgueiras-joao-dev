import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: 'https://source.unsplash.com/random/800x600?website',
    githubUrl: 'https://github.com/username/project1',
    liveUrl: 'https://project1.com',
    index: 0,
  },
};

export const WithoutLiveDemo: Story = {
  args: {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    imageUrl: 'https://source.unsplash.com/random/800x600?app',
    githubUrl: 'https://github.com/username/project2',
    index: 1,
  },
}; 