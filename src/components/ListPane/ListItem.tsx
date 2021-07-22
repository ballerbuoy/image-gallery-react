import React from "react";
import { trimCaption } from "../../utils";
import "./ListStyles.css";

interface MyProps {
  id: number;
  src: string;
  caption: string;
  onSelectedImageChange(id: number): void;
  selected: boolean;
}

export const ListItem = (props: MyProps) => {
  const { id, caption, src, selected } = props;
  const className = selected ? "list-item item-selected" : "list-item";

  const refCallback = (element: HTMLSpanElement | null) => {
    trimCaption(element, 1);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      props.onSelectedImageChange(id);
    }
  };

  return (
    <div
      onClick={() => {
        props.onSelectedImageChange(id);
      }}
      onKeyPress={handleEnterPress}
      tabIndex={0}
      className={className}
      draggable={true}
    >
      <img
        className="item-photo"
        src={src}
        alt={caption}
        height="45px"
        width="45px"
      />
      <span className="item-caption" ref={refCallback}>
        {caption}
      </span>
    </div>
  );
};
