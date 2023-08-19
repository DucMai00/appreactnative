import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const animationSlideInLeft = keyframes`
    0% {
        transform: translateX(-200px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
  `;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 0px 0px var(--br-xl) var(--br-xl);
  background-color: var(--color-orchid);
  width: 375px;
  height: 104px;
`;
const Setting1 = styled.div`
  position: absolute;
  top: 55px;
  left: 9px;
  display: inline-block;
  width: 279px;
  height: 49px;
`;
const Frame = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 104px;
  overflow: hidden;
`;
const FrameWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 104px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-orchid);
  width: 375px;
  height: 50px;
`;
const HomeIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 28px;
  height: 28px;
`;
const SearchIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 79px;
  width: 28px;
  height: 28px;
`;
const AccountCircleIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 241px;
  width: 28px;
  height: 28px;
`;
const NotificationsIcon = styled.img`
  position: absolute;
  height: 83.33%;
  width: 66.67%;
  top: 8.33%;
  right: 16.67%;
  bottom: 8.33%;
  left: 16.67%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Notifications = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 164px;
  width: 28px;
  height: 28px;
`;
const Frame2 = styled.div`
  position: absolute;
  top: 14px;
  left: 67px;
  width: 269px;
  height: 28px;
  overflow: hidden;
`;
const Frame1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 50px;
  overflow: hidden;
`;
const FrameContainer = styled.div`
  position: absolute;
  top: 762px;
  left: 0px;
  width: 375px;
  height: 50px;
`;
const SettingsIcon = styled.img`
  position: absolute;
  top: 94px;
  left: 9px;
  width: 38px;
  height: 38px;
`;
const HelpIcon = styled.img`
  position: absolute;
  top: 171px;
  left: 9px;
  width: 38px;
  height: 38px;
`;
const LogoutIcon = styled.img`
  position: absolute;
  top: 248px;
  left: 9px;
  width: 38px;
  height: 38px;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 5px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 375px;
  height: 66px;
`;
const LogoutIcon1 = styled.img`
  position: absolute;
  top: 240px;
  left: 8px;
  width: 38px;
  height: 38px;
`;
const SettingsIcon1 = styled.img`
  position: absolute;
  top: 96px;
  left: 8px;
  width: 38px;
  height: 38px;
`;
const ContactSupportIcon = styled.img`
  position: absolute;
  top: 168px;
  left: 8px;
  width: 38px;
  height: 38px;
`;
const AccountCircleIcon1 = styled.img`
  position: absolute;
  top: 19px;
  left: 8px;
  width: 38px;
  height: 38px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 230px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 375px;
  height: 66px;
`;
const LogOut1 = styled.div`
  position: absolute;
  top: 243px;
  left: 58px;
  display: inline-block;
  width: 259px;
  height: 31px;
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 153px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 375px;
  height: 66px;
`;
const FrameChild2 = styled.div`
  position: absolute;
  top: 77px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 375px;
  height: 66px;
`;
const Setting2 = styled.div`
  position: absolute;
  top: 95px;
  left: 67px;
  display: inline-block;
  width: 259px;
  height: 31px;
`;
const MyAccount = styled.div`
  position: absolute;
  top: 23px;
  left: 67px;
  display: inline-block;
  width: 259px;
  height: 31px;
`;
const Help1 = styled.div`
  position: absolute;
  top: 171px;
  left: 67px;
  display: inline-block;
  width: 259px;
  height: 31px;
`;
const SettingsIcon2 = styled.img`
  position: absolute;
  top: 95px;
  left: 9px;
  width: 35px;
  height: 35px;
`;
const HelpIcon1 = styled.img`
  position: absolute;
  top: 169px;
  left: 9px;
  width: 35px;
  height: 35px;
`;
const LogoutIcon2 = styled.img`
  position: absolute;
  top: 247px;
  left: 15px;
  width: 35px;
  height: 35px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 296px;
`;
const SettingsParent = styled.div`
  position: absolute;
  top: 134px;
  left: 0px;
  width: 375px;
  height: 296px;
  font-size: var(--font-size-6xl);
`;
const SettingRoot = styled.div`
  position: relative;
  background-color: var(--color-lavenderblush);
  width: 100%;
  height: 812px;
  overflow: hidden;
  opacity: 0;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-black);
  font-family: var(--font-lucida-console);
  &.animate {
    animation: 1s ease 0s 1 normal forwards ${animationSlideInLeft};
  }
`;
const Setting = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <SettingRoot data-animate-on-scroll>
      <FrameWrapper>
        <Frame>
          <FrameChild />
          <Setting1>setting</Setting1>
        </Frame>
      </FrameWrapper>
      <FrameContainer>
        <Frame1>
          <FrameItem />
          <Frame2>
            <HomeIcon alt="" src="/home.svg" />
            <SearchIcon alt="" src="/search.svg" />
            <AccountCircleIcon alt="" src="/account-circle.svg" />
            <Notifications>
              <NotificationsIcon alt="" src="/notifications.svg" />
            </Notifications>
          </Frame2>
        </Frame1>
      </FrameContainer>
      <SettingsParent>
        <SettingsIcon alt="" src="/settings.svg" />
        <HelpIcon alt="" src="/help.svg" />
        <LogoutIcon alt="" src="/logout.svg" />
        <RectangleParent>
          <FrameInner />
          <LogoutIcon1 alt="" src="/logout.svg" />
          <SettingsIcon1 alt="" src="/settings.svg" />
          <ContactSupportIcon alt="" src="/contact-support.svg" />
          <AccountCircleIcon1 alt="" src="/account-circle1.svg" />
          <RectangleDiv />
          <LogOut1>Log out</LogOut1>
          <FrameChild1 />
          <FrameChild2 />
          <Setting2>Setting</Setting2>
          <MyAccount>My account</MyAccount>
          <Help1>{`Help `}</Help1>
          <SettingsIcon2 alt="" src="/settings1.svg" />
          <HelpIcon1 alt="" src="/help1.svg" />
          <LogoutIcon2 alt="" src="/logout1.svg" />
        </RectangleParent>
      </SettingsParent>
    </SettingRoot>
  );
};

export default Setting;
