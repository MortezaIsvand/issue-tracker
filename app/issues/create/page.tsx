import BackButton from "@/components/BackButton";
import CreateIssueForm from "@/components/CreateIssueForm";

const CreateIssuePage = () => {
  return (
    <div className="flex flex-col gap-8">
      <BackButton href="/issues" />
      <div className="flex justify-center">
        <CreateIssueForm />
      </div>
    </div>
  );
};
export default CreateIssuePage;
