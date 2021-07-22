import React from "react";
import { ModelInterface } from "../TSInterfaces/Model";
import { Model } from "../Model";
import { ListPane } from "./ListPane/ListPane";
import { PreviewPane } from "./PreviewPane/PreviewPane";
import "./ImageGallery.css";

interface MyProps {
  model: Model;
}

type MyState = ModelInterface;

export class ImageGallery extends React.Component<MyProps, MyState> {
  state: MyState;

  constructor(props: MyProps) {
    super(props);
    this.state = {
      data: {},
      selected: 0,
    };
  }

  componentDidMount() {
    const data = this.props.model.getImageData();
    const selected = this.props.model.getSelected();
    this.setState({ data, selected });
  }

  handleSelectedImageChange = (newSelectedImage: number): void => {
    this.setState({ selected: newSelectedImage });
    this.props.model.updateSelectedImage(newSelectedImage);
  };

  handleCaptionUpdate = (newCaption: string) => {
    const { data, selected } = this.state;
    const updatedData = {
      ...data,
    };
    updatedData[selected].caption = newCaption;

    this.setState({
      data: updatedData,
    });

    this.props.model.updateCaption(newCaption);
  };

  render() {
    const { data, selected } = this.state;

    return (
      <div className="wrapper">
        {/* ListPane */}
        <ListPane
          imageData={data}
          selectedImage={selected}
          onSelectedImageChange={this.handleSelectedImageChange}
        />
        {/* PreviewPane */}
        <PreviewPane
          {...data[selected]}
          onCaptionChange={this.handleCaptionUpdate}
        />
      </div>
    );
  }
}
