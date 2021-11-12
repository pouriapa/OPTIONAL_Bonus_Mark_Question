const findProfit = (countryName, record) => {    
    if(record.country.toLowerCase() === countryName.toLowerCase()){
        return record.profit;
    }
    return (0)
}

module.exports = {findProfit}