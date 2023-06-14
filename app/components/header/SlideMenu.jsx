import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose as Close } from "react-icons/md";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import MobileMenu from "./MobileMenu";
import clsx from "clsx";
import { useNavigation } from "@remix-run/react";

const SlideMenu = ({ navItems, ...props }) => {
  const transition = useNavigation();
  const isLoading = transition.state === "loading";
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setOpen(false);
    }
  }, [isLoading]);
  return (
    <div {...props}>
      <button aria-label="open menu">
        <Hamburger
          className={clsx("text-[24px] text-white")}
          onClick={() => setOpen(true)}
        />
      </button>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className={clsx("fixed inset-0 overflow-hidden", "z-20")}
          open={open}
          onClose={setOpen}
        >
          <div className={clsx("absolute inset-0 overflow-hidden")}>
            {/* Overlay */}
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className={clsx(
                  "absolute inset-0",
                  "transition-opacity",
                  "bg-black bg-opacity-80"
                )}
              />
            </Transition.Child>
            <div
              className={clsx("fixed inset-y-0 right-0", "flex", "max-w-full")}
            >
              {/* Sliding panel */}
              <Transition.Child
                as={Fragment}
                enter=" transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className={clsx("relative", "w-screen max-w-md")}>
                  {/* Panel content */}
                  <div
                    className={clsx(
                      "flex flex-col",
                      "h-screen",
                      "overflow-y-scroll",
                      "shadow-xl",
                      "p-10",
                      "bg-black ",
                      "text-white"
                    )}
                  >
                    <div className="flex justify-end mb-5">
                      <button aria-label="close menu">
                        <Close
                          className="text-[24px] text-white "
                          onClick={() => setOpen(false)}
                        />
                      </button>
                    </div>
                    <MobileMenu navItems={navItems} />
                  </div>
                  {/* End of panel content */}
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SlideMenu;
