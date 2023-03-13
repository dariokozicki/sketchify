import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useWebWizardSchema } from "../schemas/useWebPersonalitySchema";

export const useWebWizardForm = () => {
  const { defaultValues, schema } = useWebWizardSchema();

  const form = useForm({ defaultValues, resolver: zodResolver(schema) });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return { form, onSubmit };
};
