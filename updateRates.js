import fs from 'fs';
import fetch from 'node-fetch';

async function fetchRate(currencyPair) {
  const response = await fetch('https://cem.mmtcpamp.com/pvt/getNonExecutableQuote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ currencyPair, type: 'BUY' })
  });
  const data = await response.json();
  return data; // adjust according to actual API response
}

function calculateRates(gold24K) {
  return {
    asOn: new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' }),
    "24K": gold24K,
    "22K": +(gold24K * 0.9167).toFixed(2),
    "18K": +(gold24K * 0.75).toFixed(2),
    silver: 0, // will update later
    gstPercent: 3
  };
}

async function updateRates() {
  try {
    const goldData = await fetchRate('XAU/INR');
    const silverData = await fetchRate('XAG/INR');

    const goldRate = goldData?.rate || 0; // adjust according to API response
    const silverRate = silverData?.rate || 0;

    const rates = calculateRates(goldRate);
    rates.silver = silverRate;

    fs.writeFileSync('public/data/rates.json', JSON.stringify(rates, null, 2));
    console.log('rates.json updated:', rates);
  } catch (err) {
    console.error('Error updating rates:', err);
  }
}

updateRates();
