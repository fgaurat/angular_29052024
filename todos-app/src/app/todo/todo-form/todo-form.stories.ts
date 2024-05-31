import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { TodoFormComponent } from './todo-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TodoFormComponent> = {
  title: 'TodoList/TodoForm',
  component: TodoFormComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      providers: [HttpClientModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<TodoFormComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
