export default function TopicBar() {
  const allTopics = [
    "Technology",
    "Society",
    "Self",
    "Science",
    "Programming",
    "Politics",
    "Personal Development",
    "Industry",
    "Health",
    "Arts & Entertainment",
    "Culture",
  ];

  allTopics.sort();

  const listItems = allTopics.map((topic) => (
    <li
      key={topic}
      className="bg-indigo-500 px-2 py-1 rounded-lg text-white cursor-pointer
       hover:bg-indigo-400 flex-1 flex items-center justify-center "
    >
      {topic}
    </li>
  ));

  return (
    <div className="w-full bg-indigo-100 rounded-lg sticky top-16 z-30 sm:static">
      <div className="text-lg font-bold text-indigo-600 p-2">Category</div>
      <ul className="flex flex-wrap justify-center gap-2 p-2">{listItems}</ul>
    </div>
  );
}
