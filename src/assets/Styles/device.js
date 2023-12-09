const size = {
  mobileN: "320px",
  mobileS: "360px",
  mobileA: "375px",
  mobileM: "393px",
  mobileL: "450px",
  tabletS: "768px",
  tabletM: "800px",
  tabletL: "834px",
  laptop: "1024px",
  laptopM: "1280px",
  laptopL: "1440px",
};

export const device = {
  mobileN: `(max-width: ${size.mobileN})`,
  mobileS: `(max-width: ${size.mobileS})`,
  mobileA: `(max-width: ${size.mobileA})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tabletM: `(max-width: ${size.tabletM})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
};

export default device;
