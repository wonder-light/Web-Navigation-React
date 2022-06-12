import React from 'react';
import axios from "./axios";

let mapObj = [
    {
        "key": "🤭 影视资源",
        "value": [
            {
                "title": "BTNULL",
                "url": "https://www.btnull.re/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYnRudWxsLnJl"
            },
            {
                "title": "天空影视",
                "url": "https://www.tkys.tv/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cudGt5cy50dg=="
            },
            {
                "title": "嗯哩嗯哩",
                "url": "https://enlienli.com/",
                "tooltip": "嗯哩嗯哩[EnLiEnLi.com]一个神奇的追剧小站,在这可以看到所有的番剧，动漫，电影，电视剧！",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9lbmxpZW5saS5jb20="
            },
            {
                "title": "Auete影视 ",
                "url": "https://auete.com/",
                "tooltip": "Auete影视提供蓝光超清热门电影,热门美剧热门韩剧最近热播电影电视剧推荐,精品动漫,好看的综艺节目在线观看百度云免费下载!",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9hdWV0ZS5jb20="
            },
            {
                "title": "真不卡影院",
                "url": "https://www.zhenbuka3.com/",
                "tooltip": "真不卡影院(www.zhenbuka.vip)搜集最新电影、高清电影、超清蓝光电影等视频免费分享给大家在线观看，真不卡影院是一个真正我不卡的电影网站。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuemhlbmJ1a2EzLmNvbQ=="
            },
            {
                "title": "饭团影院",
                "url": "https://fantuan.tv/",
                "tooltip": "饭团影院(fantuan.tv),又名饭团TV或饭团电影网,提供免费观看最新电影热播电视剧,综艺,动漫,高清无广告蓝光1080P画质在线播放,流畅秒播不卡顿!",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9mYW50dWFuLnR2"
            },
            {
                "title": "ZzzFun动漫视频网",
                "url": "http://www.zzzfun.com/",
                "tooltip": "提供最新最快的动漫新番资讯和在线播放，开心看动漫，无圣骑、无暗牧",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL3d3dy56enpmdW4uY29t"
            },
            {
                "title": "No视频",
                "url": "https://www.novipnoad.com/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cubm92aXBub2FkLmNvbQ=="
            },
            {
                "title": "极品影视",
                "url": "https://www.jpysvip.net/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuanB5c3ZpcC5uZXQ="
            },
            {
                "title": "人人影视分享下载站",
                "url": "https://yyets.dmesg.app/home",
                "tooltip": "开源，免费，人人备胎^_^ Web Design by Zuiyu",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly95eWV0cy5kbWVzZy5hcHA="
            },
            {
                "title": "奇粹影视",
                "url": "http://www.ikuwoo.cn/",
                "tooltip": "奇粹影视是拥有海量、优质、高清的网络视频的大型免费在线视频网站，专业的网络视频播放平台。内容丰富多元，涵盖电影、电视剧、动漫、综艺、韩剧、美剧、日剧、泰剧、VIP影视视频 在线观看。影视大全免费在线高清观看视频播放清晰流畅，操作界面简单友好。在线观看",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL3d3dy5pa3V3b28uY24="
            },
            {
                "title": "低端影视",
                "url": "https://ddrk.me/",
                "tooltip": "超清在线视频",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9kZHJrLm1l"
            },
            {
                "title": "LIBVIO",
                "url": "https://www.libvio.com/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cubGlidmlvLmNvbQ=="
            },
            {
                "title": "鸭奈飞电影",
                "url": "https://yanetflix.com/",
                "tooltip": "鸭奈飞影视[YaNetflix.com][Netflix.Mom]是专注于为国内用户提供免费的奈飞影剧，在这里您无需翻墙付费即可享受奈飞电影带来的极致视听体验",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly95YW5ldGZsaXguY29t"
            },
            {
                "title": "素白白影视",
                "url": "https://www.subaibai.com/",
                "tooltip": "最新电影,高清电影,免费电影,在线电影,最新电视剧,电影下载,免费电影下载",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuc3ViYWliYWkuY29t"
            },
            {
                "title": "MVCAT",
                "url": "https://www.mvcat.com/",
                "tooltip": "人生如戏，戏如人生，命由己造，相由心生。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cubXZjYXQuY29t"
            },
            {
                "title": "橘子盘搜",
                "url": "https://www.nmme.cc/",
                "tooltip": "好用的影视资源搜索引擎",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cubm1tZS5jYw=="
            },
            {
                "title": "555电影",
                "url": "https://555dy1.com/",
                "tooltip": "555电影 (www.555dy.com)-看电影，拯救世界！免费VIP资源在线观看，奈飞Netflix免费看，每天更新热火欧美日韩剧，最新韩国电影，最专业的的影视服务，免费速度快，及时收录最新、最热、最全的电影大片,高清正版免费看。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly81NTVkeTEuY29t"
            },
            {
                "title": "星空影视",
                "url": "https://xkys.tv/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly94a3lzLnR2"
            },
            {
                "title": "大师兄影视",
                "url": "https://dsxys.com/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9kc3h5cy5jb20="
            },
            {
                "title": "追剧达人",
                "url": "https://vipmv.co/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly92aXBtdi5jbw=="
            },
            {
                "title": "YYDSfans",
                "url": "https://yyds.fans/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly95eWRzLmZhbnM="
            },
            {
                "title": "动漫星球",
                "url": "https://www.dmxq.fun/",
                "tooltip": "动漫星球（www.dmxq.fun）无广告珍藏番剧在线观看，海外动漫免费看，高清无广告，一个资源丰富的番剧动漫视频网。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZG14cS5mdW4="
            },
            {
                "title": "樱花动漫",
                "url": "https://yhdm.nl/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly95aGRtLm5s"
            },
            {
                "title": "怡萱动漫",
                "url": "http://www.yxdm.li/",
                "tooltip": "致力于为所有动漫迷们免费提供最新最快的高清动画下载及在线观看资源，它是专业日本动漫下载视听领域的综合网站。",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL3d3dy55eGRtLmxp"
            },
            {
                "title": "ANG动漫",
                "url": "http://angdm.com/",
                "tooltip": "ANG动漫热衷于分享最新最好看的动漫、动画资源,并提供免费在线播放",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL2FuZ2RtLmNvbQ=="
            }
        ]
    },
    {
        "key": "🎵 音乐资源",
        "value": [
            {
                "title": "天天静听",
                "url": "http://47.112.23.238",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovLzQ3LjExMi4yMy4yMzg="
            },
            {
                "title": "Tonzhon Lite",
                "url": "http://lite.tonzhon.com/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL2xpdGUudG9uemhvbi5jb20="
            },
            {
                "title": "在线音乐播放器",
                "url": "https://song.postudy.cn/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9zb25nLnBvc3R1ZHkuY24="
            },
            {
                "title": "音乐解锁",
                "url": "http://unlock.musictool.top/",
                "tooltip": "音乐解锁 - 在任何设备上解锁已购的加密音乐！",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL3VubG9jay5tdXNpY3Rvb2wudG9w"
            },
            {
                "title": "NCM格式转MP3",
                "url": "https://ncm.worthsee.com/",
                "tooltip": "网易云音乐会员格式转MP3",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9uY20ud29ydGhzZWUuY29t"
            }
        ]
    },
    {
        "key": "🤣 影视APP",
        "value": [
            {
                "title": "V影视APP",
                "url": "http://www.vyshi.app/",
                "tooltip": "V影视网址发布页",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL3d3dy52eXNoaS5hcHA="
            }
        ]
    },
    {
        "key": "🤩 优质导航",
        "value": [
            {
                "title": "龙喵网",
                "url": "https://ailongmiao.com/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9haWxvbmdtaWFvLmNvbQ=="
            },
            {
                "title": "合集网",
                "url": "https://233heji.com/",
                "tooltip": "信息资源大全",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly8yMzNoZWppLmNvbQ=="
            }
        ]
    },
    {
        "key": "😁 图片素材",
        "value": [
            {
                "title": "壁纸湖",
                "url": "http://bizihu.com/",
                "tooltip": "壁纸湖，为壁纸控们挖掘宝藏手机壁纸。壁纸采集，优质壁纸获取，时刻follow最新的手机壁纸。",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL2JpemlodS5jb20="
            },
            {
                "title": "美图集",
                "url": "https://photo.ihansen.org/",
                "tooltip": "美图集——海量高清图片和桌面壁纸！内容涵盖风景图片、动物图片、唯美图片、鲜花图片、家居图片、设计素材、电脑壁纸、动漫壁纸、电影壁纸、明星壁纸、美女壁纸、唯美壁纸...",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9waG90by5paGFuc2VuLm9yZw=="
            },
            {
                "title": "搜图神器",
                "url": "https://www.logosc.cn/so/",
                "tooltip": "一键搜索多家国内外知名高清免版权图库。快速找到你需要的图片素材就用搜图神器！搜图神器聚合搜索多家国内外知名免版权图库使得您再也不用担心商用图片的版权问题。立刻 Ctl+D 收藏本站吧！",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cubG9nb3NjLmNu"
            },
            {
                "title": "乌云壁纸",
                "url": "http://www.obzhi.com/",
                "tooltip": "乌云高清壁纸站,每日精选超清美图,分享来自世界各地高质量的美丽另类简约桌面电脑壁纸。你也一起来发表的自己喜爱的壁纸吧？",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL3d3dy5vYnpoaS5jb20="
            },
            {
                "title": "极简壁纸",
                "url": "https://bz.zzzmh.cn/index",
                "tooltip": "极简壁纸,4K高清电脑桌面壁纸图库,海量4K电脑壁纸,壁纸网站,美女,动漫,风景,4k高清,4k超清,电脑壁纸桌面",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9iei56enptaC5jbg=="
            },
            {
                "title": "Wallhaven",
                "url": "https://www.wallhaven.cc/",
                "tooltip": "Your source for the best high quality wallpapers on the Net!",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cud2FsbGhhdmVuLmNj"
            },
            {
                "title": "Wallhere",
                "url": "https://wallhere.com/",
                "tooltip": "Over 1503795 free wallpaper. One of the best high quality wallpapers site!",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93YWxsaGVyZS5jb20="
            },
            {
                "title": "Wallpaper Abyss",
                "url": "https://wall.alphacoders.com/",
                "tooltip": "Over 1503795 free wallpaper. One of the best high quality wallpapers site!",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93YWxsLmFscGhhY29kZXJzLmNvbQ=="
            },
            {
                "title": "必应每日壁纸",
                "url": "https://www.bingimg.cn/list1",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYmluZ2ltZy5jbg=="
            },
            {
                "title": "Wallroom.io",
                "url": "https://wallroom.io/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93YWxscm9vbS5pbw=="
            },
            {
                "title": "Wallpaper Cave",
                "url": "https://www.wallpapercave.com/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cud2FsbHBhcGVyY2F2ZS5jb20="
            },
            {
                "title": "unsplash",
                "url": "https://unsplash.com/t/wallpapers",
                "tooltip": "See the best 9524 free high-resolution photos of Wallpapers. These HD images are free to use for commercial projects.",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly91bnNwbGFzaC5jb20="
            },
            {
                "title": "Piqsels",
                "url": "https://www.piqsels.com/zh",
                "tooltip": "Piqsel所有图片都基于CC0公共领域协议，无需归属，高分辨率，个人和商业免费使用",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cucGlxc2Vscy5jb20="
            },
            {
                "title": "觅元素",
                "url": "https://www.51yuansu.com/",
                "tooltip": "觅元素,设计元素的免费下载网站,提供位图、透明背景素材、高清png、图片素材、漂浮元素、装饰元素、标签元素、字体元素、图标元素等免抠设计元素的免费下载.",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuNTF5dWFuc3UuY29t"
            },
            {
                "title": "彼岸壁纸",
                "url": "http://netbian.com/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL25ldGJpYW4uY29t"
            },
            {
                "title": "最新360壁纸",
                "url": "https://ss.netnr.com/wallpaper",
                "tooltip": "Script Services 源自 360 壁纸",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9zcy5uZXRuci5jb20="
            }
        ]
    },
    {
        "key": "😎 星辰大海",
        "value": [
            {
                "title": "SS免费账号",
                "url": "https://github.com/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t"
            }
        ]
    },
    {
        "key": "😨 字体资源",
        "value": [
            {
                "title": "自由字体",
                "url": "https://www.ziyouziti.com/",
                "tooltip": "自由字体是国内权威的免费字体网站，汇聚全网免费字体，提供可商用免费字体下载。所有免费字体的授权均经核对确认，个人及商用均可免费自由使用，有效规避字体版权风险。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cueml5b3V6aXRpLmNvbQ=="
            },
            {
                "title": "字由字体合集",
                "url": "https://www.hellofont.cn/font-albums",
                "tooltip": "字由是为设计师量身定做的一款字体下载管理工具。这里收集了国内外上千款精选字体，不仅让你轻松、自由和高效的使用字体，还为你展示了每款字体的详细信息和精选的字体文章。字由将成为你设计中的好帮手，让你领略字体在设计中的更多精彩。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuaGVsbG9mb250LmNu"
            },
            {
                "title": "字魂网",
                "url": "https://www.izihun.com/",
                "tooltip": "字魂网(izihun.com)是一家提供商用字体下载授权,字体定制,免费字体下载,字体授权,中文字体设计,字体大全以及在线字体转换器的字体公司,致力于让所有人用得起正版字体.",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuaXppaHVuLmNvbQ=="
            }
        ]
    },
    {
        "key": "👋 在线设计",
        "value": [
            {
                "title": "创客贴",
                "url": "https://www.chuangkit.com/",
                "tooltip": "无需PS，会打字就能用的图片、视频编辑器。8000万图片素材在线编辑，换图改字生成精美设计。自动抠图，高清背景，设计不求人，商用有版权",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuY2h1YW5na2l0LmNvbQ=="
            },
            {
                "title": "凡科快图",
                "url": "https://kt.fkw.com/",
                "tooltip": "凡科快图，免费在线图片编辑软件，免下载，丰富版权资源，海量图片设计模板，不用ps，1分钟在线制作图片，超简单3步操作，完成在线作图，支持抠图、压缩、分割、加水印、旋转等图片编辑。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9rdC5ma3cuY29t"
            },
            {
                "title": "图怪兽",
                "url": "https://818ps.com/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly84MThwcy5jb20="
            },
            {
                "title": "佐糖抠图神器",
                "url": "https://www.picwish.cn/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cucGljd2lzaC5jbg=="
            }
        ]
    },
    {
        "key": "🤏 工具合集",
        "value": [
            {
                "title": "文叔叔",
                "url": "https://www.wenshushu.cn/",
                "tooltip": "文叔叔，免费空间 40GB，一款永不限速的云存储产品。传文件、收文件、网盘，还支持历史记录等高级功能。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cud2Vuc2h1c2h1LmNu"
            },
            {
                "title": "奎箱小工具聚集地",
                "url": "http://tools.kui.li/",
                "tooltip": "一个拥有有趣网页、实用工具、网页特效、网页游戏等工具的轻量工具箱",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL3Rvb2xzLmt1aS5saQ=="
            },
            {
                "title": " 脚本服务",
                "url": "https://ss.netnr.com/",
                "tooltip": "Script Services ",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9zcy5uZXRuci5jb20="
            }
        ]
    },
    {
        "key": "😇 设计素材",
        "value": [
            {
                "title": "优品PPT",
                "url": "https://www.ypppt.com/",
                "tooltip": "优品PPT模板网是一家专注于分享高质量的免费PPT模板下载网站，包括图表、背景图片、素材、教程等各类PPT模板相关资源。致力于打造国内最大最权威的PPT下载一站式服务平台。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cueXBwcHQuY29t"
            },
            {
                "title": "笔图网",
                "url": "https://bitu360.com/",
                "tooltip": "笔图网提供优质原创设计素材,高质量的PPT模板、高清图库、平面设计、海报、展板等各大类设计行业素材,下载优质高清素材就到笔图网。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9iaXR1MzYwLmNvbQ=="
            }
        ]
    },
    {
        "key": "😘 软件资源",
        "value": [
            {
                "title": "QQ前线乐园",
                "url": "https://www.yijingying.com/",
                "tooltip": "一个有品质的软件分享下载站，主要搬运网上热门的电脑软件和安卓应用、以及提供Healer个人原创的软件等。每个软件经过实测后才分享，网站宗旨是：专注于分享，分享好资源。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cueWlqaW5neWluZy5jb20="
            },
            {
                "title": "小众软件",
                "url": "https://appinn.com/",
                "tooltip": "小众软件是一个分享、体验、评测电脑软件、手机应用、互联网产品的网站",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9hcHBpbm4uY29t"
            },
            {
                "title": "翻应用",
                "url": "https://www.iapps.me/",
                "tooltip": "专注发现优质安卓应用",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuaWFwcHMubWU="
            },
            {
                "title": "异星软件空间",
                "url": "https://www.yxssp.com/",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cueXhzc3AuY29t"
            },
            {
                "title": "夜雨聆风",
                "url": "https://www.yeyulingfeng.com/",
                "tooltip": "夜雨聆风是一个不以营利为目的de资源博客,提供各种网络资源,绿色软件,技术教程等,这里只分享精品,致力于打造一个高质量的免费资源分享博客!",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cueWV5dWxpbmdmZW5nLmNvbQ=="
            },
            {
                "title": "果核剥壳",
                "url": "https://www.ghxi.com/",
                "tooltip": "果核剥壳是一家综合科技站点，看新闻，分享破解软件、绿色软件，Windows系统。守住互联网最后的一片净土。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZ2h4aS5jb20="
            }
        ]
    },
    {
        "key": "🤫 图书资源",
        "value": [
            {
                "title": "鸠摩图书",
                "url": "https://jiumodiary.com/",
                "tooltip": "鸠摩搜索引擎",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly9qaXVtb2RpYXJ5LmNvbQ=="
            },
            {
                "title": "Z-Library",
                "url": "https://zh.fr1lib.org/",
                "tooltip": "数字图书馆、搜索书籍、免费下载书籍。",
                "icon": "https://favicon.rss.ink/v1/aHR0cHM6Ly96aC5mcjFsaWIub3Jn"
            }
        ]
    },
    {
        "key": "🧐 常去网站",
        "value": [
            {
                "title": "Bilibili",
                "url": "http://bilibili.com",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL2JpbGliaWxpLmNvbQ=="
            },
            {
                "title": "个站商店",
                "url": "http://storeweb.cn",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL3N0b3Jld2ViLmNu"
            },
            {
                "title": "Hostloc",
                "url": "http://hostloc.com",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL2hvc3Rsb2MuY29t"
            },
            {
                "title": "十年之约",
                "url": "http://foreverblog.cn",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL2ZvcmV2ZXJibG9nLmNu"
            },
            {
                "title": "林海草原",
                "url": "http://lhcy.org",
                "tooltip": "作者很懒，没有填写描述。",
                "icon": "https://favicon.rss.ink/v1/aHR0cDovL2xoY3kub3Jn"
            }
        ]
    }
];
let navMap = new Map();
for (let obj of mapObj) {
    navMap.set(obj.key, obj.value);
}

let state = {
    axios: axios,
    nav: mapObj,
    //狭窄的屏幕控
    //narrow: window.innerWidth <= 950,
};

//window.addEventListener('resize', () => state.narrow = window.innerWidth <= 950);

let MainContext = React.createContext(state);

export default MainContext;