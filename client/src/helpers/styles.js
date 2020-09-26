import { makeStyles } from "@material-ui/core/styles";
import IconSheet from "../images/icon-sheet.png";

export const useHeaderStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  toolBar: {
    display: "flex",
    alignItems: "center",
    height: "3.5rem",
    justifyContent: "space-between",
  },
  logo: {
    cursor: "pointer",
  },
  search: {
    height: 28,
    fontSize: "14px !important",
    background: "rgba(var(--b3f,250,250,250),1)",
    border: "solid 1px rgba(var(--b6a,219,219,219),1)",
    borderRadius: 3,
    color: "rgba(var(--i1d,38,38,38),1)",
    outline: 0,
    padding: "3px 3px 3px 26px",
    zIndex: 2,
    paddingLeft: "40%",
    width: "110%",
  },
  searchIcon: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-167px -306px",
    height: 10,
    width: 10,
    left: "30%",
    position: "absolute",
    top: 9,
    zIndex: 2,
  },
  clearIcon: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-250px -98px",
    height: 20,
    width: 20,
    cursor: "pointer",
  },
  smallImg: {
    borderRadius: "50%",
    width: "27px",
    height: "27px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
  },
  toolTipSearch: {
    width: 240,
    backgroundColor: "#fafafa",
  },
  notificationTooltip: {
    color: "#000",
    minWidth: 350,
  },
  notificationTooltipArrow: {
    "&::before": {
      background: "#fff",
    },
  },
  toolTipArrow: {
    "&::before": {
      background: "#fafafa",
    },
  },
  searchToolTipItems: {
    padding: "10px",
  },
  notificationIconContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationIcon: {
    borderRadius: "50%",
    width: "5px",
    height: "5px",
    background: "red",
    display: "block",
    margin: "4px 9px 0 0",
  },
  notificationItemsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationSubItemsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "7px",
  },
  notificationSubItemsText: {
    fontSize: "14px",
  },
  LikedNotificationImg: {
    borderRadius: "5px",
    width: "32px",
    height: "32px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  notificationToolTipItems: {
    padding: "10px 20px 10px 10px",
  },
}));

export const useNotFoundpageStyles = makeStyles((theme) => ({
  body: {
    marginTop: "6rem",
    textAlign: "center",
  },
  lowerText: {
    fontSize: "1.6rem !important",
    marginBottom: "1.5rem !important",
  },
  message: {
    fontSize: "1.1rem !important",
  },
  homeLink: {
    cursor: "pointer",
    fontSize: "16px",
    textDecoration: "none",
    color: "#3897f0",
  },
}));

export const useSignupPageStyles = makeStyles((theme) => ({
  box: {
    marginTop: "15px",
    textAlign: "center",
  },
  card: {
    padding: "30px",
  },
  icon: {
    height: "20px",
  },
  heading: {
    color: "#777",
    lineHeight: 1,
    fontSize: "17px",
    margin: "15px 0",
  },
  cardHeader: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-98px 0",
    height: 51,
    width: 175,
    margin: "22px auto 12px",
  },
  textField: {
    ...theme.mixins.customInput,
  },
  submitButton: {
    margin: "10px 0",
  },
  highLightText: {
    fontWeight: "bold",
    color: "#999",
  },
  smallText: {
    color: "#777",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gutter: {
    margin: "10px 0",
  },
  navigationLink: {
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

export const useORComponentStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  },
  text: { color: "#999", fontSize: "14px" },
  line: {
    display: "block",
    width: "40%",
    height: "1px",
    background: "#ddd",
  },
}));

