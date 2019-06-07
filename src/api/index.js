// implement your own methods in here, if your data is coming from A rest API

import * as User from "./user"
import * as Activity from "./activity"
import * as Chat from "./chat"
import * as Files from "./file"
import * as Mail from "./mail"
import * as Post from "./post"
import * as Chart from "./chart"
import * as Project from "./project"
export default {
  // user
  getUser: User.getUser,
  getUserById: User.getUserById,
  // project
  getProject: Project.getProject,
  // activity
  getActivity: Activity.default.getActivity,
  // post
  getPost: Post.getPost,
  // chat
  getChatMenu: Chat.Menu,
  getChatGroup: Chat.Groups,
  getChatGroupById: Chat.getChatById,
  // FIle
  getFile: Files.getFile,
  getFileMenu: Files.getFileMenu,
  // mail
  getMail: Mail.getMail,
  getMailMenu: Mail.MailMenu,
  getMailById: Mail.getMailById,
  getMailByType: Mail.getMailByType,
  // chart data
  getMonthVisit: Chart.monthVisitData,
  getCampaign: Chart.campaignData,
  getLocation: Chart.locationData
}
