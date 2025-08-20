import { useParams } from "react-router-dom";

function TaskDetail() {
  const { taskId } = useParams();
  return <h3>📌 Task Detail for ID: {taskId}</h3>;
}
export default TaskDetail;