<template>
    <div class="header">
        <div class="top sb media564">
            <div class="sa width30">
                <div class="al">
                    <img class="topImg1" src="@/assets/img/phone-call.png" alt="">
                    <div>(+800) 123 456 7890</div>
                </div>
                <div class="al">
                    <img class="topImg1" src="@/assets/img/email.png" alt="">
                    <div>manager@shop.com</div>
                </div>
            </div>
            <div class="sa width70">
                <div class="sa width60 marl">
                    <div class="al">
                        <img class="topImg" src="@/assets/img/bx-wallet.png" alt="">
                        <div>My Wallet</div>
                    </div>
                    <div class="al">
                        <img class="topImg" src="@/assets/img/blogging.png" alt="">
                        <div>Social media</div>
                    </div>
                    <div class="al">
                        <img class="topImg" src="@/assets/img/shield.png" alt="">
                        <div>Guarantee</div>
                    </div>
                    <div class="al">
                        <img class="topImg" style="width: 17px; height: 17px;" src="@/assets/img/card.png" alt="">
                        <div>Payment method</div>
                    </div>
                    <div class="al">
                        <img class="topImg" style="width: 17px; height: 17px;" src="@/assets/img/setting.png" alt="">
                        <div>Setting</div>
                    </div>
                </div>
                <div class="ju width10">
                    <div class="al">
                        <img class="topImg" style="width: 17px; height: 17px;" src="@/assets/img/user.png" alt="">
                        <div>Register or Sign in</div>
                    </div>
                </div>
            </div>
            <div class="mobileAboutMe al">
                <div class="al">
                    <img class="topImg" style="width: 17px; height: 17px;" src="@/assets/img/user.png" alt="">
                    <div>Register or Sign in</div>
                </div>
                <div class="aboutMeImg al">
                    <img class="" src="@/assets/img/about.png" alt="">
                </div>
            </div>
        </div>
        <div class="content">
            <div class="flex sb564">
                <div class="width45 sa al">
                    <div class="Logo"><img src="@/assets/img/Logo.jpg" alt=""></div>
                    <div class="flex search">
                        <div class="search_wrap">
                            <input type="text" name="" id="">
                        </div>
                        <div class="searchImg_wrap al ju cursor"> 
                            <img src="@/assets/img/search.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="width55 flex menuWrap">
                    <div class="sb al menuText none1195">
                        <div class="cursor">HOME</div>
                        <div class="cursor">SHOP</div>
                        <div class="cursor">RECOMMENDATION</div>
                        <div class="cursor">CONTACT US</div>
                    </div>
                    <div class="sb al logoList">
                        <div class="cursor"><img src="@/assets/img/suo.png" alt=""></div>
                        <div class="cursor"><img src="@/assets/img/person.png" alt=""></div>
                        <div class="cursor"><img src="@/assets/img/bell.png" alt=""></div>
                        <div class="cursor"><img style="height: 20px;" src="@/assets/img/message.png" alt=""></div>
                        <div class="cursor" @click="menu = !menu"><img src="@/assets/img/list.png" alt=""></div>

                        <transition name="fade">
                            <div class="menuList" v-if="menu">
                                <div class="sb al item mobileMenu">
                                    <div class="item_label al">HOME</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item mobileMenu">
                                    <div class="item_label al">SHOP</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item mobileMenu">
                                    <div class="item_label al">RECOMMENDATION</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item mobileMenu">
                                    <div class="item_label al">CONTACT US</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>

                                <div class="sb al item">
                                    <div class="item_label al">Cars&Property</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item">
                                    <div class="item_label al">Fashion</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item">
                                    <div class="item_label al">Home & living</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item">
                                    <div class="item_label al">Mobiles & Electrinics</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item">
                                    <div class="item_label al">Games</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item">
                                    <div class="item_label al">Jobs & Services</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item">
                                    <div class="item_label al">Kitchen & Appliances</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item">
                                    <div class="item_label al">Babies & Kids</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item">
                                    <div class="item_label al">Antiques</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item">
                                    <div class="item_label al">Design & Craft</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item">
                                    <div class="item_label al">Sport</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                                <div class="sb al item">
                                    <div class="item_label al">Tickets/Vouches</div>
                                    <div class="al">
                                        <img style="height: 18px;" src="@/assets/img/arrow-right.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="ju mobileSearch">
                <div class="flex search1">
                    <div class="search_wrap1">
                        <input type="text" name="" id="">
                    </div>
                    <div class="searchImg_wrap1 al ju cursor"> 
                        <img src="@/assets/img/search.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            menu: false,
        }
    }
}
</script>

<style lang='less' scoped>
    @import "./css.less";
</style>