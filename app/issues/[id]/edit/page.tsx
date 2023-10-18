import BackButton from "@/components/BackButton";
import CreateIssueForm from "@/components/CreateIssueForm";
import { getIssue } from "../detail/page";

interface Props {
  params: {
    id: string;
  };
}

const EditIssuePage = async ({ params }: Props) => {
  const initialValues = await getIssue({ params });
  return (
    <div className="flex flex-col gap-8">
      <BackButton href="/issues" />
      <div className="flex justify-center">
        <CreateIssueForm
          params={params}
          initialValues={initialValues}
          isEditting
        />
      </div>
    </div>
  );
};
export default EditIssuePage;
