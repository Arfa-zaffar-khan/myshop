import { Search } from "lucide-react";
import { useState } from "react";

export default function ({handleSearch}) {
    const[searchQuery,setSearchQuery]=useState("")
   const handleChange=(query)=>{
    setSearchQuery(query)
    handleSearch(query)
    }
  return (
    <form className="flex gap-2" >
       <div className="relative">
      <input
        className="flex h-10 w-[150px] lg:w-[250px] rounded-md bg-gray-100 px-10 py-2 text-lg placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e)=>handleChange(e.target.value)}
      />
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
    </div>

      <button
        type="submit"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Search
      </button>
    </form>
  );
}
