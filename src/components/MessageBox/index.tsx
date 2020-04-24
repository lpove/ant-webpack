import React, { Component } from "react";

export interface IMessageBoxProps {
    message?: React.ReactNode;
    callBack?(): void;
}
/**
 * 该组件已废弃，请直接使用 Alert 代替
 */
class MessageBox extends Component<IMessageBoxProps> {
    static defaultProps = {
        type: "warning",
    };

    public render() {
        return <div children={this.props.children} />;
    }
}

export default MessageBox;
