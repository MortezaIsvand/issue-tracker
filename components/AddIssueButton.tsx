import { MdAdd } from "react-icons/md";
import Spinner from "./Spinner";

interface Props {
  fullwidt?: boolean;
  isSubmitting?: boolean;
  isEditting?: boolean;
}

const AddIssueButton = ({ fullwidt, isSubmitting, isEditting }: Props) => {
  return (
    <button
      disabled={isSubmitting}
      className={`bg-blue-700 text-white  px-2 py-1.5 rounded-md flex justify-center items-center gap-2 ${
        fullwidt ? "w-full" : "w-fit"
      }`}
    >
      {isEditting ? (
        "UPDATE ISSUE"
      ) : (
        <>
          <MdAdd />
          ADD ISSUE
        </>
      )}
      {isSubmitting && <Spinner />}
    </button>
  );
};
export default AddIssueButton;
