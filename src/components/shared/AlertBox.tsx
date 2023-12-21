import React from "react";
import { CheckIcon, AlertCircleIcon, CroissantIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertBoxProps {
  type: "success" | "error";
  description: string;
}

const AlertBox = ({ type, description }: AlertBoxProps) => {
  return (
    <Alert
      className={`${
        type === "success"
          ? "bg-green-100 text-green-500 border-2 border-green-300"
          : "bg-red-100 text-red-600 border-2 border-red-300"
      } w-full p-3 rounded-md my-3`}
    >
      <div className="flex items-center gap-4">
        <div>
          {type === "success" ? (
            <CheckIcon className="w-10 h-10 text-green-500" strokeWidth={1} />
          ) : (
            <AlertCircleIcon
              className="w-10 h-10 text-red-500"
              strokeWidth={1}
            />
          )}
        </div>
        <div>
          <AlertTitle className="text-left">
            {type === "success" ? "Success" : "Error!"}
          </AlertTitle>
          <AlertDescription
            className={`${
              type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {description}
          </AlertDescription>
        </div>
      </div>
    </Alert>
  );
};

export default AlertBox;
