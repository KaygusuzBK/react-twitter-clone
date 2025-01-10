import { Popover } from "@headlessui/react";

function MyPopover({ buttonName }) {
  return (
    <Popover className="relative">
      <Popover.Button>{buttonName}</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <button href="/security">Yeniden yönder</button>
          <button href="/integrations">Alıntı</button>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
}

export default MyPopover;
