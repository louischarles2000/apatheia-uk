"use client";

import { useCurrency } from "../../context/CurrencyContext";


/**
 * A hook to handle price conversion and formatting
 */
export function usePrice() {
  const { currency, convertPrice, formatPrice } = useCurrency();
  
  /**
   * Converts a USD price to the currently selected currency and formats it
   * @param priceUSD - The price in USD
   * @returns Formatted price string with currency symbol
   */
  const getPrice = (priceUSD: number): string => {
    const convertedPrice = convertPrice(priceUSD);
    return formatPrice(convertedPrice);
  };

  return {
    currency,
    getPrice,
  };
} 