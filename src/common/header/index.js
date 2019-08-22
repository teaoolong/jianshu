import React, { Component } from 'react'
import { HeaderWrap, Logo, Container, LeftUl, LeftLi, LeftLiA, SearchForm, SearchInput, SearchBtn, RightA } from './style'
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
    }
    searchInputFocused = () => {
        this.setState({
            focused: true
        })
    }
    searchInputBlur = () => {
        this.setState({
            focused: false
        })
    }
    render() {
        return (
            <HeaderWrap>
                <Logo />
                <RightA className="right-btn write-article"><i className='iconfont'>&#xecca;</i> 写文章</RightA>
                <RightA className="right-btn reg">注册</RightA>
                <RightA>登录</RightA>
                <RightA className="beta-tag">
                    <img alt='' src={require('../../assets/img/diamond.png')} />
                </RightA>
                <RightA><i className='iconfont font-btn'>&#xe732;</i> </RightA>

                <Container>
                    <LeftUl>
                        <LeftLi className='active'>
                            <LeftLiA><i className='iconfont'>&#xe644;</i>
                                首页</LeftLiA>

                        </LeftLi>
                        <LeftLi>
                            <LeftLiA><i className='iconfont'>&#xe64c;</i>
                                下载APP</LeftLiA>

                        </LeftLi>
                        <LeftLi>

                            <SearchForm>
                                <CSSTransition in={this.state.focused} timeout={400} classNames="search-box">
                                    <SearchInput onFocus={this.searchInputFocused} onBlur={this.searchInputBlur} className={this.state.focused ? 'focus' : ''} />
                                </CSSTransition>
                                <SearchBtn className={this.state.focused ? 'focus' : ''}><i className='iconfont'>&#xe624;</i></SearchBtn>
                            </SearchForm>
                        </LeftLi>
                    </LeftUl>
                </Container>
            </HeaderWrap>
        )
    }

}

export default Header