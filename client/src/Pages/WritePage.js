import { useEffect, useState } from "react";
import MyEditor from "../Components/Editor/MyEditor";
import OptionDropdown from "../Components/TopicsDropdown/TopicDropdown";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { Editor } from "draft-js";
import draftToHtml from "draftjs-to-html";
import ArticleBody from "../Components/ArticleBody/ArticleBody";
import { convertFromHTML } from "draft-js";
import axios from "axios";

export default function WritePage() {
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

  const [selectedTopic, setSelectTopic] = useState(allTopics[0]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [story, setStory] = useState(null);

  useEffect(() => {
    if (story) {
      console.log(story);
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    try {
      axios.post("/posts/write", {
        body: story,
        title: title,
        author: "Test author",
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex justify-center w-full p-14 md:px-4 md:text-sm">
      <form
        className=" bg-white flex flex-col items-center gap-2 w-5/6 md:w-screen"
        onSubmit={handleSubmit}
      >
        <div className="w-full text-xl text-indigo-600 font-bold text-left md:text-base">
          Title:
        </div>
        <input
          type="text"
          className="h-10 bg-indigo-100 rounded-lg p-3 focus:outline-none w-full shadow-sm mb-4"
          name="title"
          placeholder="Enter the title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <div className="text-xl text-indigo-600 font-bold text-left w-full md:text-base">
          Main topic:
        </div>

        <div className="mb-4 w-full z-30">
          <OptionDropdown
            allOptions={allTopics}
            setSelectedOption={setSelectTopic}
          />
        </div>

        <div className="text-xl text-indigo-600 font-bold text-left w-full md:text-base">
          Your story:
        </div>
        <div className=" w-full h-screen flex justify-center ">
          <MyEditor setStory={setStory} />
        </div>

        <button
          type="submit"
          className="mt-2 py-2 px-6 text-white bg-indigo-500 inline-block rounded hover:bg-indigo-400 focus:ring focus:ring-offset-2 focus:ring-indigo-500 self-start"
        >
          Publish
        </button>
      </form>

      {/* <div>{story !== null ? <ArticleBody rawDraftjsDoc={story} /> : ""}</div> */}
    </div>
  );
}
