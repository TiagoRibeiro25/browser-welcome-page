import BookMarks from "./components/BookMarks";
import SearchBar from "./components/SearchBar";
import { getGreetingName, getCurrentHour } from "./lib/time";

const App: React.FC = (): React.JSX.Element => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800">
			<h1 className="text-4xl font-bold text-pink-200 text-center mx-2">
				{getGreetingName(getCurrentHour())}, Tiago!
			</h1>

			<SearchBar />
			<BookMarks />

			<div className="absolute bottom-4 right-4 text-sm text-gray-400 text-end">
				Made by Tiago Ribeiro
				<br />
				<a
					href="https://github.com/TiagoRibeiro25/browser-welcome-page"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					Source Code
				</a>
			</div>
		</div>
	);
};

export default App;
