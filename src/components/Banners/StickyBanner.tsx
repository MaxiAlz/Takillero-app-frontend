import { Banner } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';

interface StickyBannerProps {
  text: string;
  textLink?: string;
  href?: string;
  iconSize?: number;
}

const StickyBanner = ({
  text,
  textLink,
  href,
  iconSize,
}: StickyBannerProps) => {
  return (
    <Banner>
      <div className="flex w-full justify-between border rounded-lg border-primary bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <MdAnnouncement
              className="m-2 text-primary"
              size={iconSize ? iconSize : 30}
            />
            {/* {text} */}
            <span className="[&_p]:inline">
              {text}
              <a
                href={href}
                className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary"
              >
                {textLink}
              </a>
            </span>
          </p>
        </div>
        <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
        >
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
};

export { StickyBanner };
