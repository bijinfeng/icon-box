"use client";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  useForm,
  zodResolver,
  z,
} from "@iconbox/ui/components/form";
import { Input } from "@iconbox/ui/components/input";
import { TagTextarea } from "@iconbox/ui/components/tag-input";
import { Label } from "@iconbox/ui/components/label";
import { Separator } from "@iconbox/ui/components/separator";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const IconDetail = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-3xs">
        <div className="px-3 py-4">
          <Label className="mb-4">Info</Label>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="h-8" {...field} />
                </FormControl>
                <TagTextarea />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className="px-3 py-4">
          <Label className="mb-4">Style</Label>
        </div>
        <Separator />
      </form>
    </Form>
  );
};
