"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Currency = "USD" | "AUD" | "EUR" | "CAD" | "GBP";

// Approximate exchange rates (as of implementation)
const exchangeRates: Record<Currency, number> = {
  USD: 1.0,
  AUD: 1.52, // 1 USD = 1.52 AUD
  EUR: 0.93, // 1 USD = 0.93 EUR
  CAD: 1.38, // 1 USD = 1.38 CAD
  GBP: 0.79, // 1 USD = 0.79 GBP
};

const currencySymbols: Record<Currency, string> = {
  USD: "$",
  AUD: "A$",
  EUR: "€",
  CAD: "C$",
  GBP: "£",
};

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (priceInUSD: number) => number;
  formatPrice: (price: number) => string;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  // Load saved currency preference from localStorage when available
  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency") as Currency;
    if (savedCurrency && Object.keys(exchangeRates).includes(savedCurrency)) {
      setCurrency(savedCurrency);
    }
  }, []);

  // Save currency preference when it changes
  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  const convertPrice = (priceInUSD: number): number => {
    return priceInUSD * exchangeRates[currency];
  };

  const formatPrice = (price: number): string => {
    return `${currencySymbols[currency]}${price.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, convertPrice, formatPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
} 