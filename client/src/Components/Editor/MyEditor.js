import React, { useEffect, useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function MyEditor({ setStory }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
    setStory(convertToRaw(newEditorState.getCurrentContent()));
  };

  return (
    <div className="w-full h-full bg-indigo-100 shadow-sm overflow-auto p-5 rounded-lg">
      <Editor
        toolbarStyle={{
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 10,
        }}
        toolbarClassName="demo-toolbar-custom"
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor-custom"
        editorState={editorState}
        onEditorStateChange={onChange}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "list",
            "textAlign",
            "history",
            "image",
            "emoji",
            "link",
          ],
          inline: { inDropdown: false },
          list: {
            inDropdown: true,
          },
          textAlign: { inDropdown: false },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
      />
    </div>
  );
}
export default MyEditor;
