import React, { useState } from 'react';  
import './App.css';  
import FilterComponent from './Components/Filter.js';  
import PricingFilter from './Components/pricingFilter.js';  
import CoursesListing from './Components/coursesList.js';  
const { BlobServiceClient } = require('@azure/storage-blob');  
  

const connectionString = process.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING;   
let client;  
if (connectionString) {  
    client = BlobServiceClient.fromConnectionString(connectionString);  
} else {  
    console.error("Azure Storage Connection string is not defined.");  
}  
  
const courses = [  
    {  
        id: 1,  
        name: 'Introduction to AI',  
        category: 'AI', 
        tags: 'Private Educator', 
        image: 'https://stsahebabdul405253882785.blob.core.windows.net/5409c112-cd69-4005-84db-a7a769112c25-azureml-blobstore/UI/2024-10-24_154622_UTC/images/ai-Trust.jpeg',  
        description: 'Learn the basics of AI.',  
        cost: 'Free',
        source: 'https://',
        Level: 'Beginner',
        Duration: '2hrs',
        Rating: '4.5'

    },  
    {  
        id: 2,  
        name: 'Machine Learning Advanced',  
        category: 'ML',
        tags: 'Youtube',  
        image: 'https://stsahebabdul405253882785.blob.core.windows.net/5409c112-cd69-4005-84db-a7a769112c25-azureml-blobstore/UI/2024-10-24_154622_UTC/images/ml.jpeg',  
        description: 'Dive deeper into machine learning techniques.',  
        cost: '$20',
        source: 'https://',
        Level: 'Beginner',
        Duration: '2hrs',
        Rating: '4.5'
    },  
    {  
        id: 3,  
        name: 'Data Science 101',  
        category: 'Data Science', 
        tags: 'Private Educator', 
        image: 'https://stsahebabdul405253882785.blob.core.windows.net/5409c112-cd69-4005-84db-a7a769112c25-azureml-blobstore/UI/2024-10-24_154622_UTC/images/dataScience.jpeg',  
        description: 'Start your journey in data science.',  
        cost: '$10',
        source: 'https://',
        Level: 'Beginner',
        Duration: '2hrs',
        Rating: '4.5' 
    }  
];  
  
function App() {  
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [isPaid, setIsPaid] = useState(false);  
    const [priceRange, setPriceRange] = useState([0, 100]); 
    const [priceFilter, setPriceFilter] = useState('all');
  
    return (  
        <div className="App">  
        <div className='filter-1'>  
            <FilterComponent selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />  
        </div>  
        <div className='filter-2'>  
        <PricingFilter  
                priceFilter={priceFilter}  
                setPriceFilter={setPriceFilter}  
                priceRange={priceRange}  
                setPriceRange={setPriceRange}  
            />   
        </div>  
        <div className='hero-section'>  
        <CoursesListing  
                courses={courses}  
                selectedFilters={selectedFilters}  
                priceFilter={priceFilter}  
                priceRange={priceRange}  
            />  
        </div>  
    </div>  
);  
};  

export default App;   
