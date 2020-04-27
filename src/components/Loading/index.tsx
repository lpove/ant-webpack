import React from "react";
import { Spin } from "antd";
import { SpinProps } from "antd/lib/spin";

interface ILoadingProps {
    loading?: boolean;
}

const Loading: React.FC<ILoadingProps & SpinProps> = (props) => {
    const { loading, size, spinning, tip, delay } = props;
    return (
        <div className='loading-root'>
            {loading ? (
                <Spin size={size} spinning={spinning} tip={tip} delay={delay} />
            ) : null}
        </div>
    );
};

Loading.defaultProps = {
    tip: "loading",
    loading: true,
};

export default Loading;
