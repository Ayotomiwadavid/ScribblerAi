import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import logo from "../Assets/Images/Logo.png";
import displayPic from "../Assets/Images/1.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const products = [
  {
    name: "Generate Images",
    description: "Start with imagine",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Edit/Modify It",
    description: "Hit the edit button to modify",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Plan A Trip",
    description: "I have 4 days holiday from my job so plan paris trip for me.",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Write Code For Me",
    description: "Can you write tik tak to game fom me with react js.",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Article Title",
    description: "Write me title for a react blog post.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({headerNavType}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  // TO GET CURRENT LOCATION TO BETTER DISPLAY ELEMENTS BASED ON USER LOCATION ON THE WEBSITE

  const location = useLocation();

  const { pathname } = location;

  const handleLogout = async () => {
    try {
      // Set login status to false
      localStorage.setItem('loginStatus', 'false');
  
      toast.success('Logout successful');
  
      // Redirect to login page
      navigate('/userAuth/login');
    } catch (error) {
      console.log(error.message);
    }
  };
  

  const changeprofileDropdownVisibility = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <header className="bg-white w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="https://scribbler-ai-landing-page.vercel.app/"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold capitalize leading-6 text-[#2563EE]">
              features
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="https://scribbler-ai-landing-page.vercel.app/"
            rel="noreferrer"
            target="_blank"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#2563EE]"
          >
            Company
          </a>
        </Popover.Group>

        {headerNavType === "profile" ? (
        <aside className="items-center relative justify-center hidden lg:flex lg:flex-1 lg:justify-end">
          <div
            className="w-[50px] cursor-pointer h-[50px] rounded-full border-2 border-[#CBD5E1] flex items-center justify-center"
            onClick={changeprofileDropdownVisibility}
          >
            <img
              src={displayPic}
              alt="profile img"
              className="w-[85%] h-[85%] rounded-full"
            />
          </div>

          {showProfileMenu && (
            <ul className="absolute lg:w-[35%] z-50 top-[50px] right-5 rounded-md gap-2 items-center justify-center flex flex-col py-3 bg-white shadow-md border-2 border-[#CBD5E1]">
              <li className="w-full flex border-b-2 border-[#E2E8F0] items-center justify-between py-2 px-1">
                <div className="w-[50px] cursor-pointer h-[50px] rounded-full border-2 border-[#CBD5E1] flex items-center justify-center">
                  <img
                    src={displayPic}
                    alt="profile img"
                    className="w-[85%] h-[85%] rounded-full"
                  />
                </div>
                <h3 className="py-3 text-sm text-center w-[70%] text-[#334155] font-bold capitalize">
                  Phillip Burke
                </h3>
              </li>
              <Link
                to="/user-profile"
                className="w-[90%] items-center cursor-pointer justify-center"
              >
                <li className="w-[100%] items-center flex py-2 justify-start gap-2 text-[12px] text-[#64748B] pl-2 font-bold capitalize">
                  {" "}
                  <PermIdentityIcon
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  />{" "}
                  profile
                </li>
              </Link>
              <li
                onClick={handleLogout}
                className="w-[90%] items-center cursor-pointer py-2 justify-center gap-2 text-[12px] text-[#64748B] pl-2 font-bold capitalize"
              >
                {" "}
                <PowerSettingsNewIcon
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                />{" "}
                log out
              </li>
            </ul>
          )}
        </aside>
      ) : headerNavType === "login" ? (
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/userAuth/login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#2563EE]"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      ) : headerNavType === "registration" ? (
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/userAuth/registration"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#2563EE]"
          >
            Sign up <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      ) : null}
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="https://scribbler-ai-landing-page.vercel.app/"
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        features
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="https://scribbler-ai-landing-page.vercel.app/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>

          {headerNavType === "profile" ? (
          <aside className="items-center relative justify-center hidden lg:flex lg:flex-1 lg:justify-end">
            <div
              className="w-[50px] cursor-pointer h-[50px] rounded-full border-2 border-[#CBD5E1] flex items-center justify-center"
              onClick={changeprofileDropdownVisibility}
            >
              <img
                src={displayPic}
                alt="profile img"
                className="w-[85%] h-[85%] rounded-full"
              />
            </div>

            {showProfileMenu && (
              <ul className="absolute lg:w-[35%] z-50 top-[50px] right-5 rounded-md gap-2 items-center justify-center flex flex-col py-3 bg-white shadow-md border-2 border-[#CBD5E1]">
                <li className="w-full flex border-b-2 border-[#E2E8F0] items-center justify-between py-2 px-1">
                  <div className="w-[50px] cursor-pointer h-[50px] rounded-full border-2 border-[#CBD5E1] flex items-center justify-center">
                    <img
                      src={displayPic}
                      alt="profile img"
                      className="w-[85%] h-[85%] rounded-full"
                    />
                  </div>
                  <h3 className="py-3 text-sm text-center w-[70%] text-[#334155] font-bold capitalize">
                    Phillip Burke
                  </h3>
                </li>
                <Link
                  to="/user-profile"
                  className="w-[90%] items-center cursor-pointer justify-center"
                >
                  <li className="w-[100%] items-center flex py-2 justify-start gap-2 text-[12px] text-[#64748B] pl-2 font-bold capitalize">
                    {" "}
                    <PermIdentityIcon
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    />{" "}
                    profile
                  </li>
                </Link>
                <li
                  onClick={handleLogout}
                  className="w-[90%] items-center cursor-pointer py-2 justify-center gap-2 text-[12px] text-[#64748B] pl-2 font-bold capitalize"
                >
                  {" "}
                  <PowerSettingsNewIcon
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  />{" "}
                  log out
                </li>
              </ul>
            )}
          </aside>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/userAuth/login"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#2563EE]"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
