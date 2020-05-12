import React, { Component } from "react";
import MessageBox from "../../components/MessageBox";

export default class Live extends Component<any, { val: number }> {
    readonly state = {
        val: 0,
    };

    printName<T>(arg: T): T {
        console.log(typeof arg);

        return arg;
    }

    componentDidMount() {
        // 可以这么调用泛型定义的函数
        this.printName<number>(123);
        this.printName<string>("123");
        this.printName([123]);

        this.setState({
            val: this.state.val + 1,
        });

        console.log("this.state.val", this.state.val); // 0

        this.setState({
            val: this.state.val + 1,
        });

        console.log("this.state.val", this.state.val); // 0

        this.setState({
            val: this.state.val + 1,
        });

        console.log("this.state.val", this.state.val); // 0

        setTimeout(() => {
            this.setState({
                val: this.state.val + 1,
            });

            console.log("this.state.val", this.state.val); // 2
        });
    }

    render() {
        return (
            <div>
                <MessageBox>
                    <div>123</div>
                </MessageBox>
                <h3 style={{ color: "red" }}>生命周期和 setState 测试</h3>
                <p>我是 state val 的值 {this.state.val}</p>
                {/* printf -- 2 */}
            </div>
        );
    }
}
