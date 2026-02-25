import React, { useState, useEffect } from 'react';
import Loading from '../component/loading';
import Error from '../component/error';
import List from '../component/list';
function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const fakeTasks = [
          { id: 1, text: 'Buy groceries', description: 'pending' },
          { id: 2, text: 'Finish report', description: 'in-progress' },
          { id: 3, text: 'Call mom', description: 'completed' },
          { id: 4, text: 'Pay bills', description: 'pending' },
          { id: 5, text: 'Schedule meeting', description: 'pending' },
          { id: 6, text: 'Book dentist', description: 'completed' }
        ];
        setTasks(fakeTasks);
        setLoading(false);
      } catch (err) {
        setError('Failed to load tasks');
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) {
    return (
       <Loading />
    );
  }

  // if (error) {
  //   return (
  //     <Error/>
  //   );
  // }

  return (
     <List
        title="My Task List"
        items={tasks}/>
  );
}

export default TasksPage;