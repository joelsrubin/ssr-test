import { IconFolder, IconSun, IconMoonStars, IconShare } from "@tabler/icons";
import toast from "react-hot-toast";
import { styleObj } from "../constants";
import { TListItem } from "../pages";

type TNavProps = {
  colorMode: string | undefined;
  slug: string | undefined;
  isDarkMode: boolean;
  list: TListItem[];
  setColorMode: (value: string | undefined) => void;
};

export default function Navbar({
  colorMode,
  slug,
  isDarkMode,
  list,
  setColorMode,
}: TNavProps) {
  return (
    <div className="sticky top-0 p-4 bg-amber-50 dark:bg-gray-800">
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row justify-evenly w-1/4 sm:w-1/5">
          <IconShare
            color={styleObj[colorMode!]}
            className="hover:scale-110 duration-200 cursor-pointer"
            onClick={async () => {
              await navigator.clipboard.writeText(window.location.href);
              toast.success(`${slug} has been copied to clipboard!`, {
                duration: 3500,
                icon: isDarkMode ? "🔦" : "👏",
                style: {
                  borderRadius: "10px",
                  background: isDarkMode ? "#1F2937" : "white",
                  border: isDarkMode ? "1px solid white" : "",
                  color: isDarkMode ? "#fff" : "black",
                },
              });
            }}
          />
          <IconFolder
            color={styleObj[colorMode!]}
            className="hover:scale-110 duration-200 cursor-pointer"
            onClick={() => {
              toast(
                (t) => (
                  <div className="flex flex-col ">
                    <p className="text-sm font-lg text-gray-900 text-center p-4 dark:text-white">
                      Recent Lists
                    </p>
                    <ul>
                      {list
                        .slice(-5)
                        .reverse()
                        .map((listItem) => (
                          <a href={listItem.href} key={listItem.href}>
                            <li className="flex flex-col items-center justify-center p-4 hover:underline hover:bg-slate-100 cursor-pointer">
                              {listItem.slug}
                            </li>
                          </a>
                        ))}
                    </ul>
                    <div className="flex">
                      <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-sm p-4 flex items-center justify-center text-sm font-medium text-blue-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-white dark:focus:ring-white"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ),
                {
                  duration: Infinity,
                  style: {
                    backgroundColor: isDarkMode ? "#1F2937" : "white",
                    border: isDarkMode ? "2px solid white" : "",
                  },
                }
              );
            }}
          />
        </div>
        <div
          className="px-4 cursor-pointer"
          onClick={() => {
            setColorMode(isDarkMode ? "light" : "dark");
          }}
        >
          {isDarkMode ? (
            <IconSun color="white" className="animate-spin-in" />
          ) : (
            <IconMoonStars className="animate-spin-in" />
          )}
        </div>
      </div>
    </div>
  );
}
