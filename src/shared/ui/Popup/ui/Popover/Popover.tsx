import { ReactNode } from "react";
import popupCls from "../../styles/popup.module.scss";
import cls from "./Popover.module.scss";
import { Popover as HPopover } from "@headlessui/react";
import { DropdownDirection } from "shared/types/ui";
import { mapDirectionClass } from "../../styles/const";
import { classNames } from "shared/lib/classNames/classNames";

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children?: ReactNode;
}

export const Popover = (props: PopoverProps) => {
  const { 
    className, 
    trigger, 
    direction = "bottom right", 
    children 
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button 
        className={popupCls.trigger}
      >
        {trigger}
        </HPopover.Button>

      <HPopover.Panel 
          className={classNames(cls.panel, {}, menuClasses)}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
