type LearningMode = "Online" | "Onsite";

enum RegistrationStatus {
    Pending,
    Active,
    Completed,
    Cancelled
}

type BirthDate = [number, number, number];

let birthDate: BirthDate = [15, 6, 2002];

type Scores = {
    [key: string] :number;
}

let scores: Scores = {
    "TypeScript": 95,
    "JavaScript": 90,
    "DataBases": 88
}

interface student {
    readonly id: number,
    name: string,
    email: string,
    phone: string,
    status: RegistrationStatus,
    learningMode: LearningMode,
    birthDate: BirthDate,
    courses: ReadonlyArray<string>,
    scores: Scores
}

const firstStudent : student = {
    id: 1001,
    name: "Ali Hasan",
    email: "ali@example.com",
    phone: "0790000000000",
    status: RegistrationStatus.Active,
    learningMode: "Online",
    birthDate: [15, 5, 2022],
    courses: ["TypeScript Fundamentals", "DataBase Fundamentals"],
    scores: {
        "TypeScript" : 95,
        "database" : 88
    }
}

const secondStudent : student = {
    id: 1002,
    name: "Sarah Ahmed",
    email: "sara@example.com",
    phone: "0790000000000",
    status: RegistrationStatus.Pending,
    learningMode: "Onsite",
    birthDate: [20, 10, 2022],
    courses: ["TypeScript Fundamentals", "JavaScript Fundamentals"],
    scores: {
        "TypeScript" : 91,
        "JavaScript" : 89
    }
}

let students: readonly student [] = [firstStudent, secondStudent];

console.log(students[0]);

