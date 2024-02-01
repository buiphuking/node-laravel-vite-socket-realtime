import React from "react";
import "./App.css";

function App2() {
  const nestedData = [
    {
      categoryName: "Category 1",
      subcategories: [
        {
          subcategoryName: "Subcategory 1.1",
          items: [
            { value: "value1", label: "label1" },
            { value: "value2", label: "label2" }
          ]
        },
        {
          subcategoryName: "Subcategory 1.2",
          items: [
            { value: "value3", label: "label3" },
            { value: "value4", label: "label4" }
          ]
        }
      ]
    },
    {
      categoryName: "Category 2",
      subcategories: [
        {
          subcategoryName: "Subcategory 2.1",
          items: [
            { value: "value5", label: "label5" },
            { value: "value6", label: "label6" }
          ]
        },
        {
          subcategoryName: "Subcategory 2.2",
          items: [
            { value: "value7", label: "label7" },
            { value: "value8", label: "label8" }
          ]
        }
      ]
    }
  ];

  return (
    <div className='App'>
      <h1>A</h1>
      {nestedData.map(category => (
        <div key={category.categoryName}>
          <h2>{category.categoryName}</h2>
          {category.subcategories.map(subcategory => (
            <div key={subcategory.subcategoryName}>
              <h3>{subcategory.subcategoryName}</h3>
              <ul>
                {subcategory.items.map(item => (
                  <li key={item.value}>
                    Value: {item.value}, Label: {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App2;
