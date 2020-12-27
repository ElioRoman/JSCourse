const students = [
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Tom', birthDate: '03/15/2010' },
  { name: 'Sam', birthDate: '03/15/2010' },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'];

export const studentsBirthDays = () => {
  const sortedStudents = students.sort(
    (a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate(),
  );
  const result = sortedStudents.reduce((acc, { name, birthDate }) => {
    const nameOfMonth = months[new Date(birthDate).getMonth()];
    return { ...acc, [nameOfMonth]: acc[nameOfMonth] ? acc[nameOfMonth].concat(name) : [name] };
  }, {});

  return result;
};

console.log(studentsBirthDays(students));
