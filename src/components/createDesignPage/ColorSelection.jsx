import React, { useState } from 'react';

function ColorSelection() {
  const [selected, setSelected] = useState('white');

  const colors = [
    { name: 'white', className: 'bg-primary-white' },
    { name: 'gray', className: 'bg-secondary-light-gray-500' },
    { name: 'black', className: 'bg-primary-black' },
    { name: 'blue', className: 'bg-primary-blue-500' },
  ];

  return (
    <div>
      <h2 className='font-semibold text-xl mb-4'>Colors</h2>
      <div className='flex gap-4'>
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelected(color.name)}
            className={`
              ${color.className}
              rounded-full
              size-[40px]
              cursor-pointer
              transition-all
              duration-300
              ${color.name === 'white' ? 'border border-black' : ''}
              ${selected === color.name ? 'ring-4 ring-primary-blue-500 ring-offset-2' : ''}
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorSelection;

