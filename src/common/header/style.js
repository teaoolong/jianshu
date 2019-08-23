import styled from 'styled-components';
import logPic from '../../assets/img/logo.png'

export const HeaderWrap = styled.div`
    position:relative;
    height:59px;
    border-bottom:1px solid #eee;
    font-size:17px;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    position:absolute;
    top:0;
    left:0;
    width:100px;
    height:56px;
    background:url(${logPic});
    background-size:contain;
`
export const Container = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding:0 15px;
`
export const LeftUl = styled.ul`
    height:100%;
    float:left;
`
export const LeftLi = styled.li`
    height:100%;
    margin-right:10px;
    float:left;
    line-height:58px;
    cursor: pointer;
    &.active{
        color:#ea6f5a;
    }
    .iconfont{
        margin-right:4px;
    }
`
export const LeftLiA = styled.a`
    height:100%;
    padding:15px;
`
export const SearchForm = styled.form`
    position: relative;
    padding-left: 15px;
`
export const SearchInfoWrap = styled.div`
    position: relative;
    top:4px;
    left:0px;
    background-color:#fff;
    z-index:10;
    // visibility:hidden;
    &.focus{
        visibility:visible;
    }
    &:before{
        position: absolute;
        box-shadow:0 0 8px rgba(0,0,0,.2);
        content: "";
        left: 27px;
        width: 15px;
        height: 15px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        top: -7px;
        background-color:#fff;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    background-color:#fff;
    width:260px;
    box-shadow:0 4px 8px rgba(0,0,0,.2);
    padding:0 20px 10px;
    cursor:initial;
    .search_info{
        height:50px;
        span{
            color:#969696;
            font-size:14px;
        }
        a{
            height:100%;
            color:#787878;
            float:right;
            font-size:13px;
            i{
                font-size:13px;
            }
        }
    }
    .search_tags{
        font-size:12px;
        line-height:35px;
        li{
            float:left;
            margin-right:8px;
            .search_tag_item{
                padding:2px 8px;
                color:#787878;
                border:1px solid #ccc;
                border-radius: 5px;
            }
        }
    }
`
export const SearchInput = styled.input.attrs({
    placeholder: '搜索', type: 'text'
})`
    width:240px;
    height:38px;
    background:#eee;
    border-radius:19px;
    padding:0 40px 0 20px;
    &::placeholder{
        color:#999;
    }
    &.focus{
        width:320px;
    }
    &.search-box-enter {
        transition:  width .4s ease-out;
    }
    &.search-box-enter-active {
        width: 320px;
    }
    &.search-box-exit {
        transition:  width .4s ease-out;
    }
    &.search-box-exit-active {
        width: 240px;
    }
`
export const SearchBtn = styled.a`
    position: absolute;
    top:16px;
    right:4px;
    width:32px;
    height:32px;
    border-radius: 50%;
    line-height: 32px;
    text-align: center;
    &.focus{
        background:#969696;
    }
`
export const RightA = styled.a`
    color:#969696;
    float:right;
    height: 100%;
    line-height: 58px;
    margin:0 20px;
    font-size:15px;
    .font-btn{
        font-size:22px;
    }
    img{
        height:25px;
    }
    &.beta-tag{
        margin:7px 20px 0 10px;
    }
    &.right-btn{
        border:1px solid #ec6149;
        height:40px;
        margin:9px 10px 0;
        line-height: 40px;
        padding:0px 28px;
        border-radius: 20px;
        color:#ec6149;
        &.write-article{
            color:#fff;
            padding:0px 18px;
            background:#ec6149;
            margin-right:20px;
        }
        &.reg{
            &:hover{
                background:rgba(236,97,73,.05);
            }
        }
        
    }
`
