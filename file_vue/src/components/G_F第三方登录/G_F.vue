<template>
    <div>
        <div class="al label cursor">
            <label for="facebook al">
                <div id="facebook" class="al cursor" style="opacity:0;border:solid 1px">
                    <fb-signin-button
                        :params="fbSignInParams"
                        @success="onSignInSuccess"
                        @error="onSignInError">
                        facebook
                    </fb-signin-button>
                </div>
            </label>
        </div>
        <div class="al label">Google</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // fbSignInParams: {
            //     scope: 'email,user_likes',
            //     return_scopes: true
            // },
        }
    },
    mounted () {
        let that = this
        gapi.load('auth2', function(){
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            var auth2 = gapi.auth2.init({
                client_id: '628942639023-6eghdtqbgk8vvdj20tuc7l2708mshmd8.apps.googleusercontent.com', //客户端ID
                cookiepolicy: 'single_host_origin',
                scope: 'profile' //可以请求除了默认的'profile' and 'email'之外的数据
            });
            that.attachSignin(that.$refs.google,auth2);
		});
    },
    methods: {
        onSignInSuccess (response) {       //Facebook登录
            let that = this
            FB.api('/me', dude => {
                console.log(`Good to see you, ${dude.name}.`)
            })
            console.log(response) //返回第三方的登录信息 token等
        },
        attachSignin(element,auth2) {        //谷歌登录
            let that = this
            var googleUser = {}
            auth2.attachClickHandler(element, {},
            function(googleUser) {
                that.loading = true
                localStorage.setItem('clientType',6)
                that.goo = "Signed in: " + googleUser.getBasicProfile().getName();
                var profile = auth2.currentUser.get().getBasicProfile();
                // localStorage.setItem("G_token", googleUser.getAuthResponse().id_token )
                // localStorage.setItem('G_ID', profile.getId() )
    
                localStorage.setItem('typeMsg', JSON.stringify({
                    ID: profile.getId(),
                    FullName: profile.getName(),
                    GivenName: profile.getGivenName(),
                    FamilyName: profile.getFamilyName(),
                    ImageURL: profile.getImageUrl(),
                    Email: profile.getEmail()
                }))
            }, function(error) {
                that.loading = false
                console.log(JSON.stringify(error, undefined, 2));
            });
        },
    }
}
</script>

<style>

</style>