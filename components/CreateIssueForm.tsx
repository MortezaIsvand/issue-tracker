"use client";

import { issueSchema } from "@/validations/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AddIssueButton from "./AddIssueButton";
import { Issue } from "@prisma/client";
import axios from "axios";

type formData = z.infer<typeof issueSchema>;

interface Props {
  initialValues?: Issue;
  isEditting?: boolean;
  params?: {
    id: string;
  };
}

const CreateIssueForm = ({ initialValues, isEditting, params }: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formData>({
    resolver: zodResolver(issueSchema),
    defaultValues: initialValues,
  });

  const create = async (data: formData) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (data: formData) => {
    try {
      await axios.patch(`/api/issues/${params?.id}`, data);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/2 max-md:w-[80%]">
      <form
        className="flex flex-col gap-8 max-w-lg "
        onSubmit={isEditting ? handleSubmit(update) : handleSubmit(create)}
      >
        <div className="flex flex-col gap-2 ">
          <input
            {...register("title")}
            placeholder="Title"
            className="border bg-gray-50 p-2 rounded-md focus:outline-blue-700"
          />
          {errors.title && (
            <p className="text-red-600">{errors.title.message}</p>
          )}
          <textarea
            {...register("description")}
            className="border bg-gray-50 p-2 rounded-md focus:outline-blue-700 h-40"
            placeholder="Description"
          />
          {errors.description && (
            <p className="text-red-600">{errors.description.message}</p>
          )}
          <select
            className="border bg-gray-50 p-2 rounded-md focus:outline-blue-700"
            {...register("status")}
            defaultValue={""}
          >
            <option>--Status--</option>
            <option value={"OPEN"}>open</option>
            <option value={"IN_PROGRESS"}>in_progress</option>
            <option value={"CLOSED"}>closed</option>
          </select>
          {errors.status && (
            <p className="text-red-600">{errors.status.message}</p>
          )}
        </div>
        <AddIssueButton
          fullwidt
          isSubmitting={isSubmitting}
          isEditting={isEditting}
        />
      </form>
    </div>
  );
};
export default CreateIssueForm;
