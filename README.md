# Expense Splitter App

## Project Overview

Expense Splitter is a simple React application designed to help groups track and split shared expenses easily. This MVP (Minimum Viable Product) allows users to add expenses, select payers, and automatically calculate individual balances.

## Features

- Add expenses with name and total amount
- Select payer from group members
- Automatically split expenses evenly
- Real-time balance tracking
- Responsive design with Tailwind CSS
- In-memory expense management

## Technologies Used

- React.js
- Tailwind CSS
- JavaScript

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/expense-splitter.git
cd expense-splitter
```

2. Install dependencies:
```bash
npm install
```

3. Install Tailwind CSS:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. Start the development server:
```bash
npm start
```

## Project Structure

```
expense-splitter/
├── public/
├── src/
│   ├── components/
│   │   ├── ExpenseForm.js
│   │   ├── ExpenseList.js
│   │   └── BalanceSummary.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
└── package.json
```

## Key Components

- **App.js**: Main application component managing state
- **ExpenseForm.js**: Form for adding new expenses
- **ExpenseList.js**: Displays expense history
- **BalanceSummary.js**: Shows individual member balances

## How It Works

1. Add an expense by entering:
   - Expense name
   - Total amount
   - Select the payer

2. The app automatically:
   - Splits the expense equally among members
   - Updates individual balances
   - Tracks expense history

## Customization

- Modify `members` array in `App.js` to change group members
- Adjust Tailwind CSS in `tailwind.config.js` for custom styling

## Limitations

- In-memory storage (expenses reset on page refresh)
- No persistent data storage
- Simple equal splitting algorithm

## Future Improvements

- Add persistent storage
- Implement more complex splitting algorithms
- Add user authentication
- Create ability to add/remove group members

## License

This project is open-source and available under the MIT License.

## Contact

Created for internship task demonstration.