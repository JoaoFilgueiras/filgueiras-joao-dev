import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '20px' }}>
        <h1>Main Content</h1>
        <p>This is the main content area of the layout.</p>
      </div>
    ),
  },
}; 