import {
	FaGithub,
	FaGoogle,
	FaSteam,
	FaTwitch,
	FaYoutube,
} from "react-icons/fa";
import { SiStreamlabs } from "react-icons/si";

const BookMarks: React.FC = (): React.JSX.Element => {
	const bookmarks = [
		{ name: "Google", url: "https://www.google.com", icon: <FaGoogle /> },
		{ name: "YouTube", url: "https://www.youtube.com", icon: <FaYoutube /> },
		{ name: "GitHub", url: "https://github.com", icon: <FaGithub /> },
		{ name: "Twitch", url: "https://www.twitch.tv", icon: <FaTwitch /> },
		{
			name: "Steam",
			url: "https://store.steampowered.com",
			icon: <FaSteam />,
		},
		{
			name: "Streamable",
			url: "https://streamable.com",
			icon: <SiStreamlabs />,
		},
	];

	return (
		<div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-12">
			{bookmarks.map((bookmark, index) => (
				<a
					key={index}
					href={bookmark.url}
					className="flex items-center justify-center w-16 h-16 text-3xl text-pink-200 bg-zinc-800 border border-pink-200 rounded-md hover:bg-pink-200 hover:text-zinc-800"
					rel="noopener noreferrer"
				>
					{bookmark.icon}
				</a>
			))}
		</div>
	);
};

export default BookMarks;
