import React from 'react'

export default function productCardSkeleton() {
  return (
    <div className="rounded-md border animate-pulse">
    <div className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px] bg-gray-200"></div>
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold bg-gray-200 h-6 w-3/4"></h1>
      <p className="mt-3 text-sm text-gray-600 bg-gray-200 h-4 w-full"></p>

      <div className="mt-3 flex items-center justify-start">
        <span className="text-sm font-semibold bg-gray-200 h-4 w-12"></span>
        <span className="p-1 px-2 flex gap-1 bg-gray-200">
          <div className="h-4 w-4 bg-gray-200"></div>
          <div className="h-4 w-4 bg-gray-200"></div>
          <div className="h-4 w-4 bg-gray-200"></div>
          <div className="h-4 w-4 bg-gray-200"></div>
          <div className="h-4 w-4 bg-gray-200"></div>
        </span>
      </div>

      <div className="mt-3 flex items-center space-x-2">
        <span className="block text-sm font-semibold bg-gray-200 h-4 w-12"></span>
        <span className="block cursor-pointer p-1 px-2 text-xs font-medium relative bg-gray-200 h-4 w-20"></span>
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-gray-400 px-2 py-1.5 text-sm font-semibold text-white shadow-sm"
      >
        Loading...
      </button>
    </div>
  </div>
  )
}
