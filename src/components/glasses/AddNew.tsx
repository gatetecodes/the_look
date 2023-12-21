"use client";
import React from "react";
import zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { glassSchema } from "@/lib/validations/glassSchema";
import SelectInput from "../form/SelectInput";
import { glassCategorys, glassTypes } from "@/lib/settings";
import { generateNumberScale } from "@/lib/helpers";
import TextInput from "../form/TextInput";
import { Button } from "../ui/button";
import { createGlass } from "@/lib/actions/glass.action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import AlertBox from "../shared/AlertBox";

const AddNew = ({
  showNewGlassDialog,
  setShowNewGlassDialog,
}: {
  showNewGlassDialog: boolean;
  setShowNewGlassDialog: (value: boolean) => void;
}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const form = useForm<zod.infer<typeof glassSchema>>({
    resolver: zodResolver(glassSchema),
    defaultValues: {
      glassType: "",
      glassCategory: "",
      cylinder: "",
      sphere: "",
      quantity: "",
      purchaseCostPerGlass: "",
    },
  });

  const onSubmit = async (data: zod.infer<typeof glassSchema>) => {
    try {
      setIsSubmitting(true);
      await createGlass(data);
      form.reset();
      setIsSuccess(true);
      setIsSubmitting(false);
      setShowNewGlassDialog(false);
    } catch (error) {
      setIsError(true);
      setIsSubmitting(false);
      console.log(error);
    }
  };

  return (
    <Dialog open={showNewGlassDialog} onOpenChange={setShowNewGlassDialog}>
      <DialogContent className="!max-w-[800px] !p-10">
        {isSuccess ? (
          <AlertBox
            type="success"
            description="You have successfully registered a new glass! Redirecting..."
          />
        ) : isError ? (
          <AlertBox
            type="error"
            description="An error occurred while registering a new glass! Please try again."
          />
        ) : null}
        <DialogHeader className="border-b-2 border-gray-100 pb-5">
          <DialogTitle className="text-2xl text-gray-600">
            Register Glass
          </DialogTitle>
          <DialogDescription>
            Please fill in the form below to register a new glass
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full flex items-center gap-5">
                <div className="w-full">
                  <SelectInput
                    form={form}
                    label="Glass Type"
                    placeholder="Select Lens Type"
                    commandPlaceholder="Type to search"
                    name="glassType"
                    options={glassTypes}
                    white
                    border
                  />
                </div>
                <div className="w-full">
                  <SelectInput
                    form={form}
                    label="Glass Category"
                    placeholder="Select Glass Category"
                    commandPlaceholder="Type to search"
                    name="glassCategory"
                    options={glassCategorys}
                    white
                    border
                  />
                </div>
                <div className="w-full">
                  <SelectInput
                    form={form}
                    label="Cylinder"
                    placeholder="Select Cylinder"
                    commandPlaceholder="Type to search"
                    name="cylinder"
                    options={generateNumberScale(0.25, 3)}
                    white
                    border
                  />
                </div>
                <div className="w-full">
                  <SelectInput
                    form={form}
                    label="Sphere"
                    placeholder="Select Sphere"
                    commandPlaceholder="Type to search"
                    name="sphere"
                    options={generateNumberScale(0.25, 3)}
                    white
                    border
                  />
                </div>
              </div>
              <div className="flex items-center gap-5">
                <TextInput
                  label="Quantity"
                  name="quantity"
                  form={form}
                  placeholder="Enter Quantity"
                  white
                  border
                  className="w-full"
                />
                <TextInput
                  label="Purchase Cost Per Glass (RWF)"
                  name="purchaseCostPerGlass"
                  form={form}
                  placeholder="Enter Purchase Cost Per Glass"
                  white
                  border
                  className="w-full"
                />
              </div>
              <div className="flex justify-end gap-10 mt-10">
                <Button
                  variant="outline"
                  onClick={() => setShowNewGlassDialog(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="px-12">
                  {isSubmitting ? "Loading..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddNew;
