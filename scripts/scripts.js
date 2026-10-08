//1 variables

//2 listeners
//3 constructor
// const notificationObject = {
//   id: 1,
//   title: "String",
//   type: "success",
//   info: "description",
// };
class Notifications {
  //   static total = 0;
  static notificationList = [];
  constructor(title, type, info) {
    this.id = Math.random;
    this.title = title;
    this.type = type;
    this.info = info;
    // Notification.total++;
  }
  static renderNotifications(list) {} // succes? info? error
  static deleteNotifications(id) {}
}
