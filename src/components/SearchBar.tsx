const SearchBar: React.FC = (): React.JSX.Element => {
	// Search the query on Google Search
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const input = event.currentTarget.elements[0] as HTMLInputElement;
		const query = input.value;
		window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
	};

	return (
		<form
			className="flex items-center justify-center w-full h-16 bg-zinc-800 mt-12 px-4"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				placeholder="Search..."
				className="sm:w-[600px] w-full p-2 text-lg text-white border border-pink-200 rounded-md focus:outline-none focus:ring focus:ring-pink-200"
			/>
		</form>
	);
};

export default SearchBar;
