import humburgurMenu from "../../assets/header_humburgurMenu.svg";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/header_search.svg";
import favoriteIcon from "../../assets/header_favorite.svg";
import cartIcon from "../../assets/header_cart.svg";

import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="header__left">
        <img src={humburgurMenu} alt="ハンバーガーメニュー" width={20} />
        <a href="">
          <img src={logo} alt="川上楽器ロゴ" width={200} />
        </a>
      </div>
      <div className="header__right">
        <div className="header__right__search">
          <span className="header__right__search__icon">
            <img src={searchIcon} alt="検索アイコン" />
          </span>
          <input type="text" placeholder="すべての商品を探す" />
        </div>
        <a href="">
          <img src={favoriteIcon} alt="お気に入り画面遷移ボタン" />
        </a>
        <a href="">
          <img src={cartIcon} alt="カート内画面遷移ボタン" />
        </a>
      </div>
    </header>
  );
};

export default Header;
