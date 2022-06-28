import { useEffect } from 'react';
import { useTasks } from '../../contexts/TasksContext';
import { TaskItem } from '../TaskItem';
import { TaskListContainer } from './styles';

export function TasksList() {

    const { activeFilter, allTasks } = useTasks();

    useEffect(() => {
        console.log(activeFilter, allTasks)
    }, [activeFilter, allTasks])

    return (
        <TaskListContainer>
            {
                activeFilter.length > 0 ?
                    activeFilter.map(task => (
                        <TaskItem
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            completed={task.completed}
                        />
                    )) :
                    <p>No tasks found</p>
            }
        </TaskListContainer>
    );
}