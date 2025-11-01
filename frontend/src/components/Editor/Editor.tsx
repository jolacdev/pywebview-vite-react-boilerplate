import { useState } from 'react';

import './Editor.css';

export const Editor = () => {
  const [content, saveContent] = useState(
    'Using Python as backend, you can perform operations that are not allowed in Javascript, for example disk access. Click button below to save this content to hard drive.',
  );

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={content}
        onChange={(e) => {
          saveContent(e.target.value);
        }}
      />
      <br />

      <button
        className="button"
        onClick={() => {
          window.pywebview.api.generate_random_number_array(2).then((arr) => {
            const randArrSttr = arr.join(', ');
            saveContent(randArrSttr);
          });
        }}
      >
        Generate Rand Arr
      </button>
      <button
        className="button"
        onClick={() => {
          window.pywebview.api.save_content(content);
        }}
      >
        Save
      </button>
      <button
        className="button"
        onClick={() => window.pywebview.api.toggle_fullscreen()}
      >
        Toggle Full Screen
      </button>
    </div>
  );
};
