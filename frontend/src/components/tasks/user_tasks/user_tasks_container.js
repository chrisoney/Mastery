import { connect } from "react-redux";
import { fetchUserTasks, deleteTask } from "../../../actions/task_actions";
import UserTasks from "./user_tasks";
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: Object.values(state.entities.tasks),
    skills: state.entities.skills,
    user: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    fetchUserTasks: (userId) => dispatch(fetchUserTasks(userId)),
    deleteTask: (id) => dispatch(deleteTask(id)),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTasks);
