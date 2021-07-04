import React, { useState } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nightMode, setNightMode] = useState(true);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle.trim() != '') {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };

      setTasks([...tasks, data]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const selectedTasks = tasks.map((task) => {
      const isTaskDone =
        task.id === id && task.done
          ? { ...task, done: false }
          : task.id === id && !task.done
          ? { ...task, done: true }
          : { ...task };
      return isTaskDone;
    });

    setTasks(selectedTasks);
  }                          
      
  function handleRemoveTask(id: number) { 
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function handleNightMode() {
    setNightMode((prevNightMode) => !prevNightMode);
  }

  return (
    <>
      <Header handleNightMode={handleNightMode} nightMode={nightMode} />

      <View style={nightMode && { flex: 1, backgroundColor: '#10101E' }}>
        <TodoInput addTask={handleAddTask} nightMode={nightMode} />

        <MyTasksList
          tasks={tasks}
          onPress={handleMarkTaskAsDone}
          onLongPress={handleRemoveTask}
          nightMode={nightMode}
        />
      </View>
    </>
  );
}
