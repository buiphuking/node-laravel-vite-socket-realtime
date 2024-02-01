import React from "react";

const App3 = () => {
  const nestedData = [
    {
      categoryName: "Category 1",
      subcategories: [
        {
          subcategoryName: "Subcategory 1.1",
          items: [
            { value: "value1", label: "label1" },
            { value: "value2", label: "label2" },
          ],
        },
        {
          subcategoryName: "Subcategory 1.2",
          items: [
            { value: "value3", label: "label3" },
            { value: "value4", label: "label4" },
          ],
        },
      ],
    },
    {
      categoryName: "Category 2",
      subcategories: [
        {
          subcategoryName: "Subcategory 2.1",
          items: [
            { value: "value5", label: "label5" },
            { value: "value6", label: "label6" },
          ],
        },
        {
          subcategoryName: "Subcategory 2.2",
          items: [
            { value: "value7", label: "label7" },
            { value: "value8", label: "label8" },
          ],
        },
      ],
    },
  ];
  return (
    <div className='grid grid-cols-1 gap-4'>
      <div className='grid grid-cols-2 gap-4 border border-black'>
        <div className='flex flex-row items-center justify-center '>Trung Học Phổ Thông</div>
        <div className='grid grid-rows-2 gap-2'>
          <div className='bg-gray-300 cursor-pointer'>Trắc Nghiệm</div>
          <div className=''>Ngân hàng câu hỏi</div>
        </div>
      </div>

      {/* <div className='flex flex-row items-center justify-center border-black border'>Giấy phép lái xe</div>
      <div className='grid grid-rows-2 gap-2'>
        <div className="border-black border">Trắc Nghiệm</div>
        <div className="border-black border">Ngân hàng câu hỏi</div>
      </div> */}
    </div>
  );
};

export default App3;