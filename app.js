const User = funtion(name) {
    this.name = name;
    this.chatroom = null,

}

User.prototype = {
    send: funtion(message, to) {
        this.chatroom.send(message, this, to);
    },

    recieve: funtion(message, from) {
        console.log(`$(from.name) to ${this.name}: ${message}`);
    }

}


const Chatroom = funtion() {
    let,
    users = {}; // List of users

    return {
        register: funtion(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if (to) {
                //single user massage
                to.recieve(message, from);

            } else {
                //Mass massage
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}
const john = new User('john');
const alex = new User('alex');
const mary = new User('mary');


const chatroom = new chatroom();

chatroom.register(john);
chatroom.register(alex);
chatroom.register(mary);

john.send('hello alex', alex);