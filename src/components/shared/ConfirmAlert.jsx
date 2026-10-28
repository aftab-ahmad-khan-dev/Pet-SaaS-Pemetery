import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils.js";

/**
 * ConfirmAlert - Confirmation dialog with color theming
 * @param {boolean} open - Whether the dialog is open
 * @param {function} onOpenChange - Callback when open state changes
 * @param {string} title - Dialog title
 * @param {string} description - Dialog description
 * @param {string} confirmLabel - Confirm button text (default: "Confirm")
 * @param {string} cancelLabel - Cancel button text (default: "Cancel")
 * @param {function} onConfirm - Callback when user confirms
 * @param {"destructive" | "warning"} variant - Color theme: destructive (red) for delete, warning (amber) for alerts
 */
export default function ConfirmAlert({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  variant = "destructive",
}) {
  const isDestructive = variant === "destructive";

  const handleConfirm = () => {
    onConfirm?.();
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent
        className={cn(
          "max-w-md",
          isDestructive && "border-destructive/30",
          !isDestructive && "border-amber-500/30"
        )}
      >
        <AlertDialogHeader>
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center mb-2",
              isDestructive && "bg-destructive/10",
              !isDestructive && "bg-amber-500/10"
            )}
          >
            <i
              className={cn(
                "text-lg",
                isDestructive ? "fa-solid fa-trash text-destructive" : "fa-solid fa-triangle-exclamation text-amber-500"
              )}
            />
          </div>
          <AlertDialogTitle className={cn(
            isDestructive && "text-destructive",
            !isDestructive && "text-amber-600 dark:text-amber-500"
          )}>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction
            type="button"
            onClick={handleConfirm}
            className={cn(
              "focus:ring-2 focus:ring-offset-2",
              isDestructive &&
                "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive/50",
              !isDestructive &&
                "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500/50"
            )}
          >
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
