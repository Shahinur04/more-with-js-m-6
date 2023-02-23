// 1) How will you access Sophia’s secondary school location?

let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        {
                            school_name: "ABC secondary school"

                        },

                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
let location = data.Sophia.study[1].secondary[1].location;
console.log(location);
// Output: St Lorene

//3) How will you get the output
//a) abc
//b) xyz


let data1 =
    [
        {
            "pHeroCourses": {
                "course-x": "web development"
            }
        },
        {
            "pHeroCourses": {
                "course-y": "phitron"
            }
        },
        {
            "pHeroCourses": {
                "course-z": "acc"
            }
        },
        {
            "pHeroCourses": {
                "course-xyz": "level-2"
            },
            "locationField": {
                "en-US": {
                    "lat": 19.28563,
                    "lon": 72.8691
                }
            }
        }
    ]

let lat = data1[3].locationField["en-US"].lat;
let lon = data1[3].locationField["en-US"].lon;
console.log(lat, lon);


for (let i = 0; i < data1.length; i++) {
    let courseName = data1[i].pHeroCourses;
    console.log(courseName);
}



// 4) How will you display
// a) Petersburg
// b) Herry
// let students = {
//     2222: {

//         name: "Jack",
//         section: "C",
//         class: "IX",
//         address: {

//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }

//     },
//     3333: {

//         name: "Herry",
//         section: "D",
//         class: "X",
//         address: {

//             "building no": 85,
//             "street": "DC road",
//             "city": "Kachukhet",
//             "country": "Bangladesh"
//         }

//     }
// }
// let country = students[3333].address.country;
// console.log(country);
// // Output: Bangladesh
// let city = students[2222].address.city;
// console.log(city);
// // Output: Petersburg
// let name = students[3333].name;
// console.log(name);
// // Output: Herry





// 5) How will you display
// a) programming er coddogosti
// b) VW
// c) Bangladesh
// let instructor = {
//     name: "Jhankar Mahbub",
//     entrepreneur: true,
//     additionalData: {
//         writer: true,
//         favoriteHobbies: ["travelling", "Coding"],
//         books: ["programming er bolod to bos", "programming ercoddogosti"],

// moreDetails: {
//                 favoriteBasketballTeam: "XYZ",
//                 isYoungest: true,
//                 hometown: {
//                     city: "ABC",
//                     state: "VW",
//                 },
//                 countriesLivedIn: ["Bangladesh", "New York"]
//             }
//         }
//     }

//     let book = instructor.additionalData.books[1];
//     console.log(book);
//     // Output: programming er coddogosti

//     let state = instructor.additionalData.moreDetails.hometown.state;
// console.log(state);
// // Output: VW

// let country = instructor.additionalData.moreDetails.countriesLivedIn[0];
// console.log(country);
// // Output: Bangladesh

// 6) How will you display
// a) B
// b) D

// Programming Hero

// const studentData = [

//     {
//         class: 10,
//         details: [
//             {
//                 studentId: '1',
//                 gradingDetails: [{ grade: 'A' }]
//             },
//             {
//                 studentId: '2',
//                 gradingDetails: [{ grade: 'B' }]
//             }
//         ]
//     },
//     {
//         class: 11,
//         details: [
//             {
//                 studentId: 3,
//                 gradingDetails: [{ grade: 'B' }]
//             },
//             {
//                 studentId: 4,
//                 gradingDetails: [{ grade: 'D' }]
//             }
//         ]
//     },
// ]
// console.log(studentData[0].details[1].gradingDetails[0].grade); // Output: B
// console.log(studentData[1].details[1].gradingDetails[0].grade); // Output: D




// 7) How will you display
// a) habluder adda
// b) Beginner
let data0 = {
    data:

        [
            {
                bookId: 1,
                bookDetails: {

                    

name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
console.log(data0.data[0].bookDetails.name); // Output: habluder adda
console.log(data0.data[1].bookCategory); // Output: Beginner