export const useFeedPageStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5.5rem",
  },
  mainFollowingContainer: {
    display: "flex",
    alignItems: "center",
  },
  card: {
    padding: "15px 20px",
  },
  followings: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:not(:first-child)": {
      marginLeft: theme.spacing(2.3),
    },
  },
  followingImg: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  followingText: {
    lineHeight: 1.5,
    fontSize: "12px",
    color: "#333",
  },
  feedCardHeadContainer: {
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  feedCardHeadImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginRight: "15px",
  },
  feedCardHeadSubContainer: {
    display: "flex",
    alignItems: "center",
  },
  feedCardHeadText: {
    fontSize: "14px",
    color: "#333",
  },
  feedCardFooterIconsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 15px",
  },
  feedCardFooterLkes: {
    fontSize: "14px",
    padding: "0 15px",
    fontWeight: "bold",
  },
  feedCardEllipsis: {
    padding: "2px 0 2px 15px",
    fontSize: "14px",
  },
  feedCardMoreButton: {
    background: "transparent",
    margin: "0",
    color: "#999",
  },
  feedCardFooterDate: {
    padding: "2px 0 2px 15px",
    fontSize: "11px",
  },
  feedCardBottom: {
    marginBottom: "45px",
  },
  topMargin: {
    marginTop: "1.5rem",
  },
  asideSuggestionsText: {
    fontSize: "16px",
    color: "#999",
  },
  asideSuggestionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    marginTop: "20px",
  },
  asideSuggestionSpan: {
    color: "#000",
    fontSize: "14px",
  },
  asideFollowersContainer: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    marginTop: "10px",
  },
  asideFollowersCaption: { alignSelf: "center", fontWeight: "bold !important" },
  asideFooterText: {
    color: "#ccc",
    fontSize: "12px",
    fontWeight: 400,
    marginBottom: "10px",
  },
  asideFooterCopyright: { color: "#ddd" },
  suggestionsImg: {
    border: "1px solid #ddd",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  suggestionsCard: {
    padding: "20px 28px",
    margin: "20px 15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const useUserProfilerCompStyles = makeStyles((theme) => ({
  image: {
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  smallImg: {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  subContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "10px",
  },
  headingText: {
    lineHeight: 1.3,
    fontSize: "16px",
    fontWeight: "bold",
    color: "#666",
  },
  normalText: { color: "#888", lineHeight: 1.3, fontSize: "13px" },
}));

export const useMoreDialog = makeStyles((theme) => ({
  padding: {
    padding: "10px 20px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "250px",
  },
}));

export const useExplorePageStyles = makeStyles((theme) => ({
  topMargin: {
    marginTop: "4.5rem",
  },
  topHeight: {
    height: "300px",
    marginBottom: "20px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "200px  !important",
      marginBottom: "20px  !important",
    },
    "&:hover": {
      "& $overlay": {
        display: "block",
      },
    },
  },
  topRightHeight: {
    height: "620px",
    marginBottom: "20px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "420px !important",
      marginBottom: "20px !important",
    },
    "&:hover": {
      "& $overlay": {
        display: "block",
      },
    },
  },
  leftContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  leftSmImg: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    cursor: "pointer",
  },
  RightHeroImg: {
    height: "100%",
    width: "100%",
    cursor: "pointer",
  },
  overlay: {
    display: "none",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    cursor: "pointer",
    backgroundColor: "rgba(9,9,9,.3) !important",
  },
  exploreOverlayContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "44%",
  },
  overlayText: {
    color: "#fff",
    marginLeft: "10px",
    fontSize: "18px",
  },
  overlayTextContainer: {
    display: "flex",
    alignItems: "center",
  },
  iconMarginRight: {
    marginRight: "20px",
  },
  iconMarginLeft: {
    marginLeft: "20px",
  },
}));

export const useSinglePostStyles = makeStyles((theme) => ({
  topMargin: {
    marginTop: "5rem",
  },
  topCard: {
    marginBottom: "40px",
  },
  fullWidth: {
    width: "100%",
    height: "100%",
  },
  fixedHeight: {
    height: "600px",
  },
  postCardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  suggestionsText: {
    color: "#999",
    fontWeight: "400",
    fontSize: "18px",
    margin: "40px 0px",
  },
  suggestionsBold: {
    color: "#333",
    fontWeight: "bold",
    fontSize: "18px",
  },
}));

