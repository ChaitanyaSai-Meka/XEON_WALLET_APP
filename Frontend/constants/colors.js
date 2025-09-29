const coffeeTheme = {
    primary: "#8B593E",
    background: "#FFF8F3",
    text: "#4A3428",
    border: "#E5D3B7",
    white: "#FFFFFF",
    textLight: "#9A8478",
    expense: "#E74C3C",
    income: "#2ECC71",
    card: "#FFFFFF",
    shadow: "#000000",
  };
  
  const forestTheme = {
    primary: "#2E7D32",
    background: "#E8F5E9",
    text: "#1B5E20",
    border: "#C8E6C9",
    white: "#FFFFFF",
    textLight: "#66BB6A",
    expense: "#C62828",
    income: "#388E3C",
    card: "#FFFFFF",
    shadow: "#000000",
  };
  
  const purpleTheme = {
    primary: "#6A1B9A",
    background: "#F3E5F5",
    text: "#4A148C",
    border: "#D1C4E9",
    white: "#FFFFFF",
    textLight: "#BA68C8",
    expense: "#D32F2F",
    income: "#388E3C",
    card: "#FFFFFF",
    shadow: "#000000",
  };
  
  const oceanTheme = {
    primary: "#0277BD",
    background: "#E1F5FE",
    text: "#01579B",
    border: "#B3E5FC",
    white: "#FFFFFF",
    textLight: "#4FC3F7",
    expense: "#EF5350",
    income: "#26A69A",
    card: "#FFFFFF",
    shadow: "#000000",
  };

const auroraVibeTheme = {
  primary: "#FF6F61", // Coral pink for a bold, warm accent
  background: "#F9FAFB", // Soft off-white for a clean, bright background
  text: "#2D3748", // Dark slate for crisp, readable text
  border: "#E2E8F0", // Light gray-blue for subtle borders
  white: "#FFFFFF", // Pure white for consistency
  textLight: "#7F9CF5", // Soft indigo for secondary text
  expense: "#F56565", // Warm red for expenses
  income: "#48BB78", // Fresh green for income
  card: "#EDF2F7", // Light gray for cards with a soft contrast
  shadow: "#2D3748", // Dark slate for subtle shadows
  };

  const minimalistFinanceTheme = {
    primary: "#4A90E2",    // Calm blue for buttons and highlights
    background: "#F5F5F5", // Light gray for a clean, bright background
    text: "#333333",       // Dark gray for readable text
    border: "#E0E0E0",     // Light gray for subtle borders
    white: "#FFFFFF",      // Pure white for consistency
    textLight: "#666666",  // Medium gray for secondary text
    expense: "#FF5252",    // Soft red for expenses
    income: "#4CAF50",     // Soft green for income
    card: "#FFFFFF",       // White for cards
    shadow: "#000000",     // Black for subtle shadows
  };
  
  export const THEMES = {
    coffee: coffeeTheme,
    forest: forestTheme,
    purple: purpleTheme,
    ocean: oceanTheme,
    aurora: auroraVibeTheme,
    minimalist: minimalistFinanceTheme,
  };
  
  // Theme changer
  export const COLORS = THEMES.aurora;