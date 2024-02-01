import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const Modal = ({ title, content, setProductInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4 ">
        <div className="border-b py-3 flex items-center justify-between">
          <div className="text-2xl">{title}</div>
          <GrClose
            className="cursor-pointer"
            onClick={() => {
              dispatch(modalFunc()), navigate("/"), setProductInfo();
            }}
            size={24}
          />
        </div>

        {content}
      </div>
    </div>
  );
};

export default Modal;
