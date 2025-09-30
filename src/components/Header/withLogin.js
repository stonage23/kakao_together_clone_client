const { default: styled } = require("styled-components")

const LoginLoading = () => {

    const StyledLoadingContainer = styled.div`
        
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);;
        `;

const StyledLoadingInner = styled.div`
        
        z-index: 2000;
        width: 50vw;
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 10px;
        font-size: 50px;
        text-align: center;
    `;

    return (
        <StyledLoadingContainer>
            <StyledLoadingInner>
                <span>로그인 시도중...</span>
            </StyledLoadingInner>
        </StyledLoadingContainer>
    )
}

const withLogin = () => {

    return ({isLoading, ...rest}) => {
        console.log(isLoading);
        if (isLoading) {
            return <LoginLoading />
        }
    }
}

export  default withLogin;