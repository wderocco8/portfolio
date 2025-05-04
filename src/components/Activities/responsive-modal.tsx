import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Activity } from "@/types/Activities";

interface ResponsiveModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activity: Activity;
}

export function ResponsiveModal({
  open,
  onOpenChange,
  activity,
}: ResponsiveModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{activity.title}</DialogTitle>
            <DialogDescription>{activity.description}</DialogDescription>
          </DialogHeader>
          {activity.quicklinks.length > 0 && (
            <>
              <h4 className="font-semibold text-sm">Quicklinks</h4>
              <ul className="text-muted-foreground list-disc list-inside ml-4 space-y-1">
                {activity.quicklinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{activity.title}</DrawerTitle>
          <DrawerDescription>{activity.description}</DrawerDescription>
        </DrawerHeader>
        {activity.quicklinks.length > 0 && (
          <div className="px-4">
            <h4 className="font-semibold text-sm">Quicklinks</h4>
            <ul className="text-muted-foreground list-disc list-inside ml-4 space-y-1">
              {activity.quicklinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <DrawerFooter className="pt-2">
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
