var skills = ["Python", "HTML 5", "Css and Bootstrap", "JavaScript (Node.JS, express)", 
    "C# (.NET framework)", "SQL", "phpMyAdmin", "C", "C++", "Php", "GIT & GitHub", "JSON", "Microsoft Office"];

function LoadSkills(){
    var num    = 0;
    var skills_copy = skills.slice();
    var four_skills = [];
    for (var i = 0; i < 4; i++) {
        num = Math.floor(Math.random() * skills_copy.length); //Random int number
        four_skills.push(skills_copy[num]); //Push element to the 3 size array
        skills_copy.splice(num, 1); //Delete element from the array
    }
    return [skills, four_skills]; //Return two or more vars
}

export default LoadSkills;