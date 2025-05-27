"use client"

import { Separator } from "@iconbox/ui/components/separator";
import { Button } from "@iconbox/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
  zodResolver,
  z,
} from '@iconbox/ui/components/form'
import { Input } from '@iconbox/ui/components/input'
import { Textarea } from '@iconbox/ui/components/textarea'
import { RadioGroup, RadioGroupItem } from '@iconbox/ui/components/radio-group'
import { Label } from '@iconbox/ui/components/label'
import { OwnerSelect } from "@/components/dashboard/sidebar/owner-select";
import { useId } from "react";

const formSchema = z.object({
  owner: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  description: z.string().optional(),
  prefix: z.string().optional(),
  fontFamily: z.string().optional(),
  visibility: z.enum(['public', 'private']),
});

export default function NewProject() {
  const radioId = useId()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      owner: "",
      name: "",
      description: "",
      prefix: 'icon-',
      fontFamily: 'iconbox',
      visibility: 'private',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="lg:max-w-2xl py-10 mx-auto w-full">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">新建项目</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex items-end">
              <FormField
                control={form.control}
                name="owner"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1">Owner <span>*</span></FormLabel>
                    <FormControl>
                      <OwnerSelect {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="h-8 mx-2 leading-8">/</span>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1">项目名称 <span>*</span></FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>项目描述</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="请输入项目描述（可选）" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <FormField
              control={form.control}
              name="prefix"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FontClass / Symbol 前缀</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="请输入 FontClass/Symbol 前缀" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fontFamily"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Font Family</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="请输入 Font Family，默认 iconbox" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />
            <FormField control={form.control} name="visibility" render={({ field }) => (
              <RadioGroup className="gap-6" value={field.value} onValueChange={field.onChange}>
                <div className="flex items-start gap-2">
                  <RadioGroupItem
                    value="public"
                    id={`${radioId}-1`}
                    aria-describedby={`${radioId}-1-description`}
                  />
                  <div className="grid grow gap-2">
                    <Label htmlFor={`${radioId}-1`}>
                      Public
                    </Label>
                    <p
                      id={`${radioId}-1-description`}
                      className="text-muted-foreground text-xs"
                    >
                      You can use this card with a label and a description.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <RadioGroupItem
                    value="private"
                    id={`${radioId}-2`}
                    aria-describedby={`${radioId}-2-description`}
                  />
                  <div className="grid grow gap-2">
                    <Label htmlFor={`${radioId}-2`}>
                      Private
                    </Label>
                    <p
                      id={`${radioId}-2-description`}
                      className="text-muted-foreground text-xs"
                    >
                      You can use this card with a label and a description.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            )} />

            <Separator />

            <Button type="submit">新建项目</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
