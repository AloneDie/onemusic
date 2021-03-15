import { _get } from './index';

// 获取歌单详情
export const getSongList = data => {
    let req = {
        data,
        url: `/top/playlist/highquality?limit=${data}`,
    };
    return _get(req);
};

// 获取新歌
export const getNewSong = data => {
    let req = {
        data,
        url: '/top/song',
    };
    return _get(req);
};

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
        data,
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
