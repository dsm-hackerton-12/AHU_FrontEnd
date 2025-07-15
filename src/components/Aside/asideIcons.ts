// Aside에서 사용하는 아이콘들을 모아둔 파일

// 기본 아이콘
import HomeIcon from "../../assets/SVG/MainImg.svg";
import SearchIcon from "../../assets/SVG/SearchImg.svg";
import VoteIcon from "../../assets/SVG/VoteImg.svg";
import WriteIcon from "../../assets/SVG/AddBoardImg.svg";
import MyIcon from "../../assets/SVG/MyImg.svg";

// 클릭된 아이콘
import ClickedHomeIcon from "../../assets/SVG/ClickedMain.svg";
import ClickedSearchIcon from "../../assets/SVG/ClickedSearch.svg";
import ClickedVoteIcon from "../../assets/SVG/ClickedVote.svg";
import ClickedWriteIcon from "../../assets/SVG/ClickedAddBoard.svg";
import ClickedMyIcon from "../../assets/SVG/ClickedMy.svg";

export const asideIcons = [
  { id: 1, key: "home", label: "홈", icon: HomeIcon, clickedIcon: ClickedHomeIcon },
  { id: 2, key: "search", label: "검색", icon: SearchIcon, clickedIcon: ClickedSearchIcon },
  { id: 3, key: "vote", label: "투표율", icon: VoteIcon, clickedIcon: ClickedVoteIcon },
  { id: 4, key: "write", label: "글 등록", icon: WriteIcon, clickedIcon: ClickedWriteIcon },
  { id: 5, key: "my", label: "마이페이지", icon: MyIcon, clickedIcon: ClickedMyIcon },
]; 