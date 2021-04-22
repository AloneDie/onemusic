import { _get } from './index';

// 获取首页
export const getIndex = data => {
    let req = {
        data,
        url: '/homepage/block/page',
    };
    return _get(req);
};

// 获取歌曲的URL
export const getSongUrl = data => {
    let req = {
        data,
        url: `/song/url?id=${data}`,
    };
    return _get(req);
};

// 获取音乐是否可用
export const getSongSucc = data => {
    let req = {
        data,
        url: `/check/music?id=${data}`,
    };
    return _get(req);
};

// 获得歌曲详情
export const getSongInfor = data => {
    let req = {
        data,
        url: `/song/detail?ids=${data}`,
    };
    return _get(req);
};

// 获取专辑内容
export const getSongAlbum = data => {
    let req = {
        url: `/album?id=${data}`,
    };
    return _get(req);
};

// 获取歌词
export const getSongLrc = data => {
    let req = {
        data,
        url: `/lyric?id=${data}`,
    };
    return _get(req);
};

// 获取歌单详情
export const getSongDetail = data => {
    let req = {
        data,
        url: `/playlist/detail?id=${data}`,
    };
    return _get(req);
};
