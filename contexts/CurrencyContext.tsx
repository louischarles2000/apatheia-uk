// "use client";

// import React, { createContext, useState, useContext, ReactNode } from 'react';

// // Define the shape of the context data
// interface CurrencyContextType {
//   currency: string;
//   setCurrency: (currency: string) => void;
//   convertCurrency: (amount: number, targetCurrency?: string) => number;
//   getCurrencySymbol: (currencyCode: string) => string;
// }

// // Define exchange rates relative to USD
// // In a real app, fetch these from an API
// const exchangeRates: { [key: string]: number } = {
//   USD: 1,
//   AUD: 1.50,
//   EUR: 0.92,
//   CAD: 1.37,
//   GBP: 0.79, // Default currency
// };

// const currencySymbols: { [key: string]: string } = {
//   USD: '$',
//   AUD: 'A$',
//   EUR: '€',
//   CAD: 'C$',
//   GBP: '£',
// };

// // Create the context with a default value
// const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// // Create a provider component
// interface CurrencyProviderProps {
//   children: ReactNode;
// }

// export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
//   const [currency, setCurrencyState] = useState<string>('GBP'); // Default currency

//   const setCurrency = (newCurrency: string) => {
//     if (exchangeRates[newCurrency]) {
//       setCurrencyState(newCurrency);
//     } else {
//       console.warn(\`Attempted to set an unsupported currency: \${newCurrency}\`);
//     }
//   };

//   const convertCurrency = (amount: number, targetCurrency?: string) => {
//     const finalTargetCurrency = targetCurrency || currency;
//     if (!exchangeRates[finalTargetCurrency]) {
//       console.warn(\`Unsupported target currency for conversion: \${finalTargetCurrency}\`);
//       return amount; // Return original amount if target currency is not supported
//     }
//     // Assuming 'amount' is always in USD as the base
//     const amountInUSD = amount;
//     return amountInUSD * exchangeRates[finalTargetCurrency];
//   };

//   const getCurrencySymbol = (currencyCode: string) => {
//     return currencySymbols[currencyCode] || '$'; // Default to $ if not found
//   };

//   return (
//     <CurrencyContext.Provider value={{ currency, setCurrency, convertCurrency, getCurrencySymbol }}>
//       {children}
//     </CurrencyContext.Provider>
//   );
// };

// // Create a custom hook to use the currency context
// export const useCurrency = (): CurrencyContextType => {
//   const context = useContext(CurrencyContext);
//   if (context === undefined) {
//     throw new Error('useCurrency must be used within a CurrencyProvider');
//   }
//   return context;
// }; 
import React from 'react'

function CurrencyContext() {
  return (
    <div>CurrencyContext</div>
  )
}

export default CurrencyContext