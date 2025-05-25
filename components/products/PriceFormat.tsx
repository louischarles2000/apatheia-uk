'use client'
import React from 'react'
import { useStore } from '../../context/StoreProvider';
import { usePrice } from '../hooks/usePrice';

function PriceFormat({ amount }: { amount: string }) {
  const { currency: storeCurrency } = useStore();
  const { getPrice } = usePrice();

  // Convert the string amount to a number and use our currency conversion
  const priceInUSD = parseFloat(amount);
  
  // Use our new currency conversion system, but fall back to the store's currency 
  // format if there's an issue
  try {
    return <>{getPrice(priceInUSD)}</>;
  } catch {
    // Fallback to the original implementation
    return (
      <>
        {storeCurrency.symbol_left}{priceInUSD.toFixed(storeCurrency.decimal_place)}{storeCurrency.symbol_right}
      </>
    );
  }
}

export default PriceFormat