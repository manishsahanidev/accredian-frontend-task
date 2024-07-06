import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useState } from "react";
import ReferralModal from "./ReferralModal";

const HowDoIRefer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const features = [
    {
      id: 1,
      description:
        "Submit referrals easily via our website’s referral section.",
      icon: PersonAddAlt1Icon,
    },
    {
      id: 2,
      description:
        "Earn rewards once your referral joins an Accredian program.",
      icon: SaveAsIcon,
    },
    {
      id: 3,
      description:
        "Both parties receive a bonus 30 days after program enrollment.",
      icon: HandshakeIcon,
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
            How Do I <span className="text-primaryBlue">Refer?</span>
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.id} className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primaryBlue">
                  <feature.icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <dd className="text-base leading-7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={handleOpen}
          >
            Refer Now
          </button>
        </div>
      </div>
      <ReferralModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default HowDoIRefer;
