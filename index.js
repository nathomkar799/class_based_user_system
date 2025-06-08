const User = require('./models/User');
const Admin = require('./models/Admin');

//Create users
const user1 = new User("Omkar", "omkar@example.com");
const admin1 = new Admin("Alice", "aliceinborder@land.com", "SuperAdmin");

//Store them in an array
const users = [user1,admin1];

//loop through users
users.forEach(a => {
    if (a instanceof Admin) {
        console.log("Admin: ", a.getAdminInfo());
    } else {
        console.log("User: ", a.getInfo());
    }
});