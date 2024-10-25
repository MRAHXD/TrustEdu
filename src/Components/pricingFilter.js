import React from 'react';
import './pricingFilter.css';
  
const PricingFilter = ({ priceFilter, setPriceFilter, priceRange, setPriceRange }) => {  
    const handlePricingChange = (event) => {  
        setPriceFilter(event.target.value);  
    };  
  
    const handlePriceRangeChange = (event) => {  
        const { name, value } = event.target;  
        setPriceRange(prevRange => {  
            const newRange = [...prevRange];  
            const numericValue = Math.max(0, Math.min(100, Number(value))); // Adjusted to include 0  
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
                    value="all"  
                    checked={priceFilter === 'all'}  
                    onChange={handlePricingChange}  
                /> All  
            </label>  
            <label>  
                <input  
                    type="radio"  
                    value="free"  
                    checked={priceFilter === 'free'}  
                    onChange={handlePricingChange}  
                /> Free  
            </label>  
            <label>  
                <input  
                    type="radio"  
                    value="paid"  
                    checked={priceFilter === 'paid'}  
                    onChange={handlePricingChange}  
                /> Paid  
            </label>  
            {priceFilter === 'paid' && (  
                <div>  
                    <label>  
                        Min Price:  
                        <input  
                            type="range"  
                            name="min"  
                            min="0"  
                            max="100"  
                            value={priceRange[0]}  
                            onChange={handlePriceRangeChange}  
                        /> {priceRange[0]}  
                    </label>  
                    <label>  
                        Max Price:  
                        <input  
                            type="range"  
                            name="max"  
                            min="0"  
                            max="100"  
                            value={priceRange[1]}  
                            onChange={handlePriceRangeChange}  
                        /> {priceRange[1]}  
                    </label>  
                </div>  
            )}  
        </div>  
    );  
};  
  
export default PricingFilter;  