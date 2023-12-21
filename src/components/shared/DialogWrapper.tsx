import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import AlertBox from "./AlertBox";

type DialogWrapperProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  showNewDialog: boolean;
  setShowNewDialog: (value: boolean) => void;
  isSuccess: boolean;
  successMessage: string;
  isError: boolean;
  errorMessage: string;
};

const DialogWrapper = ({
  title,
  subtitle,
  children,
  showNewDialog,
  setShowNewDialog,
  isSuccess,
  successMessage,
  isError,
  errorMessage,
}: DialogWrapperProps) => {
  return (
    <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
      <DialogContent className="!max-w-[800px] !p-10">
        {isSuccess ? (
          <AlertBox type="success" description={successMessage} />
        ) : isError ? (
          <AlertBox type="error" description={errorMessage} />
        ) : null}
        <DialogHeader className="border-b-2 border-gray-100 pb-5">
          <DialogTitle className="text-2xl text-gray-600">{title}</DialogTitle>
          <DialogDescription>{subtitle}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
