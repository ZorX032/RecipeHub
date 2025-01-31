import React, {useState} from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
    const [query, setQuery] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key == "Enter"){
            onSearch(query)
        }
    }

    return (
        <div className="flex justify-center my-4">
            <input
                type="text"
                placeholder="Search..."
                className="border p-2 rounded w-1/2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => onSearch(query)}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;