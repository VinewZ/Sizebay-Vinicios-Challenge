import { TaskItem } from '../TaskItem';
import { TaskListContainer } from './styles';

export function TasksList() {

    const tasks = [
        {
            id: 1,
            title: 'Task 1',
            completed: false
        },
        {
            id: 2,
            title: 'Task 2',
            completed: false
        },
    ]

    return (
        <TaskListContainer>
            {
                tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        completed={task.completed}
                    />
                ))
            }
        </TaskListContainer>
    );
}