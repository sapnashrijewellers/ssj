import rates from "../data/rates.json";

/**
 * Returns the rate per gram for a product based on its category and purity.
 * @param {object} product - The product object
 * @returns {number} - Rate per gram
 */
export function getRatePerGram(product) {
  const category = product.category.toLowerCase();

  // Gold categories
  if (category.includes("gold")) {
    switch (product.purity) {
      case "24K":
        return rates["24KgoldRatePerGram"];
      case "22K":
        return rates["22KgoldRatePerGram"];
      case "18K":
        return rates["18KgoldRatePerGram"];
      default:
        return rates["22KgoldRatePerGram"]; // fallback
    }
  }

  // Silver categories
  if (category.includes("silver")) {
    return rates["silverRatePerGram"];
  }

  // Other / imitation items
  return 0;
}
