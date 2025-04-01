import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

interface PortfolioState {
  projects: Project[];
  skills: string[];
  loading: boolean;
  error: string | null;
}

const initialState: PortfolioState = {
  projects: [],
  skills: [
    'React',
    'TypeScript',
    'Node.js',
    'Redux',
    'Redux-Saga',
    'Material-UI',
    'GraphQL',
    'Docker',
    'AWS',
    'CI/CD'
  ],
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setProjects, setLoading, setError } = portfolioSlice.actions;
export default portfolioSlice.reducer; 