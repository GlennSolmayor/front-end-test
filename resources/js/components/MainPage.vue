<template>
    <div>
        <div :class="(isMenuOn == true )?'menu-wrapper  text-center fw-bold p-5':'d-none'">
            <a class="text-decoration-none text-dark py-3" href="#">HOME</a>
            <a class="text-decoration-none py-3" href="#">CONTACT</a>
            <a class="text-decoration-none py-3" href="#">SERVICES</a>
            <a class="text-decoration-none py-3" href="#">PRODUCTS</a>
            <a class="text-decoration-none py-3" href="#">CLIENTS</a>
            <a class="text-decoration-none py-3" href="#">ABOUT</a>
            <a class="text-decoration-none py-3" href="#">RESOURCES</a>
            <a class="text-decoration-none py-3" href="#">EXTRA</a>    
            <i @click="menuClicked()" class="py-5 fas fa-times" style="color:#6c757d;"></i>
        </div>            
        <div :class="(isMenuOn == true )?'menu-on':'menu-off'">
            <div class="header col-12 text-center">
                <div class="text-container">
                    <h1 class=" fw-bolder">Enter Site Title</h1>
                    <span class=" fw-bolder">Enter Site Slogan</span>
                </div>
            </div>
            <div class="navigation d-none d-md-flex justify-content-xl-center justify-content-md-between  pt-5 px-5 p-lg-5">
                <a class="text-decoration-none text-dark px-xl-4" href="#">HOME</a>
                <a class="text-decoration-none px-xl-4" href="#">CONTACT</a>
                <a class="text-decoration-none px-xl-4" href="#">SERVICES</a>
                <a class="text-decoration-none px-xl-4" href="#">PRODUCTS</a>
                <a class="text-decoration-none px-xl-4" href="#">CLIENTS</a>
                <a class="text-decoration-none px-xl-4" href="#">ABOUT</a>
                <a class="text-decoration-none px-xl-4" href="#">RESOURCES</a>
                <a class="text-decoration-none px-xl-4" href="#">EXTRA</a>    
            </div>
            <div class="d-flex d-md-none p-0 justify-content-end p-3">
                    <i @click="menuClicked()" class="fas fa-bars" style="font-size:24px;color:#33ACD7;"></i>
            </div>
            <div class="content d-flex">
                <div class="main-menu d-none  d-sm-none d-lg-none d-xl-block d-xxl-block col-3  border-end border-2 pt-lg-5 ms-5 ps-lg-5">
                    <Span class="text-header ms-5 fw-bold">Main Menu</Span>
                    <div class="con mt-3 mb-3 ms-5  py-3">
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>
                        <ul>
                            <li>Menu 1</li>
                        </ul>                                                                                                                                                                
                    </div>
                    <div class="con py-3">
                        <Span class="text-header mt-5 ms-5 fw-bold">Block</Span>           
                        <div class="mt-3 mb-3 pe-3 ms-5">                    
                            <p class="ms-3">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </p> 
                        </div>                         
                    </div>
                </div>   
                <div class="gallery-container col-12 col-lg-12 col-xl-7 px-3 p-md-5 pb-5 ps-xl-5">
                    <div class="pb-3">
                        <span class="text-header fw-bold">Gallery</span>
                    </div>
                    <div class="pb-5">
                        <p>
                            In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero. In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.                   
                        </p>
                        <a href="#">Read more...</a>
                    </div>
                    <div class="pt-3">
                        <p>
                            In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero. In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero. In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero. In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.
                        </p>  
                    </div>
                    <div class="pt-5"> 
                        <ul>
                            <li class="mb-4">
                                <div class="list-item p-0">
                                    In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis.
                                </div>                            
                            </li>                   
                            <li class="mb-4">
                                <div class="list-item p-0">
                                    In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis.
                                </div>                            
                            </li>                   
                            <li class="mb-4">
                                <div class="list-item p-0">
                                    In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis.
                                </div>                            
                            </li>                   
                            <li class="mb-4">
                                <div class="list-item p-0">
                                    In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis.
                                </div>                            
                            </li>                   
                            <li class="mb-4">
                                <div class="list-item p-0">
                                    In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis.
                                </div>                            
                            </li>                   
                            <li class="mb-4">
                                <div class="list-item p-0">
                                    In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis.
                                </div>                            
                            </li>                   
                        </ul>
                    </div>
                </div>   
            </div>    
            <div class="footer text-center mt-5" style="background-color:#A6ADB4;">
                <small class="text-white">Copyright &#169;  2021</small>
            </div>            
        </div>
    </div>

</template>
<script>

export default {
    data(){
        return{
            isMenuOn: false
        }
    },
    methods:{
        menuClicked(){
            this.isMenuOn = !this.isMenuOn
        }
    }
}
</script>

