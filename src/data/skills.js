const skills = [
    {
      title: 'Javascript',
      competency: 4,
      category: ['Web Development', 'Languages', 'Javascript'],
    },
    {
      title: 'Node.JS',
      competency: 3,
      category: ['Web Development', 'Javascript'],
    },
    {
      title: 'React',
      competency: 3,
      category: ['Web Development', 'Javascript'],
    },
    {
      title: 'MongoDB',
      competency: 3,
      category: ['Web Development', 'Databases'],
    },
    {
      title: 'Express.JS',
      competency: 2,
      category: ['Web Development', 'Javascript'],
    },
    {
      title: 'Jupyter',
      competency: 3,
      category: ['Data Science', 'Python'],
    },
    {
      title: 'Typescript',
      competency: 2,
      category: ['Web Development', 'Languages', 'Javascript'],
    },
    {
      title: 'HTML + SASS/SCSS/CSS',
      competency: 3,
      category: ['Web Development', 'Languages'],
    },
    {
      title: 'Python',
      competency: 5,
      category: ['Languages', 'Python'],
    },
    {
      title: 'C++',
      competency: 2,
      category: ['Languages'],
    },
    {
      title: 'MATLAB',
      competency: 2,
      category: ['Languages'],
    },
    {
      title: 'R',
      competency: 2,
      category: ['Languages'],
    },

  ].map((skill) => ({ ...skill, category: skill.category.sort() }));
  
  const colors = [
    'red',
    'gray',
    'purple',
    'blue',
    'green',
    'salmon',
    '#3896e2',
    '#c3423f',
    '#d75858',
    '#747fff',
    '#64cb7b',
  ];
  
  const categories = [
    ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
  ]
    .sort()
    .map((category, index) => ({
      name: category,
      color: colors,
    }));
  
  export { categories, skills };