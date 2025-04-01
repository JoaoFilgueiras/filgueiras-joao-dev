import { call, put, takeLatest } from 'redux-saga/effects';
import { setProjects, setLoading, setError } from '../reducers/portfolioSlice';

// Mock API call - replace with actual API call in production
const fetchProjectsApi = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      imageUrl: '/images/project1.jpg',
      githubUrl: 'https://github.com/username/project1',
      liveUrl: 'https://project1.com'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      imageUrl: '/images/project2.jpg',
      githubUrl: 'https://github.com/username/project2',
      liveUrl: 'https://project2.com'
    }
  ];
};

function* fetchProjects(): Generator<any, void, any> {
  try {
    yield put(setLoading(true));
    const projects = yield call(fetchProjectsApi);
    yield put(setProjects(projects));
  } catch (error) {
    yield put(setError(error instanceof Error ? error.message : 'An error occurred'));
  } finally {
    yield put(setLoading(false));
  }
}

export function* watchFetchProjects() {
  yield takeLatest('portfolio/fetchProjects', fetchProjects);
} 