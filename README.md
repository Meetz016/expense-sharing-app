# Expense Sharing App

A user-friendly application for managing and sharing expenses among group members, built with React and Tailwind CSS. The app supports light and dark modes with smooth transitions for an enhanced user experience.

---

## Features

- **Add and Manage Expenses:**
  - Input fields for adding expenses, specifying the payer, and splitting costs among members.
  - Displays a detailed expense history in a responsive list view.

- **Track Member Balances:**
  - Real-time balance updates for each member based on added expenses.
  - Visual indicators for positive, negative, or neutral balances.

- **Theme Toggle:**
  - Supports light and dark modes with a toggle button using `lucide-react` icons.
  - Smooth transitions between themes powered by Tailwind CSS.

- **Responsive Design:**
  - Optimized layout with grid-based components for desktop and mobile screens.

---

## Widgets/Components Used

### Input Fields
- Used in the `ExpenseForm` component to collect expense details like name, amount, and payer.

### Button Components
- Used for adding members, submitting expenses, and toggling the theme.

### List Components
- `ExpenseList`: Displays a history of expenses.
- `BalanceSummary`: Shows individual balances for each member.

### Icons (Lucide-react)
- Sun and moon icons are used for the theme toggle functionality.

### Card Components
- Used to display organized sections like expense history and balance summary.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/meetz016/expense-sharing-app.git
   cd expense-sharing-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Folder Structure

```
src/
├── components/
│   ├── ExpenseForm.jsx
│   ├── ExpenseList.jsx
│   ├── BalanceSummary.jsx
│   ├── ThemeToggle.jsx
├── App.jsx
├── index.css
└── index.js
```

---

## Styling and Animations

- **Tailwind CSS:** Used for consistent styling throughout the application.
- **Theme Transition:** Tailwind's `duration-200` utility ensures smooth animations for theme changes and other interactions.

---

## Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---
