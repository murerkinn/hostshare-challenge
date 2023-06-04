const formatMoney = (amount: number) => {
  if (!amount) return '-'

  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
}

export default formatMoney
