"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  settingsFormSchema,
  SettingsFormSchema,
} from "@/lib/schemas/dashboard/settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { SaveIcon } from "lucide-react";
import { useForm } from "react-hook-form";

export const SettingsForm = () => {
  const form = useForm<SettingsFormSchema>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const handleSubmit = (data: SettingsFormSchema) => {
    // Save settings
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter store's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter store's email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="Enter store's phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter store's address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="stripePublishableKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stripe publishable key</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your stripe publishable key"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="stripeSecretKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stripe secret key</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your stripe secret key"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={!form.formState.isValid}
          className="w-fit"
          type="submit"
        >
          <SaveIcon className="size-4" /> Save
        </Button>
      </form>
    </Form>
  );
};
