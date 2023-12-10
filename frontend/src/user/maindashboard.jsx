import React from 'react';

export default function Maindashboard({selectedItem}) {
  return (
    <div className="flex-1 mt-14 h-screen p-4">
       <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
      {selectedItem && (
        <div>
          <h3 className="text-xl font-semibold mb-2">{selectedItem}</h3>
          <p>This is the content for {selectedItem}.</p>
        </div>
      )}
    </div>
  );
}
