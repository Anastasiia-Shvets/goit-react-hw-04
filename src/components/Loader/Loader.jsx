import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />

        </div>
    );
};

export default Loader;