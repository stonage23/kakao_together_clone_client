const publicBaseUrl = `${process.env.PUBLIC_URL}/assets/images`;
const baseUrl = '/assets/images';

const images = {
    mainLogo: publicBaseUrl + '/logo/logo_main.svg',
    avatar: publicBaseUrl + '/avatar/avatar.png',
    avatarLogin: publicBaseUrl + '/avatar/avatar_login_default.png',
    squircle: publicBaseUrl + '/svg/squircle.svg',

    hello: {
        1: baseUrl + '/img_a_1.png',
        2: baseUrl + '/img_a_2.png',
        3: baseUrl + '/img_a_3.png',
        4: baseUrl + '/img_a_4.png',
    }
}

export default images;