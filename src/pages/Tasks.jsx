import { Link } from "react-router-dom";

function Tasks() {
    const tasks = [
      { id: 1, title: "Learn React" },
      { id: 2, title: "Build a Project" },
    ];
  
    return (
      <div>
        <h2>✅ Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <Link to={`/dashboard/tasks/${task.id}`}>{task.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default Tasks