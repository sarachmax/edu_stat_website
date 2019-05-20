import React from 'react';

import MoneyPerYear from './sectors/MoneyPerYear'
import DivideMoney from './sectors/DivideMoney'
import NumberOfStudents from './sectors/NumberOfStudents'
import NumberOfTeachers from './sectors/NumberOfTeachers'
import NumberOfSchools from './sectors/NumberOfSchools'

function App() {
  return (
    <div>
      <MoneyPerYear />
      <DivideMoney />
      <NumberOfStudents />
      <NumberOfTeachers />
      <NumberOfSchools />
    </div>
  );
}

export default App;
