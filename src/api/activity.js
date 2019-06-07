const Items = [
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg",
    timeString: "Just now",
    color: "primary",
    text: "Michael finished  one task just now."
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg",
    timeString: "30 min ago",
    color: "teal",
    text: "Jim created a new  task."
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg",
    timeString: "1 hour ago",
    color: "indigo",
    text: "Li completed the PSD to html convert."
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg",
    timeString: "3 hour ago",
    color: "pink",
    text: "Michael upload a new pic."
  },
  {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg",
    timeString: "10 min ago",
    color: "cyan",
    text: "Li assigned a a task to Michael"
  }
]

const getActivity = limit => {
  return limit ? Items.slice(0, limit) : Items
}

export default {
  getActivity
}
