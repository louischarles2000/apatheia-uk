'use client'
import React from 'react'
import { useCurrency } from '../../context/CurrencyContext';

function PriceFormat({ amount }: { amount: string | number }) {
  const { convertPrice, formatPrice } = useCurrency();

  // Convert the amount to a number. If it's already a number, use it directly.
  const priceAsNumber = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (isNaN(priceAsNumber)) {
    console.error("Invalid amount passed to PriceFormat:", amount);
    return <>N/A</>; // Or some other placeholder for invalid price
  }

  // Assuming the 'amount' prop is always in USD if not converted yet.
  // The convertPrice function in CurrencyContext expects the base price in USD.
  const convertedAmount = convertPrice(priceAsNumber);
  
  return <>{formatPrice(convertedAmount)}</>;
}

export default PriceFormat