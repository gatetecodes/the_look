import React from "react";
import DialogWrapper from "../shared/DialogWrapper";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { patientSchema } from "@/lib/validations/patientShema";
import TextInput from "../form/TextInput";
import SelectInput from "../form/SelectInput";
import { generateNumberScale } from "@/lib/helpers";
import { Button } from "../ui/button";
import { createPatient } from "@/lib/actions/patient.action";

const AddNew = ({
  showNewPatientDialog,
  setShowNewPatientDialog,
}: {
  showNewPatientDialog: boolean;
  setShowNewPatientDialog: (value: boolean) => void;
}) => {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm<zod.infer<typeof patientSchema>>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      address: "",
      rightEye: {
        sphere: "",
        cylinder: "",
        axis: "",
        add: "",
      },
      leftEye: {
        sphere: "",
        cylinder: "",
        axis: "",
        add: "",
      },
    },
  });

  const onSubmit = async (data: zod.infer<typeof patientSchema>) => {
    try {
      setIsSubmitting(true);
      await createPatient({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email as string,
        phone: data.phone,
        dateOfBirth: data.dateOfBirth,
        address: data.address,
        rightEye: {
          sphere: +data.rightEye.sphere,
          cylinder: +data.rightEye.cylinder,
          axis: +data.rightEye.axis,
          add: +data.rightEye.add,
        },
        leftEye: {
          sphere: +data.leftEye.sphere,
          cylinder: +data.leftEye.cylinder,
          axis: +data.leftEye.axis,
          add: +data.leftEye.add,
        },
      });
      form.reset();
      setIsSuccess(true);
      setIsSubmitting(false);
      setShowNewPatientDialog(false);
    } catch (error) {
      setIsError(true);
      setIsSubmitting(false);
      console.log(error);
    }
  };
  console.log(form.formState.errors);
  return (
    <DialogWrapper
      title="Add New Patient"
      subtitle="Fill the form below to add a new patient"
      showNewDialog={showNewPatientDialog}
      setShowNewDialog={setShowNewPatientDialog}
      isSuccess={isSuccess}
      successMessage="You have successfully registered a new patient! Redirecting..."
      isError={isError}
      errorMessage="An error occurred while registering a new patient! Please try again."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full flex items-center gap-5">
            <div className="w-full">
              <TextInput
                form={form}
                label="First Name"
                name="firstName"
                placeholder="Enter patient first name"
                white
                border
              />
            </div>
            <div className="w-full">
              <TextInput
                form={form}
                label="Last Name"
                name="lastName"
                placeholder="Enter patient last name"
                white
                border
              />
            </div>
          </div>
          <div className="w-full flex items-center gap-5">
            <div className="w-full">
              <TextInput
                form={form}
                label="Email"
                name="email"
                placeholder="Enter patient email"
                white
                border
              />
            </div>
            <div className="w-full">
              <TextInput
                form={form}
                label="Phone Number"
                name="phone"
                placeholder="Enter patient phone number"
                white
                border
              />
            </div>

            <div className="w-full">
              <TextInput
                form={form}
                label="Date of Birth"
                name="dateOfBirth"
                placeholder="Enter patient date of birth"
                white
                border
              />
            </div>
          </div>
          <TextInput
            form={form}
            label="Address"
            name="address"
            placeholder="Enter patient address"
            white
            border
          />
          <div className="w-full flex items-center gap-5">
            <h3 className="text-lg w-full">Right Eye</h3>
            <div className="w-full">
              <SelectInput
                form={form}
                placeholder="Select Cylinder"
                commandPlaceholder="Type to search..."
                name="right.cylinder"
                options={generateNumberScale(0.25, 3)}
                white
                border
              />
            </div>
            <div className="w-full">
              <SelectInput
                form={form}
                placeholder="Select Sphere"
                commandPlaceholder="Type to search..."
                name="right.sphere"
                options={generateNumberScale(0.25, 3)}
                white
                border
              />
            </div>
            <div className="w-full">
              <TextInput
                form={form}
                placeholder="Enter Axis"
                name="right.axis"
                white
                border
              />
            </div>
            <div className="w-full">
              <TextInput
                form={form}
                placeholder="Enter Add"
                name="right.add"
                white
                border
              />
            </div>
          </div>
          <div className="w-full flex items-center gap-5">
            <h3 className="text-lg w-full">Left Eye</h3>
            <div className="w-full">
              <SelectInput
                form={form}
                placeholder="Select Cylinder"
                commandPlaceholder="Type to search..."
                name="left.cylinder"
                options={generateNumberScale(0.25, 3)}
                white
                border
              />
            </div>
            <div className="w-full">
              <SelectInput
                form={form}
                placeholder="Select Sphere"
                commandPlaceholder="Type to search..."
                name="left.sphere"
                options={generateNumberScale(0.25, 3)}
                white
                border
              />
            </div>
            <div className="w-full">
              <TextInput
                form={form}
                placeholder="Enter Axis"
                name="left.axis"
                white
                border
              />
            </div>
            <div className="w-full">
              <TextInput
                form={form}
                placeholder="Enter Add"
                name="left.add"
                white
                border
              />
            </div>
          </div>
          <div className="flex justify-end gap-10 mt-10">
            <Button
              variant="outline"
              onClick={() => setShowNewPatientDialog(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="px-12">
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </DialogWrapper>
  );
};

export default AddNew;
