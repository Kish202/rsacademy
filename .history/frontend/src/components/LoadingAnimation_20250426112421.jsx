import React from 'react';

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 z-50">
      <div className="relative">
        {/* Circular moving dots */}
        <div className="flex items-center justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full mx-1 animate-bounce"
              style={{
                backgroundColor: i === 0 ? '#60A5FA' : i === 1 ? '#F472B6' : '#FBBF24',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        
        <div className="mt-6 text-blue-700 text-center font-medium">
          Loading amazing content...
        </div>
      </div>
    </div>
  );
}