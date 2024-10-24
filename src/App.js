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
        image: 'https://stsahebabdul405253882785.blob.core.windows.net/5409c112-cd69-4005-84db-a7a769112c25-azureml-blobstore/UI/2024-10-24_154622_UTC/images/ai-Trust.jpeg',  
        description: 'Learn the basics of AI.',  
        cost: 'Free'  
    },  
    {  
        id: 2,  
        name: 'Machine Learning Advanced',  
        category: 'ML',  
        image: 'https://stsahebabdul405253882785.blob.core.windows.net/5409c112-cd69-4005-84db-a7a769112c25-azureml-blobstore/UI/2024-10-24_154622_UTC/images/ml.jpeg',  
        description: 'Dive deeper into machine learning techniques.',  
        cost: '$20'  
    },  
    {  
        id: 3,  
        name: 'Data Science 101',  
        category: 'Data Science',  
        image: 'https://stsahebabdul405253882785.blob.core.windows.net/5409c112-cd69-4005-84db-a7a769112c25-azureml-blobstore/UI/2024-10-24_154622_UTC/images/dataScience.jpeg',  
        description: 'Start your journey in data science.',  
        cost: '$10'  
    }  
];  
  
function App() {  
    const [selectedFilters, setSelectedFilters] = useState([]);  
  
    return (  
        <div className="App">  
            <div className='filter-1'>  
                <FilterComponent selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />  
            </div>  
            <div className='filter-2'>  
                <PricingFilter />  
            </div>  
            <div className='hero-section'>  
                <CoursesListing courses={courses} selectedFilters={selectedFilters} />  
            </div>  
        </div>  
    );  
}  
  
export default App;  
