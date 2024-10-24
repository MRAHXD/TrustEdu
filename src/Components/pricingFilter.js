import React, { useState } from 'react';  
import './pricingFilter.css';  
  
const PricingFilter = () => {  
    const [isPaid, setIsPaid] = useState(false);  
    const [priceRange, setPriceRange] = useState([0, 100]);  
  
    const handlePricingChange = (event) => {  
        setIsPaid(event.target.value === 'paid');  
    };  
  
    const handlePriceRangeChange = (event) => {  
        const { name, value } = event.target;  
        setPriceRange((prevRange) => {  
            const newRange = [...prevRange];  
            const numericValue = Math.max(1, Math.min(1000, Number(value)));  
            if (name === 'min') {  
                newRange[0] = numericValue;  
            } else {  
                newRange[1] = numericValue;  
            }  
            return newRange;  
        });  
    };  
  
    return (  
        <div className="pricing-filter">  
            <h2>Pricing Options</h2>  
            <label>  
                <input  
                    type="radio"  
                    value="free"  
                    checked={!isPaid}  
                    onChange={handlePricingChange}  
                />  
                Free  
            </label>  
            <label>  
                <input  
                    type="radio"  
                    value="paid"  
                    checked={isPaid}  
                    onChange={handlePricingChange}  
                />  
                Paid  
            </label>  
            {isPaid && (  
                <div>  
                    <label>  
                        Min Price:  
                        <input  
                            type="range"  
                            name="min"  
                            min="0"  
                            max="1000"  
                            value={priceRange[0]}  
                            onChange={handlePriceRangeChange}  
                        />  
                        {priceRange[0]}  
                    </label>  
                    <label>  
                        Max Price:  
                        <input  
                            type="range"  
                            name="max"  
                            min="0"  
                            max="1000"  
                            value={priceRange[1]}  
                            onChange={handlePriceRangeChange}  
                        />  
                        {priceRange[1]}  
                    </label>  
                </div>  
            )}  
            <button>Apply Filters</button>  {/* Optional: Add functionality to this button */}  
        </div>  
    );  
};  
  
export default PricingFilter;  
