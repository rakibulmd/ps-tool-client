import React from "react";
import PropTypes from "prop-types";

import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { Cog6ToothIcon, PowerIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseAuth";
import { useNavigate } from "react-router-dom";

export function AvatarWithUserDropdown({ userPhotoURL, userName }) {
  const navigate = useNavigate();
  const [signOut] = useSignOut(auth);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleSignOut = async () => {
    closeMenu();
    const success = await signOut();
    if (success) {
      navigate("/login");
    }
  };
  const handleMyProfile = () => {
    closeMenu();
    console.log("");
  };
  const handleEditProfile = () => {
    closeMenu();
    console.log("");
  };

  // profile menu component
  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
      handler: handleMyProfile,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
      handler: handleEditProfile,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      handler: handleSignOut,
    },
  ];

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center rounded-full p-0 gap-4"
        >
          <Avatar
            variant="circular"
            size="lg"
            alt={userName}
            withBorder={true}
            color="green"
            className=" p-0.5"
            src={userPhotoURL}
          />
          <h2>{userName}</h2>
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, handler }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => handler()}
              className={`flex items-center gap-2 rounded ${
                isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

AvatarWithUserDropdown.propTypes = {
  userPhotoURL: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
