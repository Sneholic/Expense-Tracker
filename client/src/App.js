// import React, { useState } from 'react';
// import Header from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/Header.js';
// import { Balance } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/Balance.js';
// import { IncomeExpenses } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/IncomeExpenses.js';
// import { TransactionList } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/TransactionList.js';
// import { AddTransaction } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/AddTransaction.js';
// import { GlobalProvider } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/contast/GlobalState.js';
// import StickyNote from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/StickyNote.js'; // Corrected the import statement
// import '/home/racitsolution/Desktop/Expense_tracker-main/client/src/App.css';

// import Wrapper from "./home/racitsolution/Desktop/Expense_tracker-main/client/src/components/wrapper.js";
// import Screen from "/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/Screen.js";
// import ButtonBox from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/ButtonBox.js'
// import Button from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/Button.js'
// import CalcProvider from './contast/CalContext.js';

// const btnValues = [
//     [7, 8,9],
//       [7, 8, 9]


// ]

// // const btnValues = [
// //   ["C", "+-", "%", "/"],
// //   [7, 8, 9, "x"],
// //   [4, 5, 6, "-"],
// //   [1, 2, 3, "+"],
// //   [0, ".", "="],
// // ];




// function App() {
//   const [notes, setNotes] = useState([]);

//   function addNote() {
//     setNotes([
//       ...notes,
//       {
//         id: Date.now(),
//       },
//     ]);
//   }

//   function removeNote(noteId) {
//     setNotes(notes.filter((item) => item.id !== noteId));
//   }

//   return (
//     <GlobalProvider>
//       <Header />
//       <div className="container">
//         <Balance />
//         <IncomeExpenses />
//         <TransactionList />
//         <AddTransaction />
//       </div>

//       <div className="App">
//         <button className="sticky-btn" onClick={addNote}>
//           Create Note +
//         </button>
//         {notes.map((item) => (
//           <StickyNote key={item.id} onClose={() => removeNote(item.id)} />
//         ))}
//       </div>

//       <CalcProvider>
//       <Wrapper>
//         <Screen />
//         <ButtonBox>
//           {/* {btnValues.map((btn, i) => ( */}

          
//           {/* ))} */}
//         </ButtonBox>
//       </Wrapper>
//     </CalcProvider>
    
//     </GlobalProvider>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Header from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/Header.js';
import { Balance } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/Balance.js';
import { IncomeExpenses } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/IncomeExpenses.js';
import { TransactionList } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/TransactionList.js';
import { AddTransaction } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/AddTransaction.js';
import { GlobalProvider } from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/contast/GlobalState.js';
import StickyNote from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/StickyNote.js'; // Corrected the import statement
import '/home/racitsolution/Desktop/Expense_tracker-main/client/src/App.css';

import Wrapper from "/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/wrapper.js";
import Screen from "/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/Screen.js";
import ButtonBox from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/ButtonBox.js'
import Button from '/home/racitsolution/Desktop/Expense_tracker-main/client/src/components/Button.js'
import CalcProvider from "/home/racitsolution/Desktop/Expense_tracker-main/client/src/contast/CalContext.js";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];




function App() {
  const [notes, setNotes] = useState([]);

  function addNote() {
    setNotes([
      ...notes,
      {
        id: Date.now(),
      },
    ]);
  }

  function removeNote(noteId) {
    setNotes(notes.filter((item) => item.id !== noteId));
  }

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>

      <div className="App">
        <button className="sticky-btn" onClick={addNote}>
          Create Note +
        </button>
        {notes.map((item) => (
          <StickyNote key={item.id} onClose={() => removeNote(item.id)} />
        ))}
      </div>

      <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
    
    </GlobalProvider>
  );
}

export default App;