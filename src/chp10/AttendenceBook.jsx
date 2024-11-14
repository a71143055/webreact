import React from "react";

const students = [
    {
        id : 1,
        name : "Peter",
    },
    {
        id : 2,
        name : "Maria",
    },
    {
        id : 3,
        name : "David",
    },
    {
        id : 4,
        name : "Elza",
    },
];

function AttendenceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendenceBook;