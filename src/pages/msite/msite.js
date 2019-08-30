import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js';

//引入样式，还可以加上自己的样式
import 'swiper/dist/css/swiper.min.css';


export default class Msite extends Component {

    Swiper(){
        new Swiper('.swiper-container',{
            loop: true, // 循环模式选项
        
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
        
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });
    }
    componentDidMount(){
        this.Swiper();
    }
    render() {
        return (
            <div className="msite">
                    我是商品页
                    <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">Slide 1</div>
                        <div class="swiper-slide">Slide 2</div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
