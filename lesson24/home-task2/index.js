const students = [
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Tom', birthDate: '04/15/2010' },
  { name: 'Sam', birthDate: '04/16/2010' },
  { name: 'Bob', birthDate: '02/13/2010' },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'];

const studentsBirthDays = () => {
  const sortedStudents = [...students].sort(
    (a, b) => Date.parse(b.birthDate) - Date.parse(a.birthDate),
  );
  console.log(sortedStudents);
  console.log(students);
  const result = sortedStudents.reduce((acc, { name, birthDate }) => {
    const nameOfMonth = months[new Date(birthDate).getMonth()];
    return { ...acc, [nameOfMonth]: acc[nameOfMonth] ? acc[nameOfMonth].concat(name) : [name] };
  }, {});

  return result;
};

console.log(studentsBirthDays(students));
