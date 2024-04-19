import { Toaster } from "react-hot-toast";

const ErrorMessage = ({ message }) => {
    return (
        <div className="toast">
            {message}
            <Toaster position='top-center' />
        </div>
        
    );
}
export default ErrorMessage