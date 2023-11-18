import React from "react";
import HomeImg from "@/assets/img/home/ww.png";
import Avatar from "@/assets/img/home/avatar.png";
import "style/home/home.scss";
function home() {
  return (
    // 主体
    <div className="contaier">
      {/* 标题栏 */}
      <div className="header_inner">
        {/* 头像框 */}
        <div className="avatar">
          <img src={Avatar} alt="" />
        </div>
        {/*  */}
        <div>
          <span>
            <i className="iconfont icon-home"></i>首页
          </span>
          <span>
            <i className="iconfont icon-dingdan"></i>归档
          </span>
          <span>
            <i className="iconfont icon-qingdan"></i>清单
          </span>
          <span>
            <i className="iconfont icon-xinqing-xian"></i>心情
          </span>
          <span>
            <i className="iconfont icon-zhaoxiangji"></i>画廊
          </span>
          <span>
            <i className="iconfont icon-liuyanban-xian"></i>留言板
          </span>
          <span>
            <i className="iconfont icon-lianjie"></i>友人帐
          </span>
          <span>
            <i className="iconfont icon-xihuan"></i>赞赏
          </span>
          <span>
            <i className="iconfont icon-Tree"></i>关于
          </span>
          <span>
            <i className="iconfont icon-home"></i>实验室
          </span>
        </div>
        {/* 搜索 */}
        <div>
          <span>
            <i className="iconfont icon-search"></i>
          </span>
          <span>
            <i className="iconfont icon-user"></i>
          </span>
        </div>
      </div>
      <div className="backgroundImg">
        <img src={HomeImg} alt="" />
      </div>
    </div>
  );
}

export default home;
