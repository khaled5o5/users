const users = [{
    firstName: "Ahmad",
    lastName: 'kawasmi',
    userName: 'kirdahi',
    password: '276609',
    type: 'admin',
    age: 12,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    }
},
{
    firstName: "Yousef",
    lastName: 'Hamouri',
    type: 'teacher',
    userName: 'bigJoe',
    password: '276609',
    age: 13,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    }
}, {
    firstName: "Ibrahim",
    lastName: 'Sharif',
    type: 'teacher',
    userName: 'Abra',
    password: '276609',
    age: 10,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    }
}, {
    firstName: "Yazeed",
    lastName: 'Salameh',
    type: 'student',
    userName: 'yizzy',
    password: '276609',
    age: 8,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    }
}, {
    firstName: "Enshirah",
    lastName: 'Abu Libdeh',
    type: 'student',
    userName: 'inshallah',
    password: '276609',
    age: 8,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    }
}, {
    firstName: "Hanin",
    lastName: 'Farhat',
    type: 'student',
    userName: 'hani2005',
    password: '276609',
    age: 8,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    }
}, {
    firstName: "Khaled",
    lastName: 'Amro',
    type: 'student',
    userName: 'khokho',
    password: '276609',
    age: 7,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    }
}, {
    firstName: "Bahaa",
    lastName: 'Jawabreh',
    type: 'student',
    age: 9,
    userName: 'bobo',
    password: '276609',
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    }
},
]
console.log(users);

const findUser = (userName) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].userName == userName){
            return users[i]
        }        
    }
    return { err: true, msg: 'cannot find user!!!'}

}

const signInByUserName = (userName, password) => {
    const user = findUser(userName)
    if (user.err) {
        alert(user.msg)
        return
    } else if (user.password === password){
        user.signIn()
        alert("welcome back Mr." + user.firstName)
    }    else{
        alert('wrong password!!!')
    }
}