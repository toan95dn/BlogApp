import Posts from "../Components/Posts/Posts";
import TopicBar from "../Components/TopicsBar/TopicBar";

export default function HomePage() {
  return (
    <div className="pt-12  grid grid-cols-10 lg:flex lg:flex-col">
      <div className="col-span-2 p-3 h-full">
        <TopicBar />
      </div>

      <div className="col-span-8">
        <Posts />
      </div>
    </div>
  );
}
