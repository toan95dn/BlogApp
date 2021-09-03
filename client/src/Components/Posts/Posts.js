import Post from "../Post/Post";

export default function Posts() {
  return (
    <div className="flex flex-wrap justify-evenly gap-2">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
