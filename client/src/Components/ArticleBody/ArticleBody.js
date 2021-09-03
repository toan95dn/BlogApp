import draftToHtml from "draftjs-to-html";
import { convertFromHTML } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState } from "draft-js";
export default function ArticleBody({ rawDraftjsDoc }) {
  const markUp = draftToHtml(rawDraftjsDoc);
  const blocksFromHTML = convertFromHTML(markUp);

  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );

  return (
    <div>
      <Editor
        toolbarHidden
        readOnly
        editorState={EditorState.createWithContent(state)}
      />
    </div>
  );
}
