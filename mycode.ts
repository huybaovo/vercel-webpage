console.log("Hello World")

type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string;
}
type Company = {
    name: string;
    abbreviation: string;
    url: string;
}

type SocailMedia = {
    icon: string;
    url: string;
}

// arrays for area4-table
const myCourses: Array<Course> = [
    {courseNumber: "CIS 457",courseName: "Data Communication",semesterTaken: "Fall 2022"},
    {courseNumber: "CIS 357",courseName: "Mobile Application Development",semesterTaken: "Fall 2022"},
    {courseNumber: "CIS 353",courseName: "Database",semesterTaken: "Winter 2022"},
    {courseNumber: "CIS 351",courseName: "Computer Organization and Assembley Language",semesterTaken: "Winter 2022"},
    {courseNumber: "MTH 325",courseName: "Discrete Structures: Computer Science 2",semesterTaken: "Fall 2021"},
    {courseNumber: "MTH 204",courseName: "Linear Algebra I",semesterTaken: "Fall 2021"},
    {courseNumber: "CIS 241",courseName: "System-Level Programming and Utilities",semesterTaken: "Fall 2021"},
    {courseNumber: "CIS 263",courseName: "Data Structures and Algorithms",semesterTaken: "Fall 2021"},
    {courseNumber: "CIS 163",courseName: "Computer Science II",semesterTaken: "Fall 2020"}
]
const tableHeaders: Array<string> = ["Course Number", "Course Name", "Semester Taken"]
// Creates area4-table 
const tArea4 = document.getElementById("area4-table")
const table = document.createElement("table")
const headerRow = document.createElement('tr')
for(let i of tableHeaders)
{
    const header = document.createElement('th')
    header.appendChild(document.createTextNode(`${i}`))
    headerRow.appendChild(header)
}
table.appendChild(headerRow)
for(let i of myCourses)
{
    const row = document.createElement("tr")
    const cNum = document.createElement("td")
    cNum.appendChild(document.createTextNode(i.courseNumber))
    const cName = document.createElement("td")
    cName.appendChild(document.createTextNode(i.courseName))
    const sTaken = document.createElement("td")
    sTaken.appendChild(document.createTextNode(i.semesterTaken))
    row.appendChild(cNum)
    row.appendChild(cName)
    row.appendChild(sTaken)
    table.appendChild(row)
}
tArea4?.appendChild(table)

//Create area 6 list
const companyArray: Array<Company> = [
    {name: "Amazon", abbreviation: "AMZN", url: "https://www.amazon.com/"},
    {name: "NVIDIA", abbreviation: "NVDA", url: "https://www.nvidia.com/en-us/"},
    {name: "Advanced Micro Devices", abbreviation: "AMD", url: "https://www.amd.com/en"},
    {name: "Oracle", abbreviation: "ORCL", url: "https://www.oracle.com/"},
    {name: "Microsoft", abbreviation: "MSFT", url: "https://www.microsoft.com/"}
]
const area6 = document.getElementById("A6")
const a6list = document.createElement("ul")
for(let i of companyArray)
{
    const child = document.createElement("li")
    const link = document.createElement("a")
    link.setAttribute("href", `${i.url}`)
    link.setAttribute("class", `Company`)
    link.setAttribute("id", `${i.name}`)
    link.appendChild(document.createTextNode(`${i.abbreviation}`))
    child.appendChild(link)
    a6list.appendChild(child)
}
area6?.appendChild(a6list)

//Create area 8 list
const mediaList: Array<SocailMedia> = [
    {icon: "imgs/GitHub-Mark.png",url: "https://github.com/"},
    {icon: "imgs/amazon.png",url: "https://www.amazon.com/"},
    {icon: "imgs/reddit-logo-16.png",url: "https://www.reddit.com/"},
    {icon: "imgs/youtube.jpg",url: "https://www.youtube.com/"},
    {icon: "imgs/microsoft.png",url: "https://www.microsoft.com/en-us/?ql=3"}
]
const area8 = document.getElementById("A8")
for(let i of mediaList)
{
    const temp = document.createElement("a")
    temp.setAttribute("href", `${i.url}`)
    const pic = document.createElement("img")
    pic.setAttribute("src", `${i.icon}`)
    temp.appendChild(pic)
    area8?.append(temp)
}