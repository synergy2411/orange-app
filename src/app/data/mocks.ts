import { User } from './user.model';

export const USER_DATA: User[] = [{
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 21, 1965"),
    isWorking: true,
    income: 50000,
    company: "Microsoft",
    image: "assets/images/bill.jpg",
    vote: 120
}, {
    firstName: "Steve",
    lastName: "Jobs",
    dob: new Date("Jan 1, 1965"),
    isWorking: false,
    income: 0,
    company: "Apple",
    image: "assets/images/steve.png",
    vote: 140
}
    , {
    firstName: "Tim B.",
    lastName: "Lee",
    dob: new Date("Feb 14, 1965"),
    isWorking: true,
    income: 40000,
    company: "World Wide Web",
    image: "assets/images/tim.jpg",
    vote: 190
}
]
