"use client"

import * as React from "react"
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Dialog = ({ open, onOpenChange, children }) => {
  return (
    <HeadlessDialog open={open} onClose={onOpenChange} className="relative z-50">
      {children}
    </HeadlessDialog>
  )
}

const DialogTrigger = ({ children, ...props }) => {
  return <>{children}</>
}

const DialogPortal = ({ children }) => {
  return <>{children}</>
}

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <Transition.Child
    as={React.Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div
      ref={ref}
      className={cn(
        "fixed inset-0 bg-black/80",
        className
      )}
      {...props}
    />
  </Transition.Child>
))
DialogOverlay.displayName = "DialogOverlay"

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <DialogOverlay />
    <Transition.Child
      as={React.Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <HeadlessDialog.Panel
        ref={ref}
        className={cn(
          "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border rounded-lg shadow-lg p-6",
          className
        )}
        {...props}
      >
        {children}
        <button
          onClick={() => {
            const event = new Event('close')
            window.dispatchEvent(event)
          }}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </HeadlessDialog.Panel>
    </Transition.Child>
  </div>
))
DialogContent.displayName = "DialogContent"

const DialogHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <HeadlessDialog.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <HeadlessDialog.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = "DialogDescription"

const DialogClose = ({ children, ...props }) => {
  return <>{children}</>
}

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

