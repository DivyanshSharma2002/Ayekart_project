import React from 'react'
import State from '../component/State'
import stock from '../assets/stock.png' 
import product from '../assets/product.png' 
import profit from '../assets/profit.png' 
import purse from '../assets/purse.png' 
import bill from '../assets/bill.png' 
import quant from '../assets/quant.png' 
import growth from '../assets/growth.png' 
import cartvalue from '../assets/cartvalue.png' 

function StateCard() {
    const data = [
        { image:purse, title: 'Total Expense', description: '23,908.00' },
        { image:product,title: 'Total Products', description: '2300' },
        { image:quant,title: 'Stock Quantity', description: '200' },
        { image:cartvalue,title: 'Stock Value', description: '12,23,000' },
       
        
        { image:growth,title: 'Avr.Profit Margin', description: '1,12,000' },
        { image:profit,title: 'Avr.Profit Margin%', description: '10%' },
        { image:stock,title: 'Avg. Cart Value', description: '3,00,000' },
        { image:bill,title: 'Avg. Bills', description: '250' },

      ];
    
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 w-[1230px]">
          {data.map((item, index) => (
            <State key={index} image={item.image} title={item.title} description={item.description} />
          ))}
        </div>
  )
}

export default StateCard