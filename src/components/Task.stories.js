import React from "react";
import Task from "./Task";

export default {
  component: Task,
  title: "Task", //how to refer to the component in the sidebar of the Storybook app
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test task",
    state: "TASK_INBOX",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args,
    state: "TASK_ARCHIVED",
  },
};
