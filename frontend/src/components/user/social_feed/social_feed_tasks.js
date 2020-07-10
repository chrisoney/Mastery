import React from "react";
import SocialFeedTaskItem from "./social_feed_task_item";

class SocialFeedTasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  componentWillMount() {
    this.props.fetchUserTasks(this.props.userId);
  }

  componentWillReceiveProps(newState) {
    this.setState({ tasks: newState.tasks });
  }

  render() {
    return (
      <div>
        {this.state.tasks.map((task) => (
          <SocialFeedTaskItem key={task._id} task={task} />
        ))}
      </div>
    );
  }

};

export default SocialFeedTasks;