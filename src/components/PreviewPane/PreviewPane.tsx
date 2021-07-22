import React from "react";
import "./PreviewStyles.css";

interface MyProps {
  id: number;
  src: string;
  caption: string;
  onCaptionChange(newCaption: string): void;
}

export const PreviewPane = (props: MyProps) => {
  const onCaptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    props.onCaptionChange(event.target.value);
  };

  const { src, caption } = props;

  return (
    <div className="preview-pane">
      <img className="preview-image" src={src} alt={caption} />
      <textarea
        className="preview-caption"
        value={caption}
        onChange={onCaptionChange}
      />
    </div>
  );
};