export const useFeedCardSkeletonStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "40px",
  },
  headContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
  },
  text1: {
    marginLeft: "20px",
  },
}));

export const usePostCardSkeletonStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "40px",
  },
  topMargin: {
    marginTop: "4.5rem",
  },
  headContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
  },
  text1: {
    marginLeft: "20px",
  },
}));

export const useProfilePageStyles = makeStyles((theme) => ({
  topMargin: {
    marginTop: "4rem",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "1px solid #ddd",
  },
  topContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "6rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "4rem",
    [theme.breakpoints.down("sm")]: { marginTop: "20px", marginLeft: "0px" },
  },
  button: {
    backgroundColor: "#eee",
    border: "1px solid #ccc",
    margin: "0 20px",

    "&:hover": {
      backgroundColor: "#eee",
      boxShadow: "unset",
    },
  },
  topText: {
    fontSize: "35px",
    color: "#999",
    fontWeight: 300,
    lineHeight: 1,
  },
  line1Container: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  line2Container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  counts: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#000",
    marginRight: "8px",
  },
  tabsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tabsIcon: {
    width: "10px",
    height: "10px",
    marginRight: "3px",
  },
  tabsText: {
    fontSize: "14px",
    color: "#444",
  },
  sideMargin: {
    margin: "auto 30px",
  },
  tabsIndicator: {
    backgroundColor: "#222",
    top: "0px",
  },
  dividerMargin: {
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  buttonLink: { textDecoration: "none" },
  savedContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  savedImageContainer: {
    width: "80px",
    height: "80px",
    border: "1px solid #333",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  savedImage: {
    width: "50%",
    height: "50%",
  },
  savedTextH6: {
    fontSize: "25px",
    fontWeight: "300",
    color: "#555",
    margin: "20px 0 5px 0",
  },
  savedText: {
    maxWidth: "400px",
    wordWrap: "break-word",
    lineHeight: 1.3,
    fontSize: "16px",
  },
}));

export const useEditPageStyles = makeStyles((theme) => ({
  topMargin: {
    marginTop: "5rem",
  },
  hoverStyle: {
    padding: "10px 25px",
    borderLeft: "2px solid #fff",
    "&:hover": {
      backgroundColor: "#eee",
      borderLeft: "2px solid #ddd",
    },
    [theme.breakpoints.down("sm")]: {
      borderRight: "2px solid #fff",
      borderLeft: "none",
      "&:hover": {
        backgroundColor: "#eee",
        borderLeft: "none",
        borderRight: "2px solid #ddd",
      },
    },
  },
  active: {
    borderLeft: "2px solid #111",
    "&:hover": {
      backgroundColor: "#fff",
      borderLeft: "2px solid #111",
    },
    [theme.breakpoints.down("sm")]: {
      borderRight: "2px solid #111",
      borderLeft: "none",
      "&:hover": {
        backgroundColor: "#fff",
        borderLeft: "none",
      },
    },
  },
  leftSide: {
    flexGrow: 1,
  },
  rightSide: {
    borderLeft: "1px solid #ddd",
  },
  link: {
    textDecoration: "none",
    color: "#555",
  },
  menuIconContainer: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuIcon: {
    width: "60%",
    cursor: "pointer",
  },
  input: {
    ...theme.mixins.customInput,
    marginBottom: "12px",
  },
  inputWhite: {
    ...theme.mixins.customInput,
    backgroundColor: "#fff !important",
    marginBottom: "12px",
  },
  resetContainer: {
    padding: "40px",
  },
  resetSubContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
  },
  resetImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    marginRight: "20px",
  },
  label: {
    fontSize: "15px",
    fontFamily: "inherit",
    lineHeight: 1.5,
  },
  Button: {
    margin: "20px 0",
  },
  Link: {
    textDecoration: "none",
  },
  changeProfileImg: {
    padding: "0",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
}));
