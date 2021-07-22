import React from "react";
import { ImageObject } from "../../TSInterfaces/ImageObject";
import { ListItem } from "./ListItem";
import "./ListStyles.css";

interface MyProps {
  imageData: ImageObject;
  selectedImage: number;
  onSelectedImageChange(id: number): void;
}

export const ListPane = (props: MyProps) => {
  const { imageData, selectedImage, onSelectedImageChange } = props;

  return (
    <div className="list-pane">
      {Object.values(imageData).map((image) => (
        <ListItem
          key={image.id}
          {...image}
          onSelectedImageChange={onSelectedImageChange}
          selected={image.id === selectedImage}
        />
      ))}
    </div>
  );
};
