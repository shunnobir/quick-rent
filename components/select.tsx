"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import Button from "@/components/button";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string | React.JSX.Element;
  placeholder: string;
  options: string[];
  value: string;
  onChangeValue: (option: string) => void;
}

const Select = ({
  label,
  placeholder,
  options,
  value,
  onChangeValue,
  className,
  ...props
}: SelectProps) => {
  const id = useId();
  const popupId = useId();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLUListElement>(null);
  const [selectedOption, setSelectedOption] = useState(options.indexOf(value));

  const handleSelection = useCallback(
    (index: number) => {
      setSelectedOption(index);
      setOpen(false);
      popupRef?.current
        ?.querySelector("[data-focused=true]")
        ?.setAttribute("data-focused", "false");
      onChangeValue(options[index]);
    },
    [onChangeValue, options],
  );

  useEffect(() => {
    const listBox = popupRef?.current;

    const isBottomHidden = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return rect.y + rect.height > window.innerHeight;
    };

    const isTopHidden = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return rect.y < 0;
    };

    const alignToTop = () => {
      if (!listBox) return;
      const rect = listBox.getBoundingClientRect();
      listBox.style.top = `-${rect.height + listBox.parentElement!.getBoundingClientRect().height + 6}px`;
    };

    const alignToBottom = () => {
      if (!listBox) return;
      listBox.style.top = `${listBox.parentElement!.getBoundingClientRect().height + 6}px`;
    };

    const getFocusedOption = () =>
      listBox?.querySelector("[data-focused=true]");

    const getSelectedOption = () =>
      listBox?.querySelector("[aria-selected=true]");

    const scrollIntoView = (element: Element | null | undefined) =>
      element?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });

    const setFocused = (element: Element | null | undefined) =>
      element?.setAttribute("data-focused", "true");

    const removeFocused = (element: Element | null | undefined) =>
      element?.setAttribute("data-focused", "false");

    const scrollToSelectedItem = () => {
      scrollIntoView(getSelectedOption());
    };

    const scrollToFocusedItem = () => {
      scrollIntoView(getFocusedOption());
    };

    const fixPopupPosition = () => {
      const listBox = popupRef?.current;
      if (listBox) {
        if (isBottomHidden(listBox)) {
          alignToTop();
        }

        if (isTopHidden(listBox)) {
          alignToBottom();
        }
      }
    };

    if (open) {
      scrollToSelectedItem();
      scrollToFocusedItem();
      fixPopupPosition();
    } else {
      if (selectedOption !== -1) {
        removeFocused(getFocusedOption());
      }
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        ref &&
        ref.current &&
        !ref.current.contains(e.target as HTMLElement)
      ) {
        setOpen(false);
      }
    };

    const handleOptionNavigation = (down: boolean = true) => {
      if (!listBox) return;
      const focusedItem = getFocusedOption() || getSelectedOption();
      let itemToFocus: Element | null;
      if (!focusedItem) {
        itemToFocus = down
          ? listBox.firstElementChild
          : listBox.lastElementChild;
      } else {
        removeFocused(focusedItem);
        if (
          (down && focusedItem.nextElementSibling) ||
          (!down && focusedItem.previousElementSibling)
        ) {
          itemToFocus = down
            ? focusedItem.nextElementSibling
            : focusedItem.previousElementSibling;
        } else {
          itemToFocus = down
            ? listBox.firstElementChild
            : listBox.lastElementChild;
        }
      }
      setFocused(itemToFocus);
      scrollIntoView(itemToFocus);
    };

    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Tab":
        case "ArrowDown":
        case "Down":
          if (open) {
            e.preventDefault();
            handleOptionNavigation(true);
          }
          break;
        case "ArrowUp":
        case "Up":
          if (open) {
            e.preventDefault();
            handleOptionNavigation(false);
          }
          break;
        case "Spacebar":
        case " ":
        case "Enter":
          if (open && getFocusedOption()) {
            e.preventDefault();
            handleSelection(
              Number.parseInt(getFocusedOption()!.getAttribute("data-index")!),
            );
          }
          break;
        default:
          break;
      }
    };

    const addEventListeners = () => {
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleKey);
      document.addEventListener("scroll", fixPopupPosition);
    };

    addEventListeners();

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("scroll", fixPopupPosition);
    };
  }, [handleSelection, open, selectedOption]);

  return (
    <div className="flex flex-col gap-1">
      {label ? <label>{label}</label> : null}
      <div
        ref={ref}
        className="relative"
        role="combobox"
        aria-controls=""
        aria-expanded={open}
        {...props}
      >
        <Button
          id={id}
          className={cn(
            "w-full justify-between gap-2 bg-slate-100 font-normal text-foreground hover:bg-slate-200 active:bg-slate-300",
            className,
          )}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <span className="text-wrap text-left">
            {selectedOption === -1 ? placeholder : options[selectedOption]}
          </span>
          {open ? (
            <ChevronUp size={20} className="text-foreground" />
          ) : (
            <ChevronDown size={20} className="text-foreground" />
          )}
        </Button>

        {/* Popup List */}
        <ul
          ref={popupRef}
          id={popupId}
          role="listbox"
          className={cn(
            "absolute inset-0 left-0 top-[120%] z-50 hidden h-fit max-h-72 w-full list-none flex-col gap-0.5 overflow-y-auto overscroll-contain rounded-lg border border-solid border-slate-200 bg-background p-1 opacity-0 shadow-md transition-all duration-300",
            open && "flex animate-opacity",
          )}
          aria-expanded={open}
        >
          {options.map((option, index) => (
            <li
              key={popupId + index}
              className="grid cursor-pointer grid-cols-[40px_1fr] items-start text-wrap rounded-md py-2 pr-2.5 text-sm hover:bg-slate-100 aria-selected:bg-slate-100 data-[focused=true]:ring-2 data-[focused=true]:ring-indigo-600 data-[focused=true]:ring-offset-1 data-[focused=true]:ring-offset-background"
              role="option"
              aria-selected={selectedOption === index}
              data-focused={false}
              data-index={index}
              onClick={() => handleSelection(index)}
            >
              <Check
                size={18}
                className={cn(
                  "invisible justify-self-center text-green-600",
                  selectedOption === index && "visible",
                )}
              />
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
