import { z } from "zod";

export const webWizardSchemaKeys = {};

export const useWebWizardSchema = () => ({
  schema: z.object({
    roundness: z.number().min(1).max(10),
    personality: z.number(),
    appSize: z.number().min(1).max(10),
  }),
  defaultValues: {
    roundness: 1,
    personality: null,
    appSize: 1,
  },
});
